import { execSync } from 'child_process';

const env = {
  ...process.env,
  PATH: `C:\\Users\\ASUS\\AppData\\Local\\Programs\\MinGit\\cmd;${process.env.PATH || ''}`
};

const opts = { cwd: 'C:\\Users\\ASUS\\Downloads\\steamlink', env, stdio: 'inherit' };
execSync('git add -A', opts);
execSync('git commit -m "feat(deployment): configure Vercel deployment with cross-platform build and VITE_API_BASE_URL"', opts);
execSync('git push origin main', opts);
