export const SESSION_KEY = 'sessionAuth'

export const saveSession = (session) => {
  try {
    console.log(session)
    window.session = session // ми кладемо в об'єкт window нашу частину session
    // для того щоб звернутися до неї
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify(session),
    )
  } catch (er) {
    console.log(er)
    window.session = null
  }
}

export const loadSession = () => {
  try {
    const session = JSON.parse(
      localStorage.getItem(SESSION_KEY),
    )

    if (session) {
      window.session = session
    } else {
      window.session = null
    }
  } catch (er) {
    console.log(er)
    window.session = null
  }
}

export const getTokenSession = () => {
  try {
    const session = getSession()

    return session ? session.token : null
  } catch (er) {
    console.log(er)
    return null
  }
}

export const getSession = () => {
  try {
    const session =
      JSON.parse(localStorage.getItem(SESSION_KEY)) ||
      window.session

    return session || null
  } catch (er) {
    console.log(er)
    return null
  }
}
