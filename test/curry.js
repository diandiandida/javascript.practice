var assert = require('chai').assert;
var curry = require('../lib/curry');

describe('Curry', function() {

  it('should work for basic currying', function() {
    var add = curry(function(a, b) {
      return a + b;
    });
    assert.equal(add(1)(2), 3);
  });

  it('should work for multi-parameters 1', function() {
    var add = curry(function(a, b, c) {
      return a + b + c;
    });

    assert.equal(add(1, 2)(3), 6);
  });

  it('should work for multi-parameters 2', function() {
    var add = curry(function(a, b, c) {
      return a + b + c;
    });

    assert.equal(add(1)(2)(3), 6);
  });

  it('should be able to be called multiple times 1', function() {
    var add = curry(function(a, b) {
      return a + b;
    });
    assert.equal(add(1)(2), 3);
    assert.equal(add(4)(5), 9);
  });

  it('should be able to be called multiple times 2', function() {
    var add = curry(function(a, b, c) {
      return a + b + c;
    });

    var add1 = add(1);
    assert.equal(add(2)(3), 6);
    assert.equal(add(4, 5), 10);
  });

})
