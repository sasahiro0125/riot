'use strict';

// モジュール読込
var gulp = require('gulp');
var webpack = require('webpack-stream');

// file監視
gulp.task('default', function() {
  return gulp.src('')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});
