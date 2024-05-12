import '../../script/test'

document.querySelector('.form__button').onclick = () => {
  const form = document.getElementById('form')

  if (form.reportValidity()) {
    form.submit()
  } else {
    form.reset()
  }
}
