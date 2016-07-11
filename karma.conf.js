var wiredep = require('wiredep');
var config = require('./gulp.config')();
var wiredepOptions = config.getWiredepDefaultOptions();
wiredepOptions.devDependencies = true;
var bowerFiles = wiredep(wiredepOptions)['js'];
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [].concat(
        bowerFiles,
        'app/lib/*.js',
        'app/**/*.module.js',
      'app/**/*.js'
    ),

    autoWatch: true,

    frameworks: ['jasmine-jquery', 'jasmine', 'sinon'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
        'karma-sinon',
        'karma-jasmine-jquery',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
