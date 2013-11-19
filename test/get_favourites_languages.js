'use strict';

var expect = require('chai').expect;

var getFavouritesLanguages = require(__dirname + '/../lib/get_favourites_languages');

describe('get_favourites_languages', function() {

  function mockRepos(languages) {
    var repos = [];
    languages.forEach(function(language) {
      repos.push({
        language: language
      });
    });
    return repos;
  }

  describe('when there is only one favourite language', function() {

    it('should return the favourites languages list', function() {
      var repos = mockRepos(['Java', 'C', 'Java']);
      expect(getFavouritesLanguages(repos).join(', ')).to.equal('Java');
    });

  });

  describe('when there is more than one favourite language', function() {

    it('should return the favourites languages list', function() {
      var repos = mockRepos(['Java', 'C', 'Java', 'JavaScript', 'JavaScript']);
      expect(getFavouritesLanguages(repos).join(', ')).to.equal('Java, JavaScript');
    });

  });

});
