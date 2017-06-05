var should = require('chai').should();
var assert = require('chai').assert;
var jumping = require('../lib/jumping');

describe('Jumping', function() {

  // var arr = [];
  //
  // beforeEach(function() {
  //   arr
  // });


  it('should return for default length 8 * 8', function() {
    test(0, 0, 8, 8);
  });

  it('should support width / height', function() {
    test(0, 0, 10, 8);
  });
});

function test(x, y, w, h) {
  var def = mapping(width, height);
  var result = jumping(x, y, width, height);
  var match = true;
  def.forEach(d => {
    if (!result || !result[d]) {
      match = false;
    }
  });
  assert.equal(match, true);
}

function mapping(width, height) {
  // var obj = {};
  var arr = []
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      // obj[`${i}-${j}`] = true;
      arr.push(`${i}-${j}`);
    }
  }

  return arr;
}
