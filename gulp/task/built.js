var gulp = require('gulp');
var imagemin = require ('gulp-imagemin');
var del = require ('del');
var usemin = require('gulp-usemin');
var rev = require ('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browserSync = require ('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init ({
		server :{
			baseDir : "dist"
		}
	});

})

gulp.task('deleteDist', function() {
  return del("./dist")
});


gulp.task('copyGenFiles',['deleteDist'], function() {
  var pathToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!/app/assets/styles/**',
    '!/app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]
  return gulp.src(pathToCopy)
    .pipe(gulp.dest("./dist"))
});


gulp.task('optimizeImages',['deleteDist' , 'icons'],  function(){
  return gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons', '!./app/assets/images/icons/**/*' ])
    .pipe(imagemin({
      progressive : true,
      interlaced : true,
      multipass : true
    }))
    .pipe(gulp.dest("./dist/assets/images"))
});

gulp.task('usemin', ['deleteDist','styles' , 'scripts'] ,function(){
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css :[function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]

    }))
    .pipe(gulp.dest("./dist"));
  });

gulp.task('built',['deleteDist','copyGenFiles','optimizeImages', 'usemin']);
