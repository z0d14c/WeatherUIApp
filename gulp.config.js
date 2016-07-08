'use strict';
module.exports = function config() {
    var client = './app/';
    var bower = {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var config = {
        bower: bower,
        client: client,
        css: ['./app/**/*.css'],
        index: './app/index.html',
        js: [
            client + '**/*.module.js',
            client + '**/*.js',
            '!' + client + '**/*.spec.js'
        ],
        jsOrder: [
            '**/app.module.js',
            '**/*.module.js',
            '**/*.js'
        ]
    };
    /**
     * wiredep and bower settings
     */
    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };
    return config;
};