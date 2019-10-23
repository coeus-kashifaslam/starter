/************************************/
/* 			  Variables				*/
/************************************/

/************************************/


/* 				Tasks				*/
/************************************/
/*
 * Gulp Libraries
 * ...
 */
var gulp = require('gulp'),
    del = require('del'),
    browsersync = require('browser-sync'),
    newer = require('gulp-newer'),

    njk = require('gulp-nunjucks'),
    htmlmin = require('gulp-htmlmin'),

    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    csso = require('gulp-csso'),


    babel = require('gulp-babel'),
    webpackConfig = require('./webpack.config.js'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    plumber = require('gulp-plumber'),


    /*
     * Soruce and Destination Folders
     * ...
     */
    source = 'src/',
    destination = 'dist/',


    /*
     * Options List
     * ...
     */

    sassOptions = {
        errToLogConsole: true,
        precision: 4,
        outputStyle: 'expanded',
        sourceComments: false,
        indentWidth: 4
    },

    autoprefixerOptions = {
        autoprefixer: {
            browsers: ['> 2%','last 3 versions'],
            cascade: false
        }
    },

    browsersyncOptions = {
        server: {
            baseDir: destination,
            index: 'index.html'
        },
        open: true,
        notify: true
    },

    /*
     * Source and Destination Assets
     * ...
     */
    html = {
        in: source + 'html/*.html',
        out: destination
    },

    css = {
        in: source + 'sass/*.scss',
        out: destination + 'css/'
    },

    cssSource = {
        in: source + 'sass/**/*',
        out: destination + 'sass/'
    },

    scripts = {
        in: [
            // Add All vendor paths here
            source + 'js/*.js',
            source + 'js/**/*.js'
        ],
        out: destination + 'js/'
    },

    images = {
        in: [source + 'images/*.*', source + 'images/**/*.*'],
        out: destination + 'images/'
    },

    fonts = {
        in: source + 'fonts/**/*',
        out: destination + 'fonts/'
    },

    watch = {
        html: [source + '*.html', source + 'html/*.html', source + 'html/**/*.html'],
        sass: [source + 'sass/**/*.scss'],
        fonts: [source + 'fonts/*'],
        images: [source + 'images/*.*', source + 'images/**/*.*'],
        scripts: [source + 'js/*.js', source + 'js/**/*.js']
    };


/*
 * Task to clean the build folder
 * ...
 */
gulp.task('cleanBuild', function(){
	del([
		destination + '*'
	]);
});


/*
 * Task for Browser Sync
 * ...
 */
gulp.task('browsersync', function(){
	browsersync(browsersyncOptions);
});

/*
 * Task to Build HTML from templates
 * ...
 */
gulp.task('html', function(){
	return gulp
	.src(html.in)
	.pipe(njk.compile())
    // .pipe(htmlmin({collapseWhitespace: true, removeComments: true }))
	.pipe(gulp.dest(html.out));
});


/*
 * Task to Merge and Compile Sass files
 * ...
 */
gulp.task('sass', function(){
	return gulp.src(css.in)
	.pipe(sourcemaps.init())
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(autoprefixer(autoprefixerOptions))
	// .pipe(csso())
	.pipe(gulp.dest(css.out))
	.pipe(browsersync.reload({stream: true}));
});


/*
 * Task to copy images into build folder
 * ...
 */
gulp.task('images', function(){
	return gulp
	.src(images.in)
	.pipe(newer(images.out))
	.pipe(gulp.dest(images.out));
});


/*
 * Task to copy Fonts in build folders
 * ...
 */
gulp.task('fonts', function(){
	return gulp
	.src(fonts.in)
	.pipe(newer(fonts.out))
	.pipe(gulp.dest(fonts.out));
});

/*
 * Task to copy Sass in build folders
 * ...
 */
gulp.task('sassCopy', function(){
	return gulp
	.src(cssSource.in)
	.pipe(gulp.dest(cssSource.out));
});


/*
 * Task to Compile scripts with webpack and babel and copy build folder
 * ...
 */
gulp.task('scripts', function(){
	return gulp
	.src(scripts.in)
    .pipe(plumber())

    // Es6 to Es5 PS: Imports and exports will not work.
    .pipe(babel({
       presets: ['@babel/env']
    }))

    // Es6 to Es6 and bundling
    // .pipe(webpackStream(webpackConfig), webpack)

    .pipe(gulp.dest(scripts.out));
});


/*
 * Default Task
 * Watching All of the written tasks
 * ...
 */
gulp.task('default', ['html', 'browsersync', 'sass', 'fonts', 'images', 'scripts', 'sassCopy'] , function() {
	gulp.watch(watch.html, ['html', browsersync.reload]);
	gulp.watch(watch.sass,['sass', 'sassCopy']);
	gulp.watch(watch.fonts, ['fonts']);
	gulp.watch(watch.images, ['images']);
	gulp.watch(watch.scripts, ['scripts', browsersync.reload]);
});