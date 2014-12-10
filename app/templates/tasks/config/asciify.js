/**
 * Asciify
 *
 * ---------------------------------------------------------------
 *
 * Create a fancy banner
 *
 * For usage docs see:
 *    https://github.com/olizilla/grunt-asciify
 */
module.exports = function(grunt) {

  grunt.config.set('asciify', {
    pkg: grunt.file.readJSON('package.json'),
    options: {
      font: 'cyberlarge',
      log: false
    },
    title: {
      text: '<%= asciify.pkg.name %>'
    }
  });

};
