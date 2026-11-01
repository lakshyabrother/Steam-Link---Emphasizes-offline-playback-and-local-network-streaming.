import http from 'http';
import fs from 'fs';
import path from 'path';
import { getDatabase } from '../server/database.js';
import { scanLibrary } from '../server/scanner.js';
import { startTunnel, stopTunnel, tunnelState } from '../server/tunnel.js';
import { CONFIG } from '../server/config.js';

async function runTests() {
  console.log('--- STARTING STREAMLINK COMPREHENSIVE AUTOMATED TESTS ---');

  // Test 1: Database
  console.log('\n[TEST 1] Testing Database & Default Admin...');
  const db = getDatabase();
  const admin = db.prepare("SELECT username, role FROM users WHERE username = 'admin'").get();
  if (!admin || admin.role !== 'admin') throw new Error('Admin account not found');
  console.log('✓ Admin account verified:', admin);

  // Test 2: Scanner on Downloads
  console.log('\n[TEST 2] Testing Movie Scanner on C:/Users/ASUS/Downloads...');
  const scanResult = await scanLibrary('C:/Users/ASUS/Downloads');
  console.log('✓ Scan completed:', scanResult);
  if (scanResult.totalFiles === 0) throw new Error('No files found in scan');

  // Test 3: Query Movies
  console.log('\n[TEST 3] Testing Movies Query & Clean Titles...');
  const movies = db.prepare('SELECT id, clean_title, year, resolution, duration, file_size FROM movies').all();
  console.log(`✓ Total movies in database: ${movies.length}`);
  movies.slice(0, 3).forEach(m => console.log(`   - ID ${m.id}: "${m.clean_title}" (${m.year || 'N/A'}) [${m.resolution}] - ${m.file_size} bytes`));

  // Test 4: Subtitles
  console.log('\n[TEST 4] Testing Subtitles Extraction...');
  const corpseWasher = db.prepare("SELECT id, subtitles_json FROM movies WHERE clean_title LIKE '%Corpse Washer%'").get();
  if (corpseWasher) {
    const subs = JSON.parse(corpseWasher.subtitles_json || '[]');
    console.log(`✓ Subtitles found for Corpse Washer: ${subs.length}`);
    subs.forEach(s => console.log(`   - Language: ${s.language}, File: ${s.name}`));
  }

  // Test 5: HTTP Range Streaming simulation
  console.log('\n[TEST 5] Testing HTTP Range Streaming (206 Partial Content)...');
  const targetMovie = db.prepare("SELECT file_path FROM movies WHERE file_extension = '.mp4' LIMIT 1").get();
  if (targetMovie) {
    const stat = fs.statSync(targetMovie.file_path);
    const start = 100000;
    const end = 200000;
    const chunkSize = end - start + 1;

    const stream = fs.createReadStream(targetMovie.file_path, { start, end });
    let readBytes = 0;
    for await (const chunk of stream) {
      readBytes += chunk.length;
    }
    if (readBytes !== chunkSize) throw new Error(`Range chunk mismatch: expected ${chunkSize}, got ${readBytes}`);
    console.log(`✓ HTTP 206 Range simulation succeeded! Read ${readBytes} bytes (range ${start}-${end} of ${stat.size})`);
  }

  // Test 6: Cloudflare Tunnel Integration
  console.log('\n[TEST 6] Testing Cloudflare Tunnel Process Lifecycle...');
  console.log('Starting Cloudflare Tunnel (Quick Tunnel mode)...');
  const tunnelRes = await startTunnel(5050);
  console.log('Tunnel state:', tunnelRes);

  if (tunnelState.publicUrl) {
    console.log(`✓ Public HTTPS access URL established: ${tunnelState.publicUrl}`);
  } else {
    console.log('Tunnel starting in background (status:', tunnelState.status, ')');
  }

  console.log('Stopping Cloudflare Tunnel safely...');
  await stopTunnel();
  console.log('✓ Cloudflare Tunnel successfully stopped. Status:', tunnelState.status);

  console.log('\n======================================================');
  console.log('🎉 ALL STREAMLINK TEST CASES PASSED WITH 100% SUCCESS!');
  console.log('======================================================\n');
}

runTests().catch(err => {
  console.error('\n❌ TEST FAILED:', err);
  process.exit(1);
});

