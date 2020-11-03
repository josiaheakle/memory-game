import React, { useState, useEffect } from "react"

// ICONS ============================== ICONS
import croissantIcon from "../imgs/6-croissant.svg"
import eggplantIcon from "../imgs/7-eggplant.svg"
import watermelonIcon from "../imgs/8-watermelon.svg"
import saladIcon from "../imgs/42-salad.svg"
import tacoIcon from "../imgs/44-taco.svg"
import frenchFriesIcon from "../imgs/46-french-fries.svg"
import burgerIcon from "../imgs/47-burger.svg"
import hotDogIcon from "../imgs/48-hot-dog.svg"
import pizzaIcon from "../imgs/49-pizza.svg"
import pancakeIcon from "../imgs/53-pancake.svg"
import baconIcon from "../imgs/54-bacon.svg"
import friedEggIcon from "../imgs/55-fried-egg.svg"
import cheeseIcon from "../imgs/57-cheese.svg"
import cornIcon from "../imgs/67-corn.svg"
import carrotIcon from "../imgs/68-carrot.svg"
import cucumberIcon from "../imgs/69-cucumber.svg"
import tomatoIcon from "../imgs/71-tomato.svg"
import avocadoIcon from "../imgs/72-avocado.svg"
import kiwiIcon from "../imgs/73-kiwi.svg"
import pineappleIcon from "../imgs/74-pineapple-1.svg"
import peachIcon from "../imgs/75-peach.svg"

// import cherryIcon from "../imgs/76-cherry.svg"
// import strawberryIcon from "../imgs/78-strawberry.svg"
// import grapesIcon from "../imgs/79-grapes.svg"
// import bananaIcon from "../imgs/81-banana.svg"
// import lemonIcon from "../imgs/82-lemon.svg"
// import orangeIcon from "../imgs/83-orange.svg"
// import pearIcon from "../imgs/84-pear.svg"
// import appleIcon from "../imgs/85-apple-1.svg"







// Components ========================= Components
import MemoryCard from "./MemoryCard.js"

const MemoryCards = (props) => {

    /*
    props: 
        randomize - bool, will toggle when randomize is needed
        onCardClick - parent method (params: (cardId)) to handle game logic

    state: 
        memoryCardsData - array of card data objects
        memoryCardsDom  - div with memory card components
    */

    let counter = 0;
    const getId = () => { return counter++; }
    
    const [ memoryCardsDom, setMemoryCardsDom] = useState(<span/>);
    const [ memoryCardsData, setMemoryCardsData ] = useState([
        {title: 'croissant', src:croissantIcon, id:getId()},
        {title: 'eggplant', src:eggplantIcon, id:getId()},
        {title: 'watermelon', src:watermelonIcon, id:getId()},
        {title: 'salad', src:saladIcon, id:getId()},
        {title: 'taco', src:tacoIcon, id:getId()},
        {title: 'french fries', src:frenchFriesIcon, id:getId()},
        {title: 'burger', src:burgerIcon, id:getId()},
        {title: 'hot dog', src:hotDogIcon, id:getId()},
        {title: 'pizza', src:pizzaIcon, id:getId()},
        {title: 'pancake', src:pancakeIcon, id:getId()},
        {title: 'bacon', src:baconIcon, id:getId()},
        {title: 'fried egg', src:friedEggIcon, id:getId()},
        {title: 'cheese', src:cheeseIcon, id:getId()},
        {title: 'corn', src:cornIcon, id:getId()},
        {title: 'carrot', src:carrotIcon, id:getId()},
        {title: 'cucumber', src:cucumberIcon, id:getId()},
        {title: 'tomato', src:tomatoIcon, id:getId()},
        {title: 'avocado', src:avocadoIcon, id:getId()},
        // {title: 'kiwi', src:kiwiIcon, id:getId()},
        // {title: 'pineapple', src:pineappleIcon, id:getId()},
        // {title: 'peach', src:peachIcon, id:getId()},
    ]);


    const createMemoryCardsDom = (cards) => {
        setMemoryCardsDom(
            <div className='memory-cards'>
                {cards.map(card => (<MemoryCard key={card.id} title={card.title} src={card.src} id={card.id} clickAction={handleCardClick} />))}
            </div>
        )
    }

    const randomizeCards = () => {
        let randomizedCards = []
        let usedIndexes = []
        for(let i=0; i<memoryCardsData.length; i++ ) {
            let rand = Math.floor(Math.random()*memoryCardsData.length)
            if(!usedIndexes.includes(rand)) {
                randomizedCards.push(memoryCardsData[rand])
                usedIndexes.push(rand)
            } else {
                i--;
            }
        }
        createMemoryCardsDom(randomizedCards)

    }

    const handleCardClick = (event) => {
        props.onCardClick(event.target.id)
    }

    useEffect(() => {
            randomizeCards();
    }, [props.randomize])

    useEffect(() => {
        randomizeCards();
    }, [])
    
    return(
        <div className='Memory-Cards'>
            {memoryCardsDom}
        </div>
    );
}

export default MemoryCards;