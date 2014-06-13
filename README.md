# readme good [![Build Status](https://travis-ci.org/btford/readme-good.svg?branch=master)](https://travis-ci.org/btford/readme-good)

naive judge of the quality of a markdown readme for an open source project

## Install
```shell
npm install readme-good
```

## Usage

```javascript
var readmeGood = require('readme-good');

// returns a hash representing % fir each category
// 1 is good, 0 is bad
readmeGood('# this is some markdown\n\n# license\n');
// -> { headers: { score: 0.5, suggestions: ['should have a "see also" section'] },
//      writing: { score: 1,   suggestions: [] } }
```

## Future Work

* check that languages are specified in code blocks

## License
MIT
