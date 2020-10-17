class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els)
    this.defaultOptions = {
      root: null, //親要素との交差などを指定。基本はnull
      rootMargin: '0px 0px', //物体とのmargin。マイナスにすると、見えてから
      threshold: 0.5, //境界の位置
      once: false,
    }
    this.cb = cb
    this.options = Object.assign(this.defaultOptions, options)
    this.once = this.options.once
    this._init()
  }
  _init() {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true)
          if (this.once) {
            observer.unobserve(entry.target)
          }
        } else {
          this.cb(entry.target, false)
        }
      })
    }
    const io = new IntersectionObserver(callback.bind(this), this.options)
    this.els.forEach((el) => io.observe(el))
  }
}

export default ScrollObserver
