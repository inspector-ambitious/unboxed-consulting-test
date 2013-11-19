'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({

    jshint: {

      files: [
        '*.js',
        'lib/**/*.js',
        '*.json',
        '.jshintrc',
        'test/**/*.js'
      ],

      options: {

        jshintrc: '.jshintrc'

      }

    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'mochaTest']);

};
