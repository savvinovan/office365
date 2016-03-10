var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/scss/*.scss", ['sass']);
})

gulp.task('default', ['sass','browser-sync'])

gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream);
});
