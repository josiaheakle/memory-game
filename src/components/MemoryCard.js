// import React from "react"
import { useEffect } from "react";
import "./css/MemoryCard.css"


const MemoryCard = ( props ) => {

    /*
    props: 
        title:       name of card/ icon
        src  :       img src 
        id   :       unique id to check if it has been clicked already
        clickAction: parent method called when card is clicked
    */
    

    return(
        <div id={props.id} className='Memory-Card' onClick={props.clickAction}>
            <img id={props.id} src={props.src} alt={props.title}/>
            <h3 id={props.id}>{props.title}</h3>
        </div>
    );
}


export default MemoryCard;