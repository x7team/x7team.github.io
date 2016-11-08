var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
    gulp.src('Starter kit/css/style.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist'))
);

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'STARTER KIT'
        }
    });
});



gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('Starter kit/style.sass', ['sass']);
    gulp.watch('Starter kit/index.html', browserSync.reload);
    // gulp.watch('Starter kit/style.css', browserSync.reload);

    gulp.watch('Starter kit/js/*.js', browserSync.reload);

});


gulp.task('sass', function() {
    return gulp.src('Starter kit/style.sass')
        .pipe(sass({ indentedSyntax: true }))
        .pipe(gulp.dest('Starter kit/css'))
        .pipe(browserSync.reload({ stream: true }));
})