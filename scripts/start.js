// Cross-platform start wrapper for `npm run start`
// Reads PORT from environment (Hostinger provides $PORT) and starts Next.js with that port.
const { spawn } = require('child_process');

const port = process.env.PORT || process.env.NEXT_PUBLIC_PORT || '3000';
const args = ['start', '-p', port];

const child = spawn('npx', ['next', ...args], { stdio: 'inherit', shell: true });

child.on('exit', (code) => {
  process.exit(code);
});

child.on('error', (err) => {
  console.error('Failed to start Next.js:', err);
  process.exit(1);
});
