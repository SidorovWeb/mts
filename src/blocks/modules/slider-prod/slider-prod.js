import Swiper from 'swiper'

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
    mySwiper = new Swiper('.swiper-destr', {
      loop: false,
      slidesPerView: 'auto',
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-prod__next',
        prevEl: '.swiper-prod__prev',
        clickable: true
      },
      pagination: {
        el: '.swiper-pagination__custom-prod',
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
