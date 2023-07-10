import React from "react"
import Youtuber from "./Youtuber"

function YoutuberContainer({passYoutubers}){

    const displayYoutubers=passYoutubers.map(youtuber=>{
        return <Youtuber passYoutuber={youtuber} key={youtuber.youtuber}/>
    })

    return(
        <div className="ui grid container">
           {displayYoutubers}
        </div>
    )
}

export default YoutuberContainer