import Swiper from 'swiper'

const sliderPartners = new Swiper('.slider-partners', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination__custom-partners',
    clickable: true
  },
  navigation: {
    nextEl: '.slider-partners__next',
    prevEl: '.slider-partners__prev',
    clickable: true
  },
  breakpoints: {
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1170: {
      slidesPerView: 4
    }
  }
})
