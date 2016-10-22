//Packages
// ======================================================
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    sass = require('gulp-sass');


//Globs
// ======================================================

    var rawPaths = {
      jade: './raw/views/index.jade',
      jadeLoaders: './raw/views/loaders/**.jade',
      index: './public/index.html',
      scss: './raw/scss/**/*.scss*',
      img: './raw/img/*',
      loaders: './raw/views/loaders/*.jade',
      js: './raw/js/*.js*'
    };

    // For Public
    var output = {
      jadeOut: './public/',
      jadeLoadersOut: 'public/loaders/',
      scssOut: './public/css',
      public: './public/',
      img : './public/img-min/',
      loadersOut: './public/loaders',
      jsOut: './public/js/'
    };

// ======================================================

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};
//gulp-sass
// ======================================================

  gulp.task('jade', function(){
    return gulp.src(rawPaths.jade)
           .pipe(jade({
             pretty: true
           }))
           .pipe(gulp.dest(output.jadeOut));
  });

  gulp.task('loaders', function(){
    return gulp.src(rawPaths.jadeLoaders)
          .pipe(jade({
            pretty: true
          }))
          .pipe(gulp.dest(output.jadeLoadersOut));
    return gulp.src(rawPaths.loaders)
           .pipe(jade({
             pretty: true
           }))
           .pipe(gulp.dest(output.loadersOut));
  });
  gulp.task('sass',function(){
    return gulp.src(rawPaths.scss)
           .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
           .pipe(rename('main.min.css'))
           .pipe(autoprefixer(autoprefixerOptions))
           .pipe(gulp.dest(output.scssOut));
  });

  gulp.task('uglify', function() {
    return gulp.src(rawPaths.js)
          .pipe(uglify())
          .pipe(gulp.dest(output.jsOut));
  });

  gulp.task('image-min',function(){
    return gulp.src(rawPaths.img)
          .pipe(imagemin())
          .pipe(gulp.dest(output.img));
  });

  // browser-sync reload
  gulp.task('browser-sync', function() {
      browserSync.init({
          server: {
              baseDir: "./public"
          }
      });

      //Watch files on reload
      // gulp.watch(rawPaths.index).on('change', browserSync.reload);
      // gulp.watch(rawPaths.scss,['sass']).on('change', browserSync.reload);
      // gulp.watch(rawPaths.partials);
      // gulp.watch(rawPaths.js,['uglify']).on('change', browserSync.reload);

  });

gulp.task('watch', function(){
  gulp.watch(rawPaths.index).on('change', browserSync.reload);
  gulp.watch(rawPaths.scss,['sass']).on('change', browserSync.reload);
  gulp.watch(rawPaths.js,['uglify']).on('change', browserSync.reload);
  gulp.watch(rawPaths.jade, ['jade']);
  gulp.watch(rawPaths.jadeLoaders,['loaders']);
  gulp.watch(rawPaths.loaders, ['loaders']);
});

// gulp.task('default',['sass','watch']);
// ======================================================


// Defaults
gulp.task('default', ['browser-sync', 'loaders' ,'uglify','jade','sass', 'watch']);
gulp.task('default', ['browser-sync','loaders','uglify','jade','sass', 'watch']);
gulp.task('compile', ['sass', 'loaders' ,'uglify','watch']);
