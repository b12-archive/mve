[![Coveralls – test coverage
](https://img.shields.io/coveralls/studio-b12/mve.svg?style=flat-square)
](https://coveralls.io/r/studio-b12/mve)
 [![Travis – build status
](https://img.shields.io/travis/studio-b12/mve/master.svg?style=flat-square)
](https://travis-ci.org/studio-b12/mve)
 [![David – status of dependencies
](https://img.shields.io/david/studio-b12/mve.svg?style=flat-square)
](https://david-dm.org/studio-b12/mve)
 [![Stability: unstable
](https://img.shields.io/badge/stability-unstable-yellowgreen.svg?style=flat-square)
](https://github.com/studio-b12/mve/milestones/1.0)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




mve
===

**Move a file or folder. Platform-independent.**




<p align="center"><a
  title="Graphic by the great Justin Mezzell"
  href="http://justinmezzell.tumblr.com/post/91142673693"
  >
  <br/>
  <br/>
  <img
    src="Readme/Cassette.gif"
    width="400"
    height="300"
  />
  <br/>
  <br/>
</a></p>




Installation
------------

```sh
$ npm install --global mve
```




Usage
-----

<!-- @usage start -->
  SYNOPSIS

    Usage: mve [options] <source> <target>


  OPTIONS

    -h  --help   Print a short synopsis (-h) or this usage info (--help)


  EXAMPLES

    # Rename a file or directory:
    $ mve Readdme.md Readme.md

    # Read from a file, then pipe into it:
    $ format-json package.json > .temp; mve --force .temp package.json
<!-- @usage end -->



License
-------

[MIT][] © [Studio B12 GmbH][]

[MIT]:              ./License.md
[Studio B12 GmbH]:  http://studio-b12.de
