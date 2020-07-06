// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'
import swiperOption from './utility/const'

import '@scss/index'
import Hamburger from './modules/hamburger'

window.addEventListener('DOMContentLoaded', () => {
  new Hamburger()
  new Swiper('.swiper-container', swiperOption)
})
