import './import/pol'
import './import/modules'
import './import/components'
import $ from 'jquery'
import LazyLoad from 'vanilla-lazyload'
import svg4everybody from 'svg4everybody'

svg4everybody()
// LazyLoad
$(document).ready(function() {
  const myLazyLoad = new LazyLoad({
    elements_selector: '.lazy'
  })

  //  SCROLL TO ITEM

  $('.slowly').on('click', function(event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 600)
  })

  // FOCUS TO INPUT END TEXTAREA

  $('.form__input, .form__textarea')
    .focus(function() {
      $(this)
        .parent()
        .addClass('focus')
    })
    .blur(function() {
      if ($(this).val() === '') {
        $(this)
          .parent()
          .removeClass('focus')
      }
      if ($(this).val() === '+7 (   )    -  -  ') {
        $(this)
          .parent()
          .removeClass('focus')
      }
    })

  // Prohibit moving pictures

  $('img, a').on('dragstart', function(event) {
    event.preventDefault()
  })
})
