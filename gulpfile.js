"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // run a local dev server
var open = require('gulp-open'); // open a url in a browser
var browserify = require('browserify'); // use node packages in the browser
var reactify = require('reactify'); // compile JSX
var source = require('vinyl-source-stream'); // use conventional text streams with Gulp
var concat = require('gulp-concat'); // concatenate files
var lint = require('gulp-eslint'); // lint js code, including JSX


var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		images: './src/images/*',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'node_modules/toastr/toastr.css'
		],
		dist: './dist',
		mainJs: './src/main.js'
	}
};

// start the local server
gulp.task('connect', function(){
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

// open the index.html file in the browser
// the connect task is a dependency for this task so run it first
gulp.task('open', ['connect'], function(){
	gulp.src('dist/index.html')
		.pipe(open({
			uri: config.devBaseUrl + ':' + config.port + '/'
		}));
});

// move files into the 'dist' folder and restart the local dev server
gulp.task('html', function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

// use browserify to transform your js code using reactify (JSX compiler)
// bundle it up and copy it to the dist folder and reload everything
gulp.task('js', function(){
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

// use gulp-concat to package all our css into a single file and 
gulp.task('css', function(){
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
		.pipe(connect.reload());
});

// copy images to the dist folder
gulp.task('images', function(){
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'))
		.pipe(connect.reload());
	
	// publish favicon
	gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.paths.dist));

});

// use gulp-eslint to warn about javascript boo-boos
// specify the rules that you want the linter to follow
// in a json file
gulp.task('lint', function(){
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});

// watch the files defined by the various configured paths 
// and run the corresponding tasks whenever they change
gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
});

// default task to encapsulate everything
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);
