'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('js-browser-module:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        name: 'temp app',
        username: 'js-browser-module',
        email: 'js-browser-module@test.com'
      })
      .on('end', done);
  });

  it('should creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
      '.editorconfig',
      '.jshintrc',
      '.jscsrc',
      '.flowconfig',
      '.gitignore',
      '.travis.yml',
      'Gruntfile.js',
      'src/temp-test.js',
      'tests/karma.conf.js',
      'tests/reportTemplate.html',
      'tests/vendor/jquery.js',
      'tests/vendor/lodash.js',
      'tests/specs/.jshintrc',
      'tests/specs/module-spec.js',
      'tasks/register/default.js',
      'tasks/register/build.js',
      'tasks/register/test.js',
      'tasks/config/asciify.js',
      'tasks/config/concat.js',
      'tasks/config/flow.js',
      'tasks/config/jscs.js',
      'tasks/config/jshint.js',
      'tasks/config/karma.js',
      'tasks/config/uglify.js',
      'tasks/config/watch.js'
    ]);
  });
});
