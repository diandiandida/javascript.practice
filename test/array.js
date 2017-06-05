var should = require('chai').should();
var assert = require('chai').assert;
var _ = require('lodash');

var array = require('../lib/array');

describe('Remove array item by index', function() {

  var arr = [];

  beforeEach(function() {
    arr = [
      'chun',
      'xia',
      'qiu',
      'dong'
    ];
  });

  it('should delete the first item', function() {
    array.remove(arr, 0);
    assert.deepEqual(arr, ['xia', 'qiu', 'dong'], '删除第0个元素失败');
  });

  it('should delete the third item', function() {
    array.remove(arr, 2);
    assert.deepEqual(arr, ['chun', 'xia', 'dong'], '删除第2个元素失败');
  });

  it('should delete the item not exists', function() {
    array.remove(arr, 9);
    assert.deepEqual(arr, [ 'chun', 'xia', 'qiu', 'dong' ], '删除一个不存在的元素应该对原数组没有任何影响');
  });
});

describe('Flatten the array', function() {
  var arr = [];

  beforeEach(function() {});

  it('basic test', function() {
    var arr = [
      1,
      [
        2,
        [
          3,
          4
        ],
        5
      ],
      6
    ];
    assert.deepEqual(array.flatten(arr), _.flattenDeep(arr));
  });

});
