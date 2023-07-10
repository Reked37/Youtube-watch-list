import React from "react"

function WatchNextItem({watchVideo}){
   const { id, channel, video}=watchVideo

    return(
        <div>
            <li>{channel} : {video}</li>
            <button>Finished</button>
        </div>
    )
}

export default WatchNextItem