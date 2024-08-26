class Session {
  static #list = [] // місце для токенів

  constructor(user) {
    this.token = Session.gennerateCode()
    this.user = {
      email: user.email,
      isConfirm: user.isConfirm,
      role: user.role,
      id: user.id,
    }
  }

  static gennerateCode = () => {
    const length = 10
    const character =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let result = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * character.length, //за рахунок вбудованої можливості Math.random()
      ) // ми отримуємо рандомне число від 0,01 до 0,99 та множимо на довжину нашого character, після чого ми отримуємо ЧИСЛО(це наший рандом індекс)
      result += character[randomIndex] // в цьому рядку коду ми отримуємо індекс за допомогою квадратний дужок [],
    } // після чого ми починаємо

    return result
  }
  // Рандом число 4 значне

  static create = (user) => {
    const session = new Session(user) // Створюємо нову сесію, передаємо user

    this.#list.push(session) // поклали в масив

    return session
  }

  static get = (token) => {
    //Пошук токена
    return (
      this.#list.find((item) => item.token === token) ||
      null
    )
  }
}

module.exports = {
  Session,
}
