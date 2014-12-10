/**
 * JSCS
 *
 * ---------------------------------------------------------------
 *
 * # src task config
 *   - Enforce Coding standards in the src/ directory
 *
 *
 * For usage docs see:
 *      https://github.com/jscs-dev/grunt-jscs
 */
module.exports = function(grunt) {

  grunt.config.set('jscs', {
    options: {
      config: '.jscsrc'
    },
    src: {
      files: {
        src: ['src/**/*.js']
      }
    }
  });

};
