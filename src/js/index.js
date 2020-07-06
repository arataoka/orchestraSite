const withCss = require('@zeit/next-css')
module.exports = withCss()
import Swiper from 'swiper'
// import Swiper styles

import '@scss/index'
import 'swiper/swiper-bundle.css'
import Hamburger from './modules/hamburger'

window.addEventListener('DOMContentLoaded', () => {
  console.log('aaa')
  new Hamburger()
  new Swiper('.swiper-container')
  console.log('bbb')
})
