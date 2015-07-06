const test = require('tape-catch');

test('Programmatic usage:  Fails', (is) => {
  is.throws(
    () => require('../module/index'),
    /look into `mv`/i,
    'with a helpful message'
  );

  is.end();
});
