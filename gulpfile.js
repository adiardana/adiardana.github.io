var gulp = require('gulp');

var sass = require('gulp-sass')
var minify = require('gulp-clean-css');

var paths = {
	sass: ['sass/*.scss','sass/component/*.scss','sass/bootstrap/*.scss','sass/responsive/*.scss'],
	css: 'css/*.css',
};

//sass
gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

//minify css
gulp.task('compress', function() {
  return gulp.src(paths.css)
    .pipe(minify())
    .pipe(gulp.dest('css/dist'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.css, ['compress']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass','compress','watch']);