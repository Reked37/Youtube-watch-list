import React from "react"

function Youtuber({youtuber}){
    const {id, youtube, logo, subs}=youtuber

    return(
        <div>
            <h1>{youtube}</h1>
            <img src={logo}></img>
            <p>{subs}</p>
        </div>
        
            
      
    )
}

export default Youtuber