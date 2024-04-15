import { createElement,createHeader } from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

const POST_LIST = [
    {
        category: [
            {text: 'Важливо', id:1},
            {text: 'Нова', id:2},
            {text: 'Новааа', id:3},
        ],
        info: 'До біса хочеться сказати чому так важко розмовляти з ти орком той що там сидить в окопі і дума що він тут як дома',
        date: '23.02',
        viewed: false,
    },
    {
        category: [{text: 'Нова', id:2}],
        info: 'До біса хочеться сказати чому так важко розмовляти з ти орком той що там сидить в окопі і дума що він тут як дома',
        date: '21.02',
        viewed: true,
    }
]

const createPost = () => {
    const postList = createElement('main', 'post__list')

    POST_LIST.forEach((postData) => {
        const post = createElement(
            'div',
            postData.viewed // Для визначення  категорії, або вона активна або ні. Відповідно до цього ми добавляємо клас
              ? 'post button post--viewed'
              : 'post button',
        )

        const postHeader = createElement('div', 'post__header',)

        const categoryList = createElement('div', 'post__category-list',)

        postData.category.forEach((category) => { //Відповідно ми звертаємося до POST_LIST де робимо ітерацію
            const categorySpan = createElement(
                'span',
                `post__category post__category--${category.id}`,
                category.text,
            )
            categoryList.append(categorySpan) // тут ми добавляємо в post__category-list всю інформацію про наший span
        })

        const dateSpan = createElement(
            'span', //тег
            'post__date', // клас
            postData.date, // текст
        )
        postHeader.append(categoryList, dateSpan)


        const infoParagraph = createElement(
            'p',
            'post__info',
            postData.info,
        )
        post.append(postHeader, infoParagraph)

        //=====

        postList.append(post)
    })

    return postList
}

const post = createPost()
page.append(post)