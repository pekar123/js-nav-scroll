export const createElement = (tag, className, text) => {
    const elem = document.createElement(tag)

    if(className){
        elem.className = className
    }

    if(text) {
        elem.innerHTML = text
    }

    return elem
}

const HEADER_BUTTON_LIST = [
    {
        width: 24,
        height: 24,
        src: '/svg/header__back.svg',
    },
    {
        width: 24,
        height: 24,
        src: '/img/header__avatar.png',
    }
]

export const createHeader = () => {
    const header = createElement('header', 'header')
 
    HEADER_BUTTON_LIST.forEach((parmas) => {
     const button = createElement('button','button')
 
     const img = createElement('img')
     console.log(Object.entries(parmas))
     // Object.entries(parmas) - Масив властивостей [ 'width', 24] [ 'height' , 24] ['src' , '/svg/header__back.svg']
     // forEach 
     Object.entries(parmas).forEach(([key,value]) => {
         img[key] = value
     })
     
 
     button.append(img)
 
     header.append(button)
    })
 
    return header
 }


  