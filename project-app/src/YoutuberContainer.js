import React from "react"
import Youtuber from "./Youtuber"

function YoutuberContainer({youtubers}){

    const displayYoutubers=youtubers.map(youtuber=>{
        return <Youtuber youtuber={youtuber} key={youtuber.youtuber}/>
    })

    return(
        <div>
           {displayYoutubers}
        </div>
    )
}

export default YoutuberContainer