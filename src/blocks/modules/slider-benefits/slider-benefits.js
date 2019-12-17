import Swiper from 'swiper'
// import $ from 'jquery'

function slider() {
  'use strict'
  const breakpoint = window.matchMedia('(min-width:576px)')
  let mySwiper
  const breakpointChecker = function() {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true)
      return
    } else if (breakpoint.matches === false) {
      return enableSwiper()
    }
  }

  const enableSwiper = function() {
    mySwiper = new Swiper('.benefits-swiper', {
      loop: false,
      slidesPerView: 'auto',
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-benefits__next',
        prevEl: '.swiper-benefits__prev',
        clickable: true
      },
      pagination: {
        el: '.swiper-pagination__custom-benefits',
        clickable: true
      },
      paginationClickable: true,
      breakpoints: {
        480: {
          centeredSlides: false
        }
      }
    })
  }

  breakpoint.addListener(breakpointChecker)
  breakpointChecker()
}

slider()
window.addEventListener('resize', function() {
  slider()
})
