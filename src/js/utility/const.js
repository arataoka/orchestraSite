const effect = window.innerWidth < 600 ? 'coverflow' : 'cube'

const swiperOption = {
  effect: effect,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
}

export default swiperOption
