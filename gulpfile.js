const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function firstTask(cb) {
  return src('server/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('out/'));
}

exports.default = firstTask;