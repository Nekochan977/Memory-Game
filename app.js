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
const backImage = {
    name: 'Checkered Pattern',
    // id: '2',
    img: './assets/checkered-pattern.png'
}

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
}

//Card generator function
const cardGenerator = () => {
    const cardData = randomize()
    cardData.forEach((item) =>{

        //Generate the html
        const card = document.createElement('div')
        const face = document.createElement("img")
        const back = document.createElement("img")
        card.classList = 'card'
        face.classList = 'face'
        back.classList = 'back'

        //Attach the info for images
        face.src = item.img
        face.alt = item.name
        back.src = backImage.img
        back.alt = backImage.name

        //Attach the cards to the section
        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)
    })
}
cardGenerator()