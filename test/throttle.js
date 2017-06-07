var assert = require('chai').assert;
// var throttle = require('lodash').throttle;
var throttle = require('../lib/throttle');
var sinon = require('sinon');

describe('Throttle', function() {
  var clock;

  beforeEach(function(){
    clock = sinon.useFakeTimers();
  });

  afterEach(function(){
    clock.restore();
  });

  it('should work without threshold', function() {
    var count = 0;
    var throttled = throttle(function() {
      count++;
    }, 50);

    throttled();

    assert.equal(count, 1);
  });

  it('should be called only once without threshold', function() {
    var count = 0;
    var throttled = throttle(function() {
      count++;
    }, 50);

    throttled();
    throttled();
    throttled();

    assert.equal(count, 1);
  });

  it('should work for basic use', function() {
    var count = 0;
    var throttled = throttle(function() {
      count++;
    }, 50);

    throttled();
    throttled();
    throttled();

    clock.tick(51);

    assert.equal(count, 2);

    throttled();
    throttled();

    clock.tick(51);
    assert.equal(count, 4);
  });

  it('should work with this', function() {
    var that = null;
    var self = {id: 1};
    var throttled = throttle(function() {
      that = this;
    }, 50);

    throttled.call(self);

    assert.equal(that, self);
    assert.deepEqual(that, self);
  });

  it('should work with arguments', function() {
    var args = null;

    var throttled = throttle(function() {
      args = Array.prototype.slice.call(arguments);
    }, 50);

    throttled(1, 2, 3);

    assert.deepEqual(args, [1,2,3]);

  });

  it('should apply last arguments', function() {
    var args = null;

    var throttled = throttle(function() {
      args = Array.prototype.slice.call(arguments);
    }, 50);

    throttled(1, 2, 3);
    throttled(4, 5, 6);

    clock.tick(51);

    assert.deepEqual(args, [4, 5, 6]);
  });

  it('should isolate each other', function() {
    var fn = function() {
      this.count++;
      this.args = Array.prototype.slice.call(arguments);
    };

    var throttled1 = throttle(fn, 50);
    var throttled2 = throttle(fn, 50);

    var self1 = {count:0};
    var self2 = {count:0};

    throttled1.call(self1, 1, 2)
    throttled1.call(self1, 3, 4)
    throttled2.call(self2, 5, 6)

    clock.tick(51);

    assert.deepEqual(self1.args, [3, 4]);
    assert.deepEqual(self2.args, [5, 6]);

    assert.equal(self1.count, 2);
    assert.equal(self2.count, 1);
  });




/*

    it('executed every threshold ms', function(done) {
        var startTime = new Date();
        var calledTimes = [];
        var throttled = throttle(function() {
            calledTimes.push(new Date() - startTime);
        }, 10);
        throttled(); //start now
        var interval = setInterval(throttled, 1);
        setTimeout(function() {
            clearInterval(interval);
            assert.deepEqual(calledTimes, [
                0,
                11,
                22,
                33,
                44,
                55
            ], '每隔固定的阀值期，都会执行一次测试失败');
            done();
        }, 59);
        clock.tick(60);
    });
//    */

});
