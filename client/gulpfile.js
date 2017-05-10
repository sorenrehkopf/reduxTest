const gulp = require('gulp'),
	  connect = require('gulp-connect'),
	  sass = require('gulp-sass'),
	  babel = require('gulp-babel'),
	  webpack = require('gulp-webpack');

const paths = {
	scripts:['src/scripts/*.jsx','src/scripts/**/*.jsx'],
	styles:['src/styles/main.scss','src/styles/**/*.scss'],
	html:['src/index.html']
}

gulp.task('start',['build','watch','serve']);
gulp.task('build',['build:scripts','build:styles','copy:html']);
gulp.task('watch',['watch:scripts','watch:styles']);

gulp.task('serve',function(){
	connect.server({
		root:'dist',
		port:'3000',
		livereload:true,
		fallback:'dist/index.html'
	});
});

gulp.task('build:scripts',function(){
	var task = gulp.src(paths.scripts)
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(gulp.dest('dist/scripts'))
	.pipe(connect.reload());
	return task;
});

gulp.task('build:styles',function(){
	return gulp.src(paths.styles[0])
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('dist/styles'))
		.pipe(connect.reload());
});

gulp.task('copy:html',function(){
	return gulp.src(paths.html)
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
});

gulp.task('watch:scripts',function(){
	gulp.watch(paths.scripts,['build:scripts']);
});

gulp.task('watch:styles',function(){
	gulp.watch(paths.styles,['build:styles']);
});