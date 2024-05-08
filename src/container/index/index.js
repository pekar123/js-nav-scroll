class Slider {
  static #content = null
  static #left = null
  static #right = null

  static #count = 1
  static #max = null

  static init = () => {
    this.#content = document.querySelector(
      '.slider__content',
    )
    this.#left = document.querySelector(
      '.slider__button--left',
    )
    this.#right = document.querySelector(
      '.slider__button--right',
    )

    this.#max = this.#content.childElementCount // childElementCount - він дає скільки дитячих едементів має content

    this.#left.onclick = () => this.#slide('left')
    this.#right.onclick = () => this.#slide('right')
  }
  // slide - буде прокручувати наші картинки, аргумент side
  static #slide = (side) => {
    // Нам потрібна поточна інформація де ми знаходимося

    // offsetWidth - буде казати нам ширину доступного контенту(Картинка)
    const offsetWidth = this.#content.offsetWidth
    // scrollLeft - на скільки в нас прокручена картинка
    const scrollLeft = this.#content.scrollLeft
    // scrollWidth - доступна шинина для прокрутики (-1-...-2-...-3-...-4-)
    // це потрібно знати для того що  на скільки прокрутити наший контент
    const scrollWidth = this.#content.scrollWidth

    let scroll = 0

    if (side === 'left') {
      if (scrollLeft === 0 || this.#count === 1) {
        this.#count = this.#max
        scroll = (this.#count - 1) * offsetWidth
      } else {
        this.#count -= 1
        scroll = (this.#count - 1) * offsetWidth
      }
    }

    if (side === 'right') {
      if (
        this.#count === this.#max ||
        scrollLeft === scrollWidth - offsetWidth
      ) {
        this.#count = 1
        scroll = 0
      } else {
        this.#count += 1
        scroll = (this.#count - 1) * offsetWidth
      }
    }

    this.#content.scrollTo({
      top: 0,
      left: scroll,
      behavior: 'smooth',
    })
  }
}

Slider.init()

class Header {
  static #height = null
  static #wrapper = null
  static #button = null

  static #isOpen = false

  static init() {
    this.#height = document.querySelector(
      '.header__bottom',
    ).offsetHeight //Знайшли панель яка буде зявлятися offsetHeight- доступна висота яка передається в #toggle ----`${this.#height}px`

    this.#wrapper = document.querySelector(
      '.header__wrapper',
    ) //Знайшли спливаючу хуйню
    this.#button = document.querySelector('.header__button') //знайшли кнопку
    // Коли ми натискаємо на кнопку використовуючи onclick, який в свою чергу викликає
    // метод #toggole, який перевіряє чи наша кнопка активна
    this.#button.onclick = this.#toggle
  }

  static #toggle = () => {
    if (this.#isOpen) {
      this.#button.classList.replace(
        'header__button--close',
        'header__button--open',
      )

      this.#wrapper.style.height = 0
    } else {
      this.#button.classList.replace(
        'header__button--open',
        'header__button--close',
      )
      this.#wrapper.style.height = `${this.#height}px`
    }
    this.#isOpen = !this.#isOpen
  }
}

Header.init()
