// humburger / mobile menu
import $ from 'jquery'

$('.hamburger').click(function() {
  $(this).toggleClass('hamburger--open')
  $('.main-nav__list').toggleClass('open')
})

$('.main-nav__link').click(function() {
  $('.hamburger').toggleClass('hamburger--open')
  $('.main-nav__list').toggleClass('open')
})
