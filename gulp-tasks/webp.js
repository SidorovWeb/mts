'use strict'

import { paths } from '../gulpfile.babel'
import gulp from 'gulp'

import webp from 'gulp-webp'
import debug from 'gulp-debug'
import browsersync from 'browser-sync'
import imageminWebp from 'imagemin-webp'

gulp.task('webp', () => {
  return gulp
    .src(paths.webp.src)
    .pipe(
      webp(
        imageminWebp({
          lossless: true,
          quality: 100,
          alphaQuality: 100
        })
      )
    )
    .pipe(gulp.dest(paths.webp.dist))
    .pipe(
      debug({
        title: 'webp'
      })
    )
    .on('end', browsersync.reload)
})
