const {bold} = require('chalk');

module.exports =
`  ${bold('EXAMPLES')}

    # Rename a file:
    $ mve Readdme.md Readme.md

    # Move a directory:
    $ mve --mkdirp source/directory target/directory

    # Read from a file, then pipe into it:
    $ format-json package.json > .temp; mve --force .temp package.json
`;
