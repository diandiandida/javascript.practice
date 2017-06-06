var assert = require('chai').assert;
var Middleware = require('../lib/middleware');
var value = require('../lib/value');

describe('Value', function() {

  it('should work for value', function() {
    assert.equal(value(2), 2);
  });

  it('should work for function', function() {
    assert.equal(value(function() {
      return 2;
    }), 2);
  });

  it('should work for nested function', function() {
    assert.equal(value(function() {
      return function() {
        return function() {
          return 2;
        }
      }
    }), 2);
  });

});
