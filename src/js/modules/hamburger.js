class Hamburger {
  constructor() {
    console.log('aaaaaa')
    this.humberger = document.querySelector('.js-hamburger')
    this.main = document.querySelector('.js-main')
    this.humberger.addEventListener('click', this.toggleMenu.bind(this)) //ここでbindをする必要がある！
  }
  toggleMenu() {
    console.log(this.humberger)
    console.log(this.main)
    console.log('ccc')
    this.main.classList.toggle('is-open')
  }
}

export default Hamburger
