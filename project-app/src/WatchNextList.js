import React from "react"
import WatchNextItem from "./WatchNextItem"
import AddToWatch from"./AddToWatch"

function WatchNextList({watchVideos, deleteVideo, addVideo}){
    console.log(watchVideos)
    return(
        <div>
            <br></br>
            <AddToWatch onAddVideo={addVideo}/>
            <br></br>
            <ol>
                {watchVideos.map(video => {
                    return <WatchNextItem 
                    watchVideo={video} 
                    onDeleteVideo={deleteVideo}
                    />
                })}
            </ol>
        </div>
    )
}

export default WatchNextList