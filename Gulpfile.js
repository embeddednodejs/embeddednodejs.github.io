var gulp = require('gulp');
var sass = require('gulp-sass');
var hyperstream = require('hyperstream');
var fs = require('fs');

var markdown = require('gulp-markdown');


gulp.task('styles', function() {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/css/'));
});

/*
gulp.task('content', function() {
   var hs = hyperstream({
         '#a': fs.createReadStream(__dirname + '/a.html'),
         '#b': fs.createReadStream(__dirname + '/b.html')
   });

   gulp.src('content/ch_8_nodejs_libraries_for_hardware.md')
        .pipe(markdown())
        .pipe(hs)
        .pipe(gulp.dest('./libs/'));
});
*/


//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});
