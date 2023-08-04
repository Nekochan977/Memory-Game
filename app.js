const cardArray = [
    {
        name: 'ice cream',
        // id: '1',
        img: 'assets/ice-cream.png'
    },

    {
        name: 'Chinese Lion',
        // id: '2',
        img: 'assets/lion-of-china.png'
    },
    {
        name: 'Mont Fuji',
        // id: '3',
        img: 'assets/mont-fuji.png'
    },

    {
        name: 'Hot Dog',
        // id: '4',
        img: 'assets/hot-dog.png'
    },

    {
        name: 'Cats',
        // id: '5',
        img: 'assets/cats.png'
    },
    {
        name: 'ice cream',
        // id: '6',
        img: 'assets/ice-cream.png'
    },

    {
        name: 'Chinese Lion',
        // id: '7',
        img: 'assets/lion-of-china.png'
    },
    {
        name: 'Mont Fuji',
        // id: '8',
        img: 'assets/mont-fuji.png'
    },

    {
        name: 'Hot Dog',
        // id: '9',
        img: 'assets/hot-dog.png'
    },

    {
        name: 'Cats',
        // id: '10',
        img: 'assets/cats.png'
    },
]

// Grab a couple of things

const section = document.querySelector("section")
const playerLivesCount =  document.querySelector("span")
const playerLives = 6

//Link text
playerLivesCount.textContent = playerLives

//Generate Data
const getData = () => [
    {
        name: 'ice cream',
        // id: '1',
        img: './assets/ice-cream.png'
    },

    {
        name: 'Chinese Lion',
        // id: '2',
        img: './assets/lion-of-china.png'
    },
    {
        name: 'Mont Fuji',
        // id: '3',
        img: './assets/mont-fuji.png'
    },

    {
        name: 'Hot Dog',
        // id: '4',
        img: './assets/hot-dog.png'
    },

    {
        name: 'Cats',
        // id: '5',
        img: './assets/cats.png'
    },
    {
        name: 'ice cream',
        // id: '6',
        img: './assets/ice-cream.png'
    },

    {
        name: 'Chinese Lion',
        // id: '7',
        img: './assets/lion-of-china.png'
    },
    {
        name: 'Mont Fuji',
        // id: '8',
        img: './assets/mont-fuji.png'
    },

    {
        name: 'Hot Dog',
        // id: '9',
        img: './assets/hot-dog.png'
    },

    {
        name: 'Cats',
        // id: '10',
        img: './assets/cats.png'
    },
]

//Randomize cards
const randomize = () => {
    const cardData = getData()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
    // console.log(cardData)
}

//Card generator function
const cardGenerator = () => {
    const cardData = randomize()
    //Generate the html
    const card = document.createElement('div')
    const face = document.createElement("img")
    const back = document.createElement("div")

    console.log(cardData)
}
cardGenerator()