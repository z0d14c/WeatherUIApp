var config = require('./gulp.config')();
var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('build', function() {
    var wiredep = require('wiredep').stream;
    var wiredepOptions = config.getWiredepDefaultOptions();
    var js = config.js;
    var css = config.css;
    return gulp
        .src(config.index)
        .pipe(wiredep(wiredepOptions))
        .pipe(inject(gulp.src(js.concat(css), {'read': false}), {relative: true}, config.jsOrder))
        .pipe(gulp.dest(config.client));
});
