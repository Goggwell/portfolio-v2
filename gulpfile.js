const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
    // 1. where is my scss file
    return gulp.src('./public/sass/**/*.scss')
    // 2. pass that file through sass compiler
    .pipe(sass().on('error', sass.logError))
    // 3. where do i save the compiled css
    .pipe(gulp.dest('./public/css'))
    // 4. stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
    gulp.watch('./public/sass/**/*.scss', style);
    gulp.watch('./public/*.html').on('change', browserSync.reload);
    gulp.watch('./public/scripts/*.js').on('change', browserSync.reload);
    gulp.watch('./*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;