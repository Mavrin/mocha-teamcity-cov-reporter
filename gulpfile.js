const gulp = require('gulp');
const eslint = require('gulp-eslint');

const LINT_PATH = [
  '**/*.js',
  '!node_modules/**'
];

gulp.task('lint', () => {
  return gulp
    .src(LINT_PATH)
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
