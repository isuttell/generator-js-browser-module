/**
 * Flow
 *
 * ---------------------------------------------------------------
 *
 * Flow type checking
 *
 * # src task config
 *    - Runs a complete suite of flow type tests
 *
 * # watch task config
 *    - Used with the watch task and runs in the background
 *
 * For usage docs see:
 *    https://github.com/isuttell/grunt-flow-type-check
 */
module.exports = function(grunt) {

  grunt.config.set('flow', {
    src: {
      options: {
        background: false,
        stripRoot: true
      },
      src: '.'
    },
    watch: {
      options: {
        background: true
      },
      src: '.'
    }
  });

};
