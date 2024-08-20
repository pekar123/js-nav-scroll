class User {
  static USER_ROLE = {
    USER: 1,
    ADMIN: 2,
    DEVELOPER: 3,
  }

  static #list = []

  static #count = 1

  constructor({
    email,
    password,
    role,
    isConfirm = false,
  }) {
    this.id = User.#count++

    this.email = String(email).toLowerCase()
    this.password = String(password)
    this.role = User.#convertRole(role)

    this.isConfirm = isConfirm
  }

  static #convertRole = (role) => {
    role = Number(role)

    if (isNaN(role)) {
      role = this.USER_ROLE.USER
    }

    role = Object.values(this.USER_ROLE).includes(role)
      ? role
      : this.USER_ROLE.USER

    return role
  }

  static create(data) {
    //Створення та додавання користувача в #list
    const user = new User(data) //створення користувача із data

    this.#list.push(user)

    console.log(this.#list)

    return user
  }

  static getByEmail(email) {
    return (
      this.#list.find(
        (user) =>
          user.email === String(email).toLowerCase(),
      ) || null
    )
  }

  // Новий метод для отримання всіх користувачів
  static getAllUsers() {
    return this.#list
  }
}

module.exports = {
  User,
}
