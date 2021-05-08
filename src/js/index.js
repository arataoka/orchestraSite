// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'
import swiperOption from './utility/const'
import '@scss/index'
import Hamburger from './modules/hamburger'
import TextAnimation from './modules/textAnimation'
import ScrollObserver from './modules/scrollObserver'

window.addEventListener('DOMContentLoaded', () => {
  const cbText = function (el, isIntersecting) {
    const ta = new TextAnimation(el)
    if (isIntersecting) {
      ta.animate()
    }
  }
  const cbSlide = function (el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview')
    } else {
      el.classList.remove('inview')
    }
  }
  const cbAppear = function (el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('appear')
    } else {
      el.classList.remove('appear')
    }
  }
  new ScrollObserver('.js-text-animation', cbText)
  new ScrollObserver('.js-slide-image', cbSlide)
  new ScrollObserver('.js-appear', cbAppear, {
    rootMargin: '-100px 0px',
    once: true,
  })
  new Hamburger()
  new Swiper('.swiper-container', swiperOption)
})
