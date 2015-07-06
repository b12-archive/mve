const {resolve} = require('path');
const {execFile} = require('child_process');

const tape = require('tape-catch');
const {test, plus, curry} = require('1-liners');

const title = curry(plus)('The CLI program:  ');
const mve = resolve(__dirname, '../../module/bin/mve.js');
const $mve = curry(execFile)(mve);
const cwd = resolve(__dirname, '../mock-cwd');

tape(title('Prints usage'), (is) => {
  is.plan(10);

  $mve([], (error, _, stderr) => {
    is.equal(error && error.code, 1,
      '`mve` fails…'
    );

    is.ok(
      test(stderr, /^usage:/i),
      '…and prints usage to stderr'
    );
  });

  $mve(['--invalid', '--options'], (error, _, stderr) => {
    is.equal(error && error.code, 1,
      '`mve --invalid --options` fails…'
    );

    is.ok(
      test(stderr, /^usage:/i),
      '…and prints usage to stderr'
    );
  });

  $mve(['a'], {cwd}, (error, _, stderr) => {
    is.equal(error && error.code, 1,
      '`mve <just one file>` fails…'
    );

    is.ok(
      test(stderr, /^usage:/i),
      '…and prints usage to stderr'
    );
  });

  $mve(['-h'], (error, stdout) => {
    is.equal(error, null,
      '`mve -h` succeeds…'
    );

    is.ok(
      test(stdout, /^usage:/i),
      '…and prints usage'
    );
  });

  $mve(['--help'], (error, stdout) => {
    is.equal(error, null,
      '`mve --help` succeeds…'
    );

    is.ok(
      test(stdout, /SYNOPSIS/),
      '…and prints manpage-like help'
    );
  });
});
