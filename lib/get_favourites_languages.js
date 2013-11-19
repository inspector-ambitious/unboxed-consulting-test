'use strict';

/**
 * @param repositories The repositories list
 * @returns {Array} The list of favourites languages.
 */
module.exports = function(repositories) {
  var languagesCounts = {};
  var max = 0;

  repositories.forEach(function(repository) {
    var language = repository.language;
    languagesCounts[language] = languagesCounts[language] || 0;
    languagesCounts[language]++;
    max = Math.max(max, languagesCounts[language]);
  });

  var favourites = [];

  for (var language in languagesCounts) {
    if (languagesCounts.hasOwnProperty(language) && languagesCounts[language] === max) {
      favourites.push(language);
    }
  }

  return favourites;
};
