var chai = require('chai')
  , kaizoku = require('../lib/kaizoku')
  , categories = require('../lib/categories')
  ;

describe('Kaizoku', function(){
  // Test categories.
  describe('#getCategories()', function(){
    it('should return a list of categories', function(){
      chai.assert.equal(categories, kaizoku.getCategories());
    });
  });

  // Test url.
  describe('#setURL("http://pirateproxy.in")', function() {
    it('should set the url to http://pirateproxy.in', function() {
      kaizoku.setURL('http://pirateproxy.in')
      chai.assert.equal('http://pirateproxy.in', kaizoku.url);
    });
  });
});
