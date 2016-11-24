import gulp from 'gulp';
import babel from 'gulp-babel';
import shell from 'gulp-shell';
import jsonEditor from 'gulp-json-editor';
import path from 'path';
import _ from 'lodash'

gulp.task("babel", () => {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"))
})

gulp.task('html', () => {
  return gulp.src("src/**/*.html")
    .pipe(gulp.dest("dist"))
})

gulp.task('dependency', () => {
  let electronRebuild = path.join('.', 'node_modules', '.bin', 'electron-rebuild')
  return gulp.src('package.json')
    .pipe(jsonEditor(json => {
      return _.pick(json, [
        'name',
        'version',
        'main',
        'author',
        'dependencies'
      ])
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(shell([
      'npm install --production',
      'npm install electron-rebuild',
      `${electronRebuild} -v 1.4.8`,
      'npm prune --production'
    ], {
        cwd: './dist'
      }))
})

gulp.task("default", ["babel", "html"])
