const gulp = require("gulp");
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

const pathToScssFolder = 'src/scss';
const pathToCssFolder = 'src/css';

gulp.task('default', ['serve']);

gulp.task('sass-compile', function() {
	return gulp.src([pathToScssFolder + '/*.scss'])
		   .pipe(sass())
		   .pipe(gulp.dest(pathToCssFolder))
		   .pipe(browserSync.stream());
});

gulp.task('serve', ['sass-compile'], function() {
	browserSync.init({
		server: './src'
	});

	gulp.watch([pathToScssFolder + '/*.scss'], ['sass-compile']);
	gulp.watch(['src/*.html']).on('change', browserSync.reload); 
});
