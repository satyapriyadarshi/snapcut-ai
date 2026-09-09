const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const npmCli = 'C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js';

function run(args, desc) {
  console.log('\n=== ' + desc + ' ===');
  console.log('Running: node ' + npmCli + ' ' + args.join(' '));
  
  const result = spawnSync(process.execPath, [npmCli, ...args, '--no-audit', '--no-fund'], {
    cwd: __dirname,
    encoding: 'utf8',
    timeout: 600000,
    maxBuffer: 100 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe']
  });
  
  if (result.stdout) {
    console.log('STDOUT:');
    console.log(result.stdout.substring(result.stdout.length - 3000));
  }
  if (result.stderr) {
    console.log('STDERR:');
    console.log(result.stderr.substring(result.stderr.length - 3000));
  }
  console.log('Exit code: ' + result.status);
  
  const logFile = path.join(__dirname, 'debug-install.log');
  fs.appendFileSync(logFile, '\n\n=== ' + desc + ' at ' + new Date().toISOString() + ' ===\n');
  fs.appendFileSync(logFile, 'Command: node ' + npmCli + ' ' + args.join(' ') + '\n');
  if (result.stdout) fs.appendFileSync(logFile, 'STDOUT:\n' + result.stdout + '\n');
  if (result.stderr) fs.appendFileSync(logFile, 'STDERR:\n' + result.stderr + '\n');
  fs.appendFileSync(logFile, 'Exit code: ' + result.status + '\n');
  
  return result.status;
}

// Step 1: Install rolldown explicitly first
let code = run(['install', 'rolldown@1.1.12', '--save', '--force'], 'Install rolldown@1.1.12');
if (code !== 0) process.exit(code);

// Step 2: Verify rolldown
const rd = path.join(__dirname, 'node_modules', 'rolldown', 'package.json');
if (fs.existsSync(rd)) {
  const v = JSON.parse(fs.readFileSync(rd, 'utf8')).version;
  console.log('\nrolldown installed: version ' + v);
} else {
  console.log('\nrolldown NOT found after install!');
}

// Step 3: Install all remaining packages
code = run(['install'], 'Install all remaining packages');
process.exit(code);
