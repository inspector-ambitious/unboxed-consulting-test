'use strict';

var https = require('https');
var githubApiRootUrl = 'https://api.github.com/';

/**
 * The Github Api Client class.
 * @param {String} userName The github username
 * @constructor
 */
var GithubClient = function(userName) {
  this.userName = userName;
};

/**
 * Retrieves the repositories list.
 * @param callback The calback function
 */
GithubClient.prototype.getRepos = function(callback) {
  var url = githubApiRootUrl + 'users/' + this.userName + '/repos';

  https.get(url, function(res) {
    var body = '';

    res.on('data', function(chunk) {
      body += chunk;
    });

    res.on('end', function() {
      var json = JSON.parse(body);

      if (json.message) {
        callback('Github Api Client: ' + json.message);
        return;
      }
      callback(null, json);
    });

  })
  .on('error', function(e) {
    callback(e);
  });
};

module.exports = GithubClient;
