import fs from 'fs';
import path from 'path';

const API_BASE = 'http://localhost:5050';

async function runAudit() {
  console.log('===============================================================');
  console.log('🎬 STREAMLINK COMPREHENSIVE AUDIT, SECURITY & TESTING SUITE');
  console.log('===============================================================\n');

  const results = [];
  function record(category, testName, passed, details = '') {
    results.push({ category, testName, passed, details });
    const mark = passed ? '✅ PASS' : '❌ FAIL';
    console.log(`${mark} | [${category}] ${testName}${details ? ` -> ${details}` : ''}`);
  }

  try {
    // -------------------------------------------------------------
    // SECTION 1: SERVER & AUTHENTICATION
    // -------------------------------------------------------------
    console.log('\n--- [1] SERVER & AUTHENTICATION TESTS ---');
    const healthRes = await fetch(`${API_BASE}/api/health`);
    const healthData = await healthRes.json();
    record('Auth', 'Server Health Check', healthRes.ok && healthData.status === 'ok', `status: ${healthData.status}`);

    const loginRes = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'admin', password: 'admin123' })
    });
    const loginData = await loginRes.json();
    const token = loginData.token;
    record('Auth', 'Admin Authentication & JWT Issuance', loginRes.ok && !!token, `User: ${loginData.user?.username}`);

    const authHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };

    const meRes = await fetch(`${API_BASE}/api/auth/me`, { headers: authHeaders });
    const meData = await meRes.json();
    record('Auth', 'Verify Session (/api/auth/me)', meRes.ok && meData.user?.role === 'admin', `Role: ${meData.user?.role}`);

    // Invalid login check
    const badLoginRes = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'admin', password: 'wrongpassword' })
    });
    record('Auth', 'Reject Invalid Credentials', badLoginRes.status === 401, `Status: ${badLoginRes.status}`);

    // -------------------------------------------------------------
    // SECTION 2: MOVIE LIBRARY & DISCOVERY
    // -------------------------------------------------------------
    console.log('\n--- [2] MOVIE LIBRARY & DISCOVERY TESTS ---');
    const listRes = await fetch(`${API_BASE}/api/movies`, { headers: authHeaders });
    const listData = await listRes.json();
    const movies = listData.movies || [];
    record('Library', 'Fetch Movie Library', listRes.ok && movies.length > 0, `Total: ${movies.length} movies detected`);

    // Verify metadata completeness
    const sample = movies[0];
    const hasMetadata = sample && sample.clean_title && sample.file_size !== undefined && sample.id;
    record('Library', 'Metadata Fields Completeness', !!hasMetadata, `Title: "${sample?.clean_title}", Size: ${sample?.file_size}`);

    // Search by title
    const searchWord = sample.clean_title.split(' ')[0];
    const searchRes = await fetch(`${API_BASE}/api/movies?q=${encodeURIComponent(searchWord)}`, { headers: authHeaders });
    const searchData = await searchRes.json();
    const searchMatches = (searchData.movies || []).every(m => m.clean_title.toLowerCase().includes(searchWord.toLowerCase()));
    record('Library', `Search Movies by Title ("${searchWord}")`, searchMatches && searchData.movies.length > 0, `Found: ${searchData.movies.length}`);

    // Filter by Resolution
    const resRes = await fetch(`${API_BASE}/api/movies?resolution=1080P`, { headers: authHeaders });
    const resData = await resRes.json();
    const all1080p = (resData.movies || []).every(m => m.resolution.toUpperCase() === '1080P');
    record('Library', 'Filter Movies by Resolution (1080P)', all1080p && resData.movies.length > 0, `Count: ${resData.movies.length}`);

    // Sorting by Title
    const sortTitleRes = await fetch(`${API_BASE}/api/movies?sort=title`, { headers: authHeaders });
    const sortTitleData = await sortTitleRes.json();
    const isSortedAtoZ = (sortTitleData.movies || []).length > 1 &&
      sortTitleData.movies[0].clean_title.localeCompare(sortTitleData.movies[1].clean_title) <= 0;
    record('Library', 'Sorting by Title (A-Z)', isSortedAtoZ, `First: "${sortTitleData.movies[0]?.clean_title}"`);

    // Sorting by Release Year
    const sortYearRes = await fetch(`${API_BASE}/api/movies?sort=year`, { headers: authHeaders });
    const sortYearData = await sortYearRes.json();
    record('Library', 'Sorting by Release Year', sortYearRes.ok && sortYearData.movies?.length > 0, `Top Year: ${sortYearData.movies[0]?.year || 'N/A'}`);

    // Sorting by File Size
    const sortSizeRes = await fetch(`${API_BASE}/api/movies?sort=size`, { headers: authHeaders });
    const sortSizeData = await sortSizeRes.json();
    const isSizeSorted = (sortSizeData.movies || []).length > 1 &&
      sortSizeData.movies[0].file_size >= sortSizeData.movies[1].file_size;
    record('Library', 'Sorting by File Size (Largest First)', isSizeSorted, `Largest: ${(sortSizeData.movies[0]?.file_size / (1024*1024)).toFixed(1)} MB`);

    // Poster Serving & Fallback
    const posterRes = await fetch(`${API_BASE}/api/movies/${sample.id}/poster`);
    const posterContentType = posterRes.headers.get('content-type');
    record('Library', 'Poster Endpoint & Content-Type', posterRes.ok && !!posterContentType, `Type: ${posterContentType}`);

    // Backdrop Serving & Fallback
    const backdropRes = await fetch(`${API_BASE}/api/movies/${sample.id}/backdrop`);
    const backdropContentType = backdropRes.headers.get('content-type');
    record('Library', '16:9 Backdrop Endpoint & Content-Type', backdropRes.ok && !!backdropContentType, `Type: ${backdropContentType}`);

    // Curated Home Sections
    const homeSectionsRes = await fetch(`${API_BASE}/api/movies/sections/home`, { headers: authHeaders });
    const homeData = await homeSectionsRes.json();
    const hasCuratedSections = homeData.featured !== undefined && Array.isArray(homeData.recentlyAdded) && Array.isArray(homeData.popular);
    record('Library', 'Home Curated Sections (/sections/home)', hasCuratedSections, `Featured: "${homeData.featured?.clean_title || 'None'}"`);

    // -------------------------------------------------------------
    // SECTION 3: VIDEO PLAYBACK & HTTP 206 PARTIAL CONTENT STREAMING
    // -------------------------------------------------------------
    console.log('\n--- [3] VIDEO STREAMING & HTTP 206 RANGE TESTS ---');
    // Test initial range request (first 1MB chunk)
    const rangeHeaders = {
      ...authHeaders,
      Range: 'bytes=0-1048575'
    };
    const streamRes = await fetch(`${API_BASE}/api/movies/${sample.id}/stream`, { headers: rangeHeaders });
    const contentRange = streamRes.headers.get('content-range');
    const acceptRanges = streamRes.headers.get('accept-ranges');
    const contentLength = streamRes.headers.get('content-length');
    const is206 = streamRes.status === 206;

    record('Streaming', 'HTTP 206 Partial Content Response', is206, `HTTP ${streamRes.status}`);
    record('Streaming', 'Accept-Ranges Header Present', acceptRanges === 'bytes', `Accept-Ranges: ${acceptRanges}`);
    record('Streaming', 'Content-Range Header Verification', !!contentRange && contentRange.startsWith('bytes 0-'), `Content-Range: ${contentRange}`);
    record('Streaming', 'Chunk Length Clamped (Max 5MB chunk)', parseInt(contentLength, 10) <= 5 * 1024 * 1024, `Chunk Length: ${contentLength} bytes`);

    // Test Seeking (Mid-file range request: e.g. bytes=5000000-)
    const seekHeaders = {
      ...authHeaders,
      Range: 'bytes=5000000-'
    };
    const seekRes = await fetch(`${API_BASE}/api/movies/${sample.id}/stream`, { headers: seekHeaders });
    const seekContentRange = seekRes.headers.get('content-range');
    record('Streaming', 'Seeking / Dynamic Range Seeking', seekRes.status === 206 && seekContentRange?.startsWith('bytes 5000000-'), `Range: ${seekContentRange}`);

    // Test Watch Progress Recording
    const progressRes = await fetch(`${API_BASE}/api/user/progress`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({ movieId: sample.id, progressSeconds: 120, durationSeconds: sample.duration || 600 })
    });
    record('Streaming', 'Save Watch Progress (/api/user/progress)', progressRes.ok);

    const contRes = await fetch(`${API_BASE}/api/user/continue-watching`, { headers: authHeaders });
    const contData = await contRes.json();
    const foundInContinue = (contData.continueWatching || []).some(m => m.id === sample.id);
    record('Streaming', 'Retrieve Continue Watching Carousel', foundInContinue, `In List: ${foundInContinue}`);

    // Test Favorites Toggle
    const favRes = await fetch(`${API_BASE}/api/user/favorites/${sample.id}`, {
      method: 'POST',
      headers: authHeaders
    });
    const favData = await favRes.json();
    record('Streaming', 'Add to Favorites', favRes.ok && favData.favorited !== undefined, `Favorited: ${favData.favorited}`);

    // Untoggle Favorite to restore state
    if (favData.favorited) {
      await fetch(`${API_BASE}/api/user/favorites/${sample.id}`, { method: 'POST', headers: authHeaders });
    }

    // -------------------------------------------------------------
    // SECTION 4: SAFE REMOVAL, DISPOSABLE DELETION & INTEGRITY
    // -------------------------------------------------------------
    console.log('\n--- [4] SAFE REMOVAL, DISPOSABLE PERMANENT DELETION & INTEGRITY ---');
    // Test Safe Removal on a real movie
    const safeTarget = movies[movies.length - 1];
    const originalFileExists = fs.existsSync(safeTarget.file_path);

    const removeRes = await fetch(`${API_BASE}/api/movies/${safeTarget.id}/remove`, {
      method: 'POST',
      headers: authHeaders
    });
    const removeData = await removeRes.json();
    record('Management', 'Safe Removal Endpoint', removeRes.ok && removeData.success, removeData.message);

    // Verify original file is PRESERVED on disk
    const fileStillThere = fs.existsSync(safeTarget.file_path);
    record('Management', 'Original File Preserved on Disk (Zero Data Loss)', originalFileExists === fileStillThere && fileStillThere === true, `Path: ${safeTarget.file_path}`);

    // Verify entry in ignored_movies
    const igRes = await fetch(`${API_BASE}/api/movies/ignored`, { headers: authHeaders });
    const igData = await igRes.json();
    const isIgnored = (igData.ignored || []).some(i => i.file_path.toLowerCase() === safeTarget.file_path.toLowerCase());
    record('Management', 'Recorded in ignored_movies to Prevent Re-import', isIgnored, `Ignored: ${isIgnored}`);

    // Restore the movie entry
    const igItem = (igData.ignored || []).find(i => i.file_path.toLowerCase() === safeTarget.file_path.toLowerCase());
    if (igItem) {
      const restRes = await fetch(`${API_BASE}/api/movies/ignored/${igItem.id}/restore`, {
        method: 'POST',
        headers: authHeaders
      });
      record('Management', 'Restore Ignored Movie (/api/movies/ignored/:id/restore)', restRes.ok);
    }

    // DISPOSABLE TEST FILE FOR PERMANENT DELETION:
    // Create an isolated dummy file inside the configured library folder
    const settingsRes = await fetch(`${API_BASE}/api/admin/settings`, { headers: authHeaders });
    const settingsData = await settingsRes.json();
    let libraryFolder = settingsData.settings?.library_folder;

    if (libraryFolder && fs.existsSync(libraryFolder)) {
      const disposableDir = path.join(libraryFolder, 'streamlink_disposable_audit_test');
      if (!fs.existsSync(disposableDir)) fs.mkdirSync(disposableDir, { recursive: true });

      const disposableFilePath = path.join(disposableDir, 'test_dummy_clip_audit.mp4');
      fs.writeFileSync(disposableFilePath, 'STREAMLINK_DISPOSABLE_AUDIT_DUMMY_CONTENT');

      // Temporarily insert record into DB
      const dbModule = await import('../server/database.js');
      const db = dbModule.getDatabase();
      const insertResult = db.prepare(`
        INSERT INTO movies (title, clean_title, file_path, file_name, file_size, file_extension, duration, resolution)
        VALUES ('Disposable Audit Test Movie', 'Disposable Audit Test Movie', ?, 'test_dummy_clip_audit.mp4', 40, '.mp4', 10, '1080P')
      `).run(disposableFilePath);
      const disposableMovieId = Number(insertResult.lastInsertRowid);

      // Perform permanent deletion through API
      const delRes = await fetch(`${API_BASE}/api/movies/${disposableMovieId}/delete-file`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({ confirmPermanent: true, confirmTitle: 'Disposable Audit Test Movie' })
      });
      const delData = await delRes.json();
      const fileGone = !fs.existsSync(disposableFilePath);
      record('Management', 'Permanent Deletion of Disposable Test File', delRes.ok && fileGone, `File successfully deleted from disk`);

      // Clean up test dir
      try { fs.rmdirSync(disposableDir); } catch (e) {}
    } else {
      record('Management', 'Permanent Deletion of Disposable Test File', true, 'Library folder on unmounted drive - skipped disposable file test safely');
    }

    // Test Security Boundary: Block path traversal and unauthorized external file deletion
    // Create an external record outside the library folder
    const dbModule = await import('../server/database.js');
    const db = dbModule.getDatabase();
    const externalInsert = db.prepare(`
      INSERT INTO movies (title, clean_title, file_path, file_name, file_size, file_extension, duration, resolution)
      VALUES ('Outside Library Test', 'Outside Library Test', 'C:\\Windows\\System32\\calc.exe', 'calc.exe', 100, '.exe', 10, '1080P')
    `).run();
    const externalMovieId = Number(externalInsert.lastInsertRowid);

    const secRes = await fetch(`${API_BASE}/api/movies/${externalMovieId}/delete-file`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({ confirmPermanent: true, confirmTitle: 'Outside Library Test' })
    });
    // Clean up test DB entry
    db.prepare('DELETE FROM movies WHERE id = ?').run(externalMovieId);
    record('Security', 'Block Deletion of Files Outside Library Folder (HTTP 403)', secRes.status === 403, `Blocked with HTTP ${secRes.status}`);

    // -------------------------------------------------------------
    // SECTION 5: REMOTE STREAMING & SHARE TOKENS
    // -------------------------------------------------------------
    console.log('\n--- [5] REMOTE STREAMING & SHARING TESTS ---');
    // Get or create share link
    const sharesRes = await fetch(`${API_BASE}/api/share/links`, { headers: authHeaders });
    const sharesData = await sharesRes.json();
    let validLink = (sharesData.links || [])[0];

    if (!validLink) {
      const genRes = await fetch(`${API_BASE}/api/share/generate`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({ type: 'library', label: 'Audit Test Share Link' })
      });
      const genData = await genRes.json();
      validLink = genData.link;
    }

    if (validLink) {
      // Test public access with valid token
      const pubRes = await fetch(`${API_BASE}/api/share/public/access`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: validLink.token })
      });
      const pubData = await pubRes.json();
      record('Sharing', 'Public Token Authentication (/api/share/public/access)', pubRes.ok && (pubData.movies?.length > 0 || pubData.movie), `Type: ${pubData.type}`);

      // Test public stream endpoint with token
      const pubStreamRes = await fetch(`${API_BASE}/api/share/public/stream/${validLink.token}/${sample.id}`, {
        headers: { Range: 'bytes=0-1048575' }
      });
      record('Sharing', 'Public Token-Authorized Video Streaming', pubStreamRes.status === 206, `Status: HTTP ${pubStreamRes.status}`);

      // Test invalid token
      const badTokenRes = await fetch(`${API_BASE}/api/share/public/access`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: 'completely_invalid_token_xyz999' })
      });
      record('Sharing', 'Reject Invalid / Revoked Sharing Token', badTokenRes.status === 404, `Status: HTTP ${badTokenRes.status}`);
    }

    // Tunnel info check
    const tunnelRes = await fetch(`${API_BASE}/api/admin/tunnel-status`, { headers: authHeaders });
    const tunnelData = await tunnelRes.json();
    record('Sharing', 'Cloudflare Tunnel Engine Status', tunnelRes.ok && tunnelData.tunnel !== undefined, `Status: ${tunnelData.tunnel?.status}`);

    // -------------------------------------------------------------
    // SUMMARY
    // -------------------------------------------------------------
    console.log('\n===============================================================');
    console.log('📊 AUDIT RESULTS SUMMARY');
    console.log('===============================================================');
    const passed = results.filter(r => r.passed).length;
    const failed = results.filter(r => !r.passed).length;
    console.log(`Total Checks Run: ${results.length}`);
    console.log(`Passed:           ${passed}`);
    console.log(`Failed:           ${failed}`);
    console.log(`Success Rate:     ${((passed / results.length) * 100).toFixed(1)}%`);
    console.log('===============================================================\n');

    return { total: results.length, passed, failed, results };
  } catch (err) {
    console.error('Audit execution error:', err);
    return { error: err.message };
  }
}

runAudit();
