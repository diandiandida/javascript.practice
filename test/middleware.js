var should = require('chai').should();
var assert = require('chai').assert;
var Middleware = require('../lib/middleware');

describe('Middleware basic', function() {

  it('should work for basic use', function(done) {

    var mw = new Middleware();

    mw.use(function(next) {
      var self = this;
      setTimeout(function() {
        self.name = 'zhangyi';
        next();
      }, 10);
    });

    mw.use(function(next) {
      var self = this;
      setTimeout(function() {
        self.location = 'shanghai';
        next();
      }, 10);
    });

    mw.start(function() {
      assert.equal(this.name, 'zhangyi');
      assert.equal(this.location, 'shanghai');
      done();
    });

  });

  it('should work for multiple instances', function(done) {

    var mw1 = new Middleware();
    var mw2 = new Middleware();

    mw1.use(function(next) {
      var self = this;
      setTimeout(function() {
        self.name = 'zhangyi';
        next();
      }, 10);
    });

    mw2.use(function(next) {
      var self = this;
      setTimeout(function() {
        self.location = 'shanghai';
        next();
      }, 10);
    });

    mw1.start(function() {
      assert.equal(this.name, 'zhangyi');
      mw2.start(function() {
        assert.equal(this.location, 'shanghai');
        done();
      })
    });


  });



});
