/*
 * checks for the precense of a few headers in a readme
 */

var IMPORTANT_HEADERS = [
  { re: /see also|prior art|related/i,
    suggestion: 'include a "see also" section' },
  { re: /license/i,
    suggestion: 'include a "license" section' }
];

module.exports = function (markdown) {
  var headers = findHeaders(markdown);
  var suggestions = [];

  var fulfilledHeaders = IMPORTANT_HEADERS.filter(function (headRegex) {
    return headers.some(function (headText) {
      return headRegex.re.test(headText);
    }) || (suggestions.push(headRegex.suggestion), false);
  });

  return {
    score: fulfilledHeaders.length / IMPORTANT_HEADERS.length,
    suggestions: suggestions
  }
};


var HEADER = new RegExp('(?:#+)\\s*(.+?)\n', 'gi');
function findHeaders (markdown) {
  var match,
      headers = [];

  while (match = HEADER.exec(markdown)) {
    headers.push(match[1].trim());
  }

  return headers;
}
