import './css/MemoryGameHeader.css'

const MemoryGameHeader = (props) => {

    /*
    props: 
        highScore, score
    */

    return(
        <div className='Memory-Game-Header'>
            <h1> Don't Forget! </h1>
            <div className='score-container'>
                <span className='score'>
                    <span className='score-name'> High Score: </span>
                    <span className='score-num'> {props.highScore} </span>
                </span>
                <span className='score'>
                    <span className='score-name'> Score: </span>
                    <span className='score-num'> {props.score} </span>
                </span>
            </div>

        </div>
    );
}


export default MemoryGameHeader;