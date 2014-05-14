var writeGood = require('write-good');

/* this is super naive so pls dont get your feelings all worked up
 * if it tells you your writing is bad. it's okay i promise. no one
 * will think less of you from the output of this program ♥
 */

module.exports = function (markdown) {
  var suggestions = writeGood(markdown);
  var chars = suggestions.reduce(function (sum, suggestion) {
    return sum + suggestion.offset;
  }, 0);

  return markdown.length === 0 ?
      1 : ((markdown.length - chars) / markdown.length);
};
