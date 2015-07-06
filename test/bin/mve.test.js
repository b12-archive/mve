const {resolve} = require('path');
const {
  execFile,
  execSync: $
} = require('child_process');
const {readFileSync, readdirSync} = require('fs');

const tape = require('tape-catch');
const {test, plus, curry} = require('1-liners');

const title = curry(plus)('The CLI program:  ');
const mve = resolve(__dirname, '../../module/bin/mve.js');
const $mve = curry(execFile)(mve);
const cwd = resolve(__dirname, '../mock-cwd');
const cat = (filename) => {
  try {
    return readFileSync(resolve(cwd, filename), {encoding: 'utf8'});
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    else throw error;
  }
};
const ls = () => readdirSync(cwd);

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

tape(title('Works for a single file'), (is) => {
  $mve(['a', 'a.moved'], {cwd}, (error) => {
    is.equal(error, null,
      '`mve <source file> <new destination>` succeeds, …'
    );

    is.deepEqual(ls(),
      ['a.moved', 'b', 'c'],
      '…moves the source file to the new destination…'
    );

    is.equal(cat('a.moved'),
      'AAA\n',
      '…and keeps its contents'
    );

    $('git checkout test/mock-cwd/a');
    $('git clean -f test/mock-cwd/a.moved');

    is.end();
  });
});
