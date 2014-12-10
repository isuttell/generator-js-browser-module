/**
 * Karma Options
 *
 * ---------------------------------------------------------------
 *
 * Setups up Karma to run unit tests with code coverage in PhantomJS
 *
 * For usage docs see:
 *      http://karma-runner.github.io/0.12/index.html
 */
module.exports = function(config) {
  config.set({

    basePath: '../',

    files: [
      'tests/vendor/**/*.js',
      'src/**/*.js',
      'tests/specs/**/*.js',
    ],

    preprocessors: {
      'src/**/*.js': ['coverage'],
    },

    autoWatch: false,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-story-reporter',
      'karma-html-reporter'
    ],

    coverageReporter: {
      dir: 'tests/coverage/',
      reporters: [{
        type: 'html',
        subdir: 'html'
      }, {
        type: 'lcovonly',
        subdir: 'lcov'
      }, {
        type: 'text-summary'
      }]
    },

    htmlReporter: {
      outputDir: 'tests/results/',
      templatePath: __dirname + '/reportTemplate.html'
    },

    reporters: ['story', 'html', 'coverage']

  });
};
