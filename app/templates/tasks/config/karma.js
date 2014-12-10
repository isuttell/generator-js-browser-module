/**
 * Karma Jasmine Tests
 *
 * ---------------------------------------------------------------
 *
 * Intergrates Grunt with Karma
 *
 * # single task config
 *    - Runs a complete suite of tests
 *
 * # watch task config
 *    - Used with the watch task and runs in the background
 *
 * For usage docs see:
 *      https://github.com/karma-runner/grunt-karma
 */
module.exports = function(grunt) {

  grunt.config.set('karma', {
    options: {
      configFile: 'tests/karma.conf.js',
      separator: ''
    },
    single: {
      options: {
        singleRun: true,
        browsers: ['PhantomJS'],
        logLevel: 'INFO'
      }
    },
    watch: {
      options: {
        background: true,
        browsers: ['PhantomJS'],
        logLevel: 'DEBUG'
      }
    }
  });

};
