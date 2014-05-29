/*
 * checks for the precense of a few headers in a readme
 */

var IMPORTANT_HEADERS = [
  /see also|prior art|related/i,
  /license/i
];

module.exports = function (markdown) {
  var headers = findHeaders(markdown);

  var fulfilledHeaders = IMPORTANT_HEADERS.filter(function (headRegex) {
    return headers.some(function (headText) {
      return headRegex.test(headText);
    });
  });

  return fulfilledHeaders.length / IMPORTANT_HEADERS.length;
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
