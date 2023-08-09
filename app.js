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
let playerLives = 6
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
        card.setAttribute('name', item.name)

        //Attach the cards to the section
        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)

        //Add event on card
        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard')
            checkCard(e)
        })
    })
}

//Check card

const checkCard = (e) => {
    const clickedCard = e.target
    clickedCard.classList.add('flipped')
    const flippedCards = document.querySelectorAll('.flipped')
    const toggleCard = document.querySelectorAll('.toggleCard')

    // console.log(clickedCard)
    // Add logic
    if(flippedCards.length === 2){
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log("It's a Match")
            //If match remove possibility to click on the card
            flippedCards.forEach((card) => {
                card.classList.remove("flipped")
                card.style.pointerEvents = 'none'
            })
        } else {
            console.log("Wrong")
            flippedCards.forEach((card)=>{
                card.classList.remove("flipped")
                setTimeout(() => card.classList.remove("toggleCard"), 1000)
            })
            playerLives--
            playerLivesCount.textContent = playerLives

            if (playerLives === 0) {
                resetGame("👎 You lose")
            }
        }
    }
    // check if won the game
    console.log(section.children.length)
    if (toggleCard.length === section.children.length) {
        resetGame("🫶You win")
    }

}

//Reset game

const resetGame = (text) => {
    let carData = randomize()
    let faces = document.querySelectorAll(".face")
    let cards = document.querySelectorAll(".card")
    //remove pointer events till all the cards flipped back
    section.style.pointerEvents ='none'
    carData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard")
        //Randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all'
            faces[index].src = item.img
            cards[index].setAttribute('name', item.name)
            section.style.pointerEvents ='all'
        }, 1000)
    })
    playerLives = 6
    playerLivesCount.textContent = playerLives
    setTimeout(() => window.alert(text), 100)
}
cardGenerator()