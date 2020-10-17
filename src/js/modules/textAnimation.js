import { TweenMax, Back } from 'gsap'

class TextAnimation {
  constructor(el) {
    this.el = el
    this.text = this.el.innerText.split('')
    this.doms = this.text.reduce((acc, cur) => {
      if (cur === ' ') cur = '&nbsp;'
      return `${acc}<span class="char">${cur}</span>`
    }, '')
    this.el.innerHTML = this.doms
    this.domChars = this.el.querySelectorAll('.char')
  }

  animate() {
    this.el.querySelectorAll('.char').forEach((letter, index) => {
      TweenMax.to(letter, 0.6, {
        ease: Back.easeOut,
        delay: index * 0.05,
        startAt: { y: '-50%', opacity: 0 },
        y: '0%',
        opacity: 1,
      })
    })
  }
}

export default TextAnimation
