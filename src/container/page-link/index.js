import { createElement,createHeader } from '../../script/layout'

const page = document.querySelector('.page') // знаходження першого елемента в документі, який відповідає вказаному селектору CSS

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const TAB__LINKS = [
    {
        link: 'База знань',
        active: false,
    },
    {
        link: 'Інформація',
        active: true,
    }
]

const tabHeader = () => {
    const tab = createElement
    ('div','tab')

    TAB__LINKS.forEach((elem) => {
        const changeTab = createElement(
            'div',
            elem.active 
            ? 'change change--active'
            : 'change',   
            )

        const text = createElement(
            'div',
            'change__text',
            elem.link
        )

        const under = createElement(
            'div',
            'change__under'
        )

        changeTab.append(text,under)
 

        tab.append(changeTab)
        
    })
    return tab
}

const POST__LINK = [
    {
  src: "/img/image-1.png",
    }
]

const POST__INFO_2 = [
    {
  title: "Що таке база знань?",
  info: "База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.",
  button: "Перейти до ком'юніті у Телеграм",
    }
]

const createList = () => {
    
    const postList = createElement('main', 'main__content')
     
    POST__LINK.forEach((parmas) => {
        const postImg = createElement('img')

        Object.entries(parmas).forEach(([key,value]) => {
            postImg[key] = value
        })

        postList.append(postImg)
    })

    POST__INFO_2.forEach((postInfo) => {
        const postItem = createElement(
            'h3', 'main__title', postInfo.title,
        )
        postList.append(postItem)

        const postItem1 = createElement(
            'p', 'main__info', postInfo.info,
        )
        postList.append(postItem1)

        const postItem2 = createElement(
            'button', 'main__link', postInfo.button,
        )
        postList.append(postItem2)
    })
 
  return postList
}
const tabl = tabHeader()
page.append(tabl)

const post = createList()
page.append(post)