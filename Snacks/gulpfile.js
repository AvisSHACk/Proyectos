// Importar los módulos y plugins que se usarán. Cada uno se impotar con require('modulo')
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Crear tarea

gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});


gulp.task('default', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('./scss/**/*.scss', gulp.series('scss'));
    gulp.watch("./*.html").on('change', browserSync.reload);
});