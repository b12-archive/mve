#! /usr/bin/env node

const {stdout, stderr, exit, argv} = process;

const flags = require('minimist')(argv.slice(2));
const files = flags._;

if (flags.h) stdout.write(require('./help/usage'));

if (flags.help) stdout.write([
  require('./help/synopsis'),
  require('./help/options'),
  require('./help/examples'),
].join('\n\n'));

if (flags.h || flags.help) exit(0);

if (files.length !== 2) {
  stderr.write(require('./help/usage'));
  exit(1);
}
