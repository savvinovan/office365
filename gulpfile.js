var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var stylus        = require('gulp-stylus');
var gulpJade    = require('gulp-jade');
gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    gulp.watch("./app/stylus/*.styl", ['stylus']);
    gulp.watch("./app/jade/*.jade", ['jade']);
})

gulp.task('default', ['stylus','jade','browser-sync'])

gulp.task('stylus', function () {
  return gulp.src('./app/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});

gulp.task('jade', function(){
    return gulp.src('./app/jade/*.jade')
        .pipe(gulpJade({
            pretty: true
        }))
        .pipe(gulp.dest('./app'))
        .pipe(browserSync.stream());
});
