var chai = require('chai')
  , kaizoku = require('../lib/kaizoku')
  , categories = require('../lib/categories')
  ;

describe('Kaizoku', function(){
  // Test search.
  describe('#search("Game of Thrones)', function() {
    it('should return an array of torrents', function() {
      kaizoku.search("Game of Thrones", function(torrents) {
        chai.expect(torrents).to.not.be.empty();
      });
    });
  });

  // Test empty search.
  describe('#search("lipsum dolor")', function() {
    it('should return an empty array', function() {
      kaizoku.search("lipsum dolor", function(torrents) {
        chai.expect(torrents).to.be.empty();
      });
    });
  });

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
