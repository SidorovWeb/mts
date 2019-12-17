'use strict'

import { paths } from '../gulpfile.babel'
import gulp from 'gulp'
import debug from 'gulp-debug'

gulp.task('other', () => {
  return gulp
    .src(paths.other.src)
    .pipe(gulp.dest(paths.other.dist))
    .pipe(
      debug({
        title: 'other'
      })
    )
})
