'use strict'

import { paths } from '../gulpfile.babel'
import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import imageminPngquant from 'imagemin-pngquant'
// import imageminZopfli from 'imagemin-zopfli'
import imageminMozjpeg from 'imagemin-mozjpeg'
// import imageminGiflossy from 'imagemin-giflossy'
import rename from 'gulp-rename'
import newer from 'gulp-newer'
import responsive from 'gulp-responsive'
import debug from 'gulp-debug'
import browsersync from 'browser-sync'

var quality = 90

gulp.task('img-responsive-1x', async function() {
  return gulp
    .src(paths.images.src)
    .pipe(newer('dist/img/@1x'))
    .pipe(
      imagemin([
        imageminMozjpeg({
          progressive: true,
          quality: 75
        }),
        // imageminGiflossy({
        //   optimizationLevel: 3,
        //   optimize: 3,
        //   lossy: 2
        // }),
        imageminPngquant({ speed: 5, quality: [0.6, 0.8] })
        // imageminZopfli({
        //   more: true
        // }),
        // imagemin.svgo({
        //   plugins: [
        //     { removeViewBox: false },
        //     { removeUnusedNS: false },
        //     { removeUselessStrokeAndFill: false },
        //     { cleanupIDs: false },
        //     { removeComments: true },
        //     { removeEmptyAttrs: true },
        //     { removeEmptyText: true },
        //     { collapseGroups: true }
        //   ]
        // })
      ])
    )
    .pipe(
      responsive({
        '**/*': { width: '50%', quality: quality }
      })
    )
    .on('error', function(e) {
      console.log(e)
    })
    .pipe(
      rename(function(path) {
        path.extname = path.extname.replace('jpeg', 'jpg')
      })
    )
    .pipe(gulp.dest(paths.images.dist1))
    .pipe(
      debug({
        title: 'Images X1'
      })
    )
    .on('end', browsersync.reload)
})

gulp.task('img-responsive-2x', async function() {
  return gulp
    .src(paths.images.src)
    .pipe(newer('dist/img/@2x'))
    .pipe(
      imagemin([
        imageminMozjpeg({
          progressive: true,
          quality: 75
        }),
        // imageminGiflossy({
        //   optimizationLevel: 3,
        //   optimize: 3,
        //   lossy: 2
        // }),
        imageminPngquant({ speed: 5, quality: [0.6, 0.8] })
        // imageminZopfli({
        //   more: true
        // }),
        // imagemin.svgo({
        //   plugins: [
        //     { removeViewBox: false },
        //     { removeUnusedNS: false },
        //     { removeUselessStrokeAndFill: false },
        //     { cleanupIDs: false },
        //     { removeComments: true },
        //     { removeEmptyAttrs: true },
        //     { removeEmptyText: true },
        //     { collapseGroups: true }
        //   ]
        // })
      ])
    )
    .pipe(
      responsive({
        '**/*': { width: '100%', quality: quality }
      })
    )
    .on('error', function(e) {
      console.log(e)
    })
    .pipe(
      rename(function(path) {
        path.extname = path.extname.replace('jpeg', 'jpg')
      })
    )
    .pipe(gulp.dest(paths.images.dist2))
    .pipe(
      debug({
        title: 'Images X2'
      })
    )
    .on('end', browsersync.reload)
})
