'use strict';
var nock = require('nock');

var expect = require('chai').expect;

var GithubClient = require(__dirname + '/../lib/github_client');

describe('github_client', function() {

  afterEach(function() {
    nock.cleanAll();
  });

  it('should return the repositories list for a specific user', function(done) {
    var scope = nock('https://api.github.com/')
      .get('/users/foobar/repos')
      .reply(200, [{
        name: 'foo'
      },{
        name: 'bar'
      }]);

    var client = new GithubClient('foobar');
    client.getRepos(function(error, repos) {
      expect(error).to.equal(null);
      expect(repos[0].name).to.equal('foo');
      expect(repos[1].name).to.equal('bar');
      done();
    });
  });

  it('should return an error if the user is not found', function(done) {
    var scope = nock('https://api.github.com/')
      .get('/users/foobar/repos')
      .reply(200, {message: 'Not Found' });
    var client = new GithubClient('foobar');
    client.getRepos(function(error, repos) {
      expect(error).to.equal('Github Api Client: Not Found');
      expect(repos).to.equal(undefined);
      done();
    });
  });

});