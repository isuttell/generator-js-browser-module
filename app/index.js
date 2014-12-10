'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.pkg = require('../package.json');
  },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('JS Browser Module') + ' generator!'
    ));

    this.prompt([{
      type: 'input',
      name: 'name',
      message: 'What\'s the name of your project?',
      required: true,
      default: this.appname // Default to current folder name
    }, {
      type: 'input',
      name: 'username',
      message: 'What\'s is your Github username?',
      required: true,
      store: true
    }, {
      type: 'input',
      name: 'email',
      message: 'What\'s is your email?',
      required: true,
      store: true
    }], function(answers) {
      this.projectName = answers.name;
      this.username = answers.username;
      this.email = answers.email;
      done();
    }.bind(this));
  },

  writing: {
    app: function() {
      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');
    },

    grunt: function() {
      this.fs.copy(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
      this.directory('tasks', 'tasks');
    },

    projectfiles: function() {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('flowconfig'),
        this.destinationPath('.flowconfig')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('travis.yml'),
        this.destinationPath('.travis.yml')
      );
      this.template('jshintrc', '.jshintrc');
      this.template('jscsrc', '.jscsrc');

      this.template('src/module.js', 'src/' + this.appname.replace(' ', '-').toLowerCase() + '.js');
    },

    testing: function() {
      this.directory('tests', 'tests');
    }
  },

  install: function() {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
