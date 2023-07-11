import React from "react"
import WatchNextItem from "./WatchNextItem"
import AddToWatch from"./AddToWatch"
import {List} from "semantic-ui-react"

function WatchNextList({watchVideos, deleteVideo, addVideo}){
    console.log(watchVideos)
    return(
        <div>
            <br></br>
            <AddToWatch onAddVideo={addVideo}/>
            <br></br>
            <div className="ui large header">Your Watch List</div>
            <ol className="list">
                {watchVideos.map(video => {
                    return <WatchNextItem
                    key={video.id} 
                    watchVideo={video} 
                    onDeleteVideo={deleteVideo}
                    />
                })}
            </ol>
        </div>
    )
}

export default WatchNextList