
var good = require('../good');

describe('headers', function () {
  it('should have a score of 1 if both headers are present', function () {
    expect(good('#license\nMIT\n#see also\nlalala').headers).toBe(1);
  });

  it('should have allow "prior art" instead of "see also"', function () {
    expect(good('#license\nMIT\n#prior art\nlalala').headers).toBe(1);
  });

  it('should have a score of .5 if the license section is missing', function () {
    expect(good('#see also\nMIT').headers).toBe(.5);
  });

  it('should have a score of 0 if both sections are missing', function () {
    expect(good('# my lib').headers).toBe(0);
  });

  it('should have a score of 0 for an empty string', function () {
    expect(good('').headers).toBe(0);
  });
});

describe('writing', function () {
  it('should have a score of 1 for unproblematic text', function () {
    expect(good('#license\nMIT\n#see also\nlalala').writing).toBe(1);
  });

  it('should have a score of 0 for completely problematic text', function () {
    expect(good('was programmed').writing).toBe(0);
  });

  it('should have a score of 1 for an empty string', function () {
    expect(good('').writing).toBe(1);
  });
});
