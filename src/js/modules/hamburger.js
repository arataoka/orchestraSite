class Hamburger {
  constructor() {
    this.humberger = document.querySelector('.js-hamburger')
    this.main = document.querySelector('.js-main')
    this.menu = document.querySelector('.js-menu')
    this.humberger.addEventListener('click', this.toggleMenu.bind(this)) //ここでbindをする必要がある！
  }
  toggleMenu() {
    this.menu.classList.toggle('is-open')
    this.main.classList.toggle('is-open')
    this.humberger.classList.toggle('is-open')
  }
}

export default Hamburger
