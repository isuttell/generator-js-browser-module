# generator-js-browser-module [![Build Status](https://secure.travis-ci.org/isuttell/generator-js-browser-module.png?branch=master)](https://travis-ci.org/isuttell/generator-js-browser-module)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-js-browser-module from npm, run:

```bash
npm install -g generator-js-browser-module
```

Finally, initiate the generator:

```bash
yo js-browser-module
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


### Grunt

generator-js-browser-module splits each Grunt plugin into it's own folder located in the `tasks` folder and each additional registered task in the `register` folder. Adding a new Grunt tasks is as simple as copying an existing config file, updating it, and saving in the save folder. Grunt will automatically read and process everything in the config folder. In addition to that, you do not need to manually load any tasks. [jit-grunt](https://www.npmjs.com/package/jit-grunt) lazy loads modules as needed.

#### Default Task

The default `grunt` command watches the project and then concats any files in the `src/` directory, runs any unit tests, [jshint](https://github.com/gruntjs/grunt-contrib-jshint), [jscs](https://github.com/jscs-dev/grunt-jscs), and finally [Flow](https://github.com/isuttell/grunt-flow-type-check).

#### `test` Task

The `grunt test` command runs any unit tests then, jshint, jscs, and flow.

#### `build` Task

The `grunt build` command runs the `test` command then concats everything in the `src/` folder and minifies it.


### Testing

generator-js-browser-module uses [Jasmine](http://jasmine.github.io/) and [Karma](http://karma-runner.github.io/0.12/index.html) for unit testing. Tests are kept in the `tests/specs` folder and are run with the `npm test` command.

## License

MIT

## Release History
* v0.1.0 - Initial Relase
