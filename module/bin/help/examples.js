const {bold} = require('chalk');

module.exports =
`  ${bold('EXAMPLES')}

    # Rename a file or directory:
    $ mve Readdme.md Readme.md

    # Read from a file, then pipe into it:
    $ format-json package.json > .temp; mve --force .temp package.json
`;
