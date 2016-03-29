var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var stylus        = require('gulp-stylus');

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    gulp.watch("./app/stylus/*.styl", ['stylus']);
    gulp.watch("./app/*.html", browserSync.reload)
})

gulp.task('default', ['stylus','browser-sync'])

gulp.task('stylus', function () {
  return gulp.src('./app/stylus/*.styl')
    .pipe(stylus({
        compress: true
    }))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});
