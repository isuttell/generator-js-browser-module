/**
 * Minify JS
 *
 * ---------------------------------------------------------------
 *
 * Minifies and then creates a fancy banner on the top
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function(grunt) {

  grunt.config.set('uglify', {
    pkg: grunt.file.readJSON('package.json'),
    src: {
      options: {
        banner: '/*!\n<%= asciify_title %> <%= uglify.pkg.name %> <%= uglify.pkg.version %> <<%= uglify.pkg.homepage %>>\n' +
        ' Contributor(s): <%= uglify.pkg.author %>\n Last Build: ' + grunt.template.today('yyyy-mm-dd') +
        '\n*/\n',
        report: 'min'
      },
      files: {
        '<%= uglify.pkg.name %>.min.js': ['<%= uglify.pkg.name %>.js']
      }
    }
  });

};
