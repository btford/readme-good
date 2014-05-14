var headers = require('./lib/headers'),
    writing = require('./lib/writing');

var CHECKS = {
  writing : 1,
  headers : 3,
  badges  : 3
};

var TOTAL_WEIGHT = Object.keys(CHECKS).reduce(function (sum, key) {
  return CHECKS[key] + sum;
}, 0);

module.exports = function (markdown) {
  return {
    headers: headers(markdown),
    writing: writing(markdown)
  };
};
