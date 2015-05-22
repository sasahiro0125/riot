// モジュール読込
var gulp = require('gulp');
var browser = require('browser-sync');
var plumber = require('gulp-plumber');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var rimraf = require('rimraf');

// build内のファイルを削除
gulp.task('cleanBuild', function (cb) {
  rimraf('./build/', cb);
});

// src内のhtmlをbuildにコピー
gulp.task('copyIndex', ['cleanBuild'], function () {
  return gulp.src('./src/**/*.html')
  .pipe(plumber())
  .pipe(gulp.dest('./build/'));
});

// src内のjsxをコンパイルしてbuildに出力
gulp.task('build', ['copyIndex'], function (cb) {
  return gulp.src('')
  .pipe(plumber())
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(''))
  .pipe(browser.reload({stream:true}));
});

// browserSync用サーバ立ち上げ
gulp.task('server', function() {
  browser({
    server: {
      baseDir: './build/'
    }
  });
});

// browserSyncで立ち上げたページをリロード
gulp.task('reload', function() {
  browser.reload();
});

// file監視
gulp.task('watch', ['server'], function() {
  gulp.watch('./src/*', ['build']);
});

