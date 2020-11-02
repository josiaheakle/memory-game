
import MemoryGameHeader from "./MemoryGameHeader.js"
import MemoryCards from "./MemoryCards.js"

import "./css/MemoryGame.css"





import { useState } from "react"


const MemoryGame = (props) => {

    const [ score, setScore ] = useState(0);                // number of current score
    const [ highScore, setHighScore ] = useState(0);        // number of best score
    const [ clickedCards, setClickedCards ] = useState([]); // array of clicked card ids
    const [ randomize, setRandomize ] = useState(false);    // bool to send to cards when randomize is needed
    const [ hasPlayed, setHasPlayed ] = useState(false);
    const [ messageToUser, setMessageToUser ] = useState('');

    const getRandomGoodMessage = () => {

        const messages = [
            "Keep it up!",
            "Great job!",
            "Good moves!",
            "I wonder how many you can remember...",
            "Wow!",
            "Amazing!",
            "*yawn*",
            "I hope you can keep this up",
            "Is that what you're wearing?",
            "I'm impressed!",
            "Can you keep this up?",
            "I bet you already forgot what that last one was...",
            "Nice",
            ":)"
        ]

        const rand = (Math.floor(Math.random() * messages.length))
        return(messages[rand])

    }

    const cardClicked = (cardId) => {
        
        console.log(clickedCards)
        let gameOver = false;
        clickedCards.forEach(id => {
            if(cardId === id) {
                gameOver = true;
            } 
        })
        if(gameOver !== true) {
            let rand = Math.floor(Math.random() * 20)
            if(rand % 2) {setMessageToUser(getRandomGoodMessage())}
            setRandomize(!randomize)
            clickedCards.push(cardId)
            setScore(score+1)
        } else {
            handleGameOver();
        }
    }

    const handleGameOver = () => {
        setHasPlayed(true)
        if(score > highScore) {
            setHighScore(score)
            setMessageToUser(`You beat your high score!`)
        } else {
            setMessageToUser(`Good game! I bet you can beat ${highScore} next time!`)
        }
        setScore(0)
        setClickedCards([])
        setRandomize(!randomize)

    }

    return (
        <div className='Memory-Game'>
            <MemoryGameHeader score={score} highScore={highScore} />
            <div className='game-container'>
                        
                <div className='how-to-play'>

                    {(hasPlayed === false) ? (     
                        <div>   
                            <h2> How to play </h2>
                            <ol>
                                <li> Click any card </li>
                                <li> Click any other card </li>
                                <li> Don't click the same card twice! </li>
                            </ol>
                        </div>
                    ) 
                    :
                    <div>
                        <h2 className="message-to-user"> { messageToUser } </h2>
                    </div>
                    }

                </div>

                <MemoryCards randomize={randomize} onCardClick={cardClicked} />
            </div>
            
            <div className='footer'>
                <div id='author'>Game created by <a href="https://www.josiaheakle.com" title="Josiah Eakle">Josiah Eakle</a></div>
                <div id="icon-provider">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

            </div>
        </div>
    );
}

export default MemoryGame;