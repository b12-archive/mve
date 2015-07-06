#! /usr/bin/env node

const {readFileSync, writeFileSync} = require('fs');
const {exit} = process;
const {resolve} = require('path');
const {exec} = require('child_process');

const mve = resolve(__dirname, '../bin/mve.js');
const readme = resolve(__dirname, '../Readme.md');

exec(`${mve} --help`, (error, output) => {
  if (error) throw error;

  writeFileSync(
    readme,
    readFileSync(readme, {encoding: 'utf8'}).replace(
      /(<!-- @usage start -->)[^]*(<!-- @usage end -->)/,
      `$1\n${output}$2`
    )
  );

  exit(0);
});
