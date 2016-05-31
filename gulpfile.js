var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');

const chmod = require('gulp-chmod');

gulp.task('default', function() {
  console.log("Gulp lol look at me being rad.");
});


var path = {
	dist: 'build/'
}

var config = {
	html: [
		'WebContent/*.html'
	],
	css:[
		'WebContent/css/*.css'
	],
	js:[
		'WebContent/js/*.js'
	]
 };

// Minifies and renames own css files
gulp.task('styles', function() {
	return gulp.src(config.css)
	.pipe(cleanCSS())
	.pipe(rename({ suffix: '.min' }))
	.pipe(chmod(644))
	.pipe(gulp.dest(path.dist + 'css/'))
	;
});

// Minify and rename own JS files
gulp.task('scripts', function() {
	return gulp.src(config.js)
	.pipe(gulpIf('js/*.js', uglify()))
	.pipe(rename({ suffix: '.min' }))
	.pipe(chmod(644))
	.pipe(gulp.dest(path.dist + '/js'))
	;
});

gulp.task('useref', function(){
  return gulp.src(config.html)
	.pipe(useref())
	.pipe(chmod(644))
	.pipe(gulp.dest(path.dist))
});

gulp.task('images', function(){
	return gulp.src('img/**/*.+(png|jpg|gif|svg)')
	.pipe(imagemin({
      progressive: true
    }))
	.pipe(chmod(644))
	.pipe(gulp.dest(path.dist + 'img/'))
});

gulp.task('build', ['useref', 'images', 'scripts', 'styles' ], function (){
  console.log('Building files');
});

