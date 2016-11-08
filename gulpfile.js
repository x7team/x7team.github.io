var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
    gulp.src('css/style.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist'))
);

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'x7team.github.io'
        }
    });
});



gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('style.sass', ['sass']);
    gulp.watch('index.html', browserSync.reload);
    // gulp.watch('Starter kit/style.css', browserSync.reload);

    gulp.watch('js/*.js', browserSync.reload);

});


gulp.task('sass', function() {
    return gulp.src('style.sass')
        .pipe(sass({ indentedSyntax: true }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({ stream: true }));
})