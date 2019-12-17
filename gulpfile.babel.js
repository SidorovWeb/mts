'use strict'

import gulp from 'gulp'

const requireDir = require('require-dir'),
  paths = {
    views: {
      src: ['./src/views/index.pug', './src/views/pages/*.pug'],
      dist: './dist/',
      watch: ['./src/blocks/**/*.pug', './src/views/**/*.pug']
    },
    styles: {
      src: './src/styles/main.{scss,sass}',
      dist: './dist/styles/',
      watch: ['./src/blocks/**/*.{scss,sass}', './src/styles/**/*.{scss,sass}']
    },
    scripts: {
      src: './src/js/index.js',
      dist: './dist/js/',
      watch: ['./src/blocks/**/*.js', './src/js/**/*.js']
    },
    images: {
      src: [
        './src/img/_src/**/*.{jpg,jpeg,webp,png,gif,tiff,svg}',
        '!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}'
      ],
      dist1: './dist/img/@1x',
      dist2: './dist/img/@2x',
      watch: './src/img/_src/**/*.{jpg,jpeg,webp,png,gif,svg}'
    },
    webp: {
      src: [
        './src/img/_src/**/*.{jpg,jpeg,png,tiff}',
        '!./src/img/favicon/*.{jpg,jpeg,png,gif}'
      ],
      dist: './src/img/_src/',
      watch: [
        './src/img/_src/**/*.{jpg,jpeg,png,tiff}',
        '!./src/img/favicon.{jpg,jpeg,png,gif}'
      ]
    },
    sprites: {
      src: './src/img/svg/*.svg',
      dist: './dist/img/sprites/',
      watch: './src/img/svg/*.svg'
    },
    fonts: {
      src: './src/fonts/**/*.{woff,woff2}',
      dist: './dist/fonts/',
      watch: './src/fonts/**/*.{woff,woff2}'
    },
    favicons: {
      src: './src/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
      dist: './dist/img/favicons/'
    },
    other: {
      src: './src/img/other/**/*.{jpg,jpeg,png,gif,tiff,svg}',
      dist: './dist/img/other/',
      watch: ['./src/img/other/**/*.{jpg,jpeg,png,tiff,svg}']
    },
    gzip: {
      src: './src/.htaccess',
      dist: './dist/'
    }
  }

requireDir('./gulp-tasks/')

export { paths }

export const development = gulp.series(
  'clean',
  'smart-grid',
  gulp.parallel([
    'views',
    'styles',
    'scripts',
    'img-responsive-1x',
    'img-responsive-2x',
    'webp',
    'sprites',
    'fonts',
    'favicons',
    'other'
  ]),
  gulp.parallel('serve')
)

export const prod = gulp.series(
  'clean',
  gulp.series([
    'views',
    'styles',
    'scripts',
    'img-responsive-1x',
    'img-responsive-2x',
    'webp',
    'sprites',
    'fonts',
    'favicons',
    'other',
    'gzip'
  ])
)

export default development
