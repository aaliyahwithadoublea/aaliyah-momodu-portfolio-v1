// Cross-platform script to clean Next.js cache
const fs = require('fs');
const path = require('path');

const nextDir = path.join(process.cwd(), '.next');

if (fs.existsSync(nextDir)) {
  console.log('Cleaning .next directory...');
  fs.rmSync(nextDir, { recursive: true, force: true });
  console.log('✅ Cache cleared successfully!');
} else {
  console.log('ℹ️  No .next directory found. Nothing to clean.');
}
