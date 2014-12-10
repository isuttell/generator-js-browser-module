/**
 * JSHint
 *
 * ---------------------------------------------------------------
 *
 * # src task config
 *     Lint JS files in the src/ directory
 *
 * # build task config
 *     Lint the concated file
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-jshint
 */
module.exports = function(grunt) {

  grunt.config.set('jshint', {
    pkg: grunt.file.readJSON('package.json'),
    options: {
      jshintrc: true
    },
    src: {
      files: {
        src: ['src/**/*.js']
      }
    },
    build: {
      files: {
        src: ['<%= jshint.pkg.name %>.js']
      }
    }
  });

};
