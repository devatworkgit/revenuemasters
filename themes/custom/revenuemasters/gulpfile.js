var gulp       = require('gulp');
var less       = require('gulp-less');
var watch      = require('gulp-watch');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var stylish = require('jshint-stylish');
var jshint = require('gulp-jshint');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');


// Lint task
gulp.task('lint', function() {
    return gulp.src('js/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('less', function () {
  gulp.src('less/style.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'IE 9']
    }))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('js/main.js', ['lint']);
  gulp.watch('less/*.less', ['less']);
});

gulp.task('default', ['lint', 'less', 'watch']);
