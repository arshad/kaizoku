/**
 * @file
 * Kaizoku lib.
 */
var request = require('request')
  , cheerio = require('cheerio')
  , Table = require('cli-table')
  , qs = require('querystring')
  , categories = require('./categories')
  ;

// URL
exports.url = 'http://thepiratebay.se';

/**
 * Search for torrents using the provided keywords.
 */
exports.search = function(keywords, callback) {
  var searchURL = exports.buildQueryString('search', keywords);
  request(searchURL, function (error, response, body) {
    if (error) {
      console.log(error);
    }

    if (!error && response.statusCode == 200) {
      var torrents = exports.extractTorrents(body);
      if (callback) {
        callback(torrents);
      }
    }
  })
}

/**
 * List all top 24h torrents for a category.
 */
exports.top = function(category) {
  var categoryID = categories[category];
  if (categoryID) {
    var topURL = exports.buildQueryString('top', categoryID);
    request(topURL, function (error, response, body) {
      if (error) {
        console.log(error);
      }

      if (!error && response.statusCode == 200) {
        var torrents = exports.extractTorrents(body);
        exports.displayTorrents(torrents);
      }
    });
  }
  else {
    console.log("Error: could not find category: " + category);
  }
}

/**
 * Helper to build a query string.
 */
exports.buildQueryString = function(path, params) {
  return exports.url += '/' + path + '/' + qs.escape(params);
}

/**
 * Extracts torrents from string using cheerio.
 */
exports.extractTorrents = function(string) {
  var torrents = [];
  $ = cheerio.load(string);

  $("table#searchResult").find('tr').each(function() {
    if (!$(this).hasClass('header')) {
      // Parse string for data.
      var torrent = {};
      torrent.title = $(this).find('td').eq(1).find('a').text();
      torrent.magnet = $(this).find('td').eq(1).find('.detName').next('a').attr('href');
      torrent.seeders = $(this).find('td').eq(2).text();
      torrent.leechers = $(this).find('td').eq(3).text();
      torrent.category = $(this).find('td').eq(0).find('a').eq(0).text();
      torrent.subcategory = $(this).find('td').eq(0).find('a').eq(1).text();
      torrents.push(torrent);
    }
  });;

  return torrents;
}

/**
 * Logs torrents to the console in tabuler format.
 */
exports.displayTorrents = function(torrents) {
  var table = new Table({
    head: ['Title', 'Seeders', 'Leechers']
  });

  for (var i in torrents) {
    var torrent = torrents[i];
    table.push(
      [torrent.title, torrent.seeders, torrent.leechers]
    );
  }

  console.log(table.toString());
}

/**
 * Returns all categories defined in ./categories.
 */
exports.getCategories = function() {
  return categories;
}

/**
 * Set the pirate bay URL. Resets to default if the argument is null
 */
exports.setURL = function(newUrl) {
  if(newUrl) exports.url = newUrl; else exports.url = 'http://thepiratebay.se'
}
