#!/usr/bin/env node

/**
 * Clear OPENAI_API_KEY to match the starter's expected behaviour, then start Next.js.
 */
delete process.env.OPENAI_API_KEY;

const { spawn } = require('node:child_process');

const child = spawn('next', ['dev'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});

child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});
