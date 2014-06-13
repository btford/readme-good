
var good = require('../good');

describe('headers', function () {
  it('should have a score of 1 if both headers are present', function () {
    expect(good('#license\nMIT\n#see also\nlalala').headers.score).toBe(1);
  });

  it('should have allow "prior art" instead of "see also"', function () {
    expect(good('#license\nMIT\n#prior art\nlalala').headers.score).toBe(1);
  });

  it('should have allow "related" instead of "see also"', function () {
    expect(good('#license\nMIT\n#related\nlalala').headers.score).toBe(1);
  });

  it('should have a score of .5 if the license section is missing', function () {
    var out = good('#see also\nMIT');
    expect(out.headers.score).toBe(.5);
    expect(out.headers.suggestions).toContain('include a "license" section');
  });

  it('should have a score of 0 if both sections are missing', function () {
    var out = good('# my lib');
    expect(out.headers.score).toBe(0);
    expect(out.headers.suggestions).toContain('include a "see also" section');
    expect(out.headers.suggestions).toContain('include a "license" section');
  });

  it('should have a score of 0 for an empty string', function () {
    expect(good('').headers.score).toBe(0);
  });
});

describe('writing', function () {
  it('should have a score of 1 for unproblematic text', function () {
    expect(good('#license\nMIT\n#see also\nlalala').writing.score).toBe(1);
  });

  it('should have a score of 0 for completely problematic text', function () {
    expect(good('was programmed').writing.score).toBe(0);
  });

  it('should have a score of 1 for an empty string', function () {
    expect(good('').writing.score).toBe(1);
  });
});
