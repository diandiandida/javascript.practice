var should = require('chai').should();
var assert = require('chai').assert;

var array = require('../lib/array');

describe('Test remove array items', function() {

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

/*

describe('Test naive dependency injection', function() {

  var injector;
  beforeEach(function() {
    injector = createInjector();
  });

  it('should inject literal object', function() {
    injector.inject('book', {pageNumber: 10});
    var book = injector.get('book');
    // book.should.be.a('object');
    assert.equal(book.pageNumber, 10);
    // assert.equal(injector.get('book').pageNumber, 10);
  });

  it('should inject by factory function', function() {
    injector.inject('car', function() {
      return {
        run: function() {
          return 'running';
        },
        brake: function() {
          return 'braking';
        }
      }
    });
    var car = injector.get('car');
    assert.equal(car.run(), 'running');
  });

  it('should inject dependencies in array', function() {
    injector.inject('car', ['wheel', 'engine', function(wheel, engine) {
      return {
        description: function() {
          return 'bmw';
        }
      }
    }]);

    var car = injector.get('car');
    car.should.be.a('object');

  });

  it('should inject dependencies', function() {

    injector.inject('wheel', {
      count: 4
    });

    injector.inject('engine', {
      brand: 'oooo'
    });

    injector.inject('car', ['wheel', 'engine', function(wheel, engine) {
      return {
        description: function() {
          return wheel.count + ' wheels, ' + engine.brand + ' engine';
        }
      }
    }]);

    var car = injector.get('car');

    console.log(car.description());
    car.description().should.be.a('string');


  });

  it('should inject by reflection', function() {

    injector.inject('wheel', {
      count: 4
    });

    injector.inject('engine', {
      brand: 'oooo'
    });

    injector.inject('car', function(wheel, engine) {
      return {
        description: function() {
          return wheel.count + ' wheels, ' + engine.brand + ' engine';
        }
      }
    });

  });

  it('should inject by provider', function() {

    injector.inject('car', ['wheel', 'engine', function(wheel, engine) {
      return {
        description: function() {
          return wheel.count + ' wheels, ' + engine.brand + ' engine';
        }
      }
    }]);

    injector.inject('wheel', {
      count: 4
    });

    injector.inject('engine', {
      brand: 'oooo'
    });

  });

});

*/
