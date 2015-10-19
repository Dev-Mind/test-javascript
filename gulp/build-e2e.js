//Concats files
var concat = require('gulp-concat');
//Replaces files import in HTML
var htmlreplace = require('gulp-html-replace');
//error flow
var plumber = require('gulp-plumber');
//Rename a file
var rename = require('gulp-rename');
//Replaces element in file
var replace = require('gulp-replace');


module.exports = function(gulp, config) {
  var paths = config.paths;
  var timestamp = config.timestamp;

  require('./build-dev.js')(gulp, config);

  gulp.task('build:e2e', ['build:dev', 'build:e2e:init', 'build:e2e:js', 'build:index:e2e']);


  gulp.task('build:e2e:init', ['build:dev'], function () {

    return gulp.src(paths.build.dev + '/**/*').pipe(gulp.dest(paths.build.e2e + '/.'));
  });

  gulp.task('build:e2e:js', function () {
    return gulp.src(paths.js.test)
      .pipe(concat('e2e.js'))
      .pipe(gulp.dest(paths.build.e2e + '/js'));
  });

  gulp.task('build:index:e2e', ['build:e2e:init'], function () {
    return gulp.src(paths.index)
      .pipe(plumber())
      .pipe(htmlreplace({
        'e2e': 'js/e2e.js'
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest(paths.build.e2e));
  });

};
