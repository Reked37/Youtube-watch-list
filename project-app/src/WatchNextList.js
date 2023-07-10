import React from "react"
import WatchNextItem from "./WatchNextItem"
import AddToWatch from"./AddToWatch"

function WatchNextList({watchVideos, deleteVideo, addVideo}){
    console.log(watchVideos)
    return(
        <div>
            <br></br>
            <AddToWatch/>
            <br></br>
            <ol>
                {watchVideos.map(video => {
                    return <WatchNextItem 
                    watchVideo={video} 
                    onDeleteVideo={deleteVideo}
                    onAddVideo={addVideo}
                    />
                })}
            </ol>
        </div>
    )
}

export default WatchNextList