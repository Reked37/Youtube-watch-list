import React from "react"

function WatchNextItem({watchVideo, onDeleteVideo}){
   const { id, channel, video}=watchVideo

    function deleteItem(){
        fetch(`http://localhost:3000/watchnext/${watchVideo.id}`,{
            method: "DELETE",
        })
        .then(res=>res.json())
        .then(()=>onDeleteVideo(watchVideo))
    }

    return(
        <div>
            <li>{channel} : {video}</li>
            <button onClick={deleteItem}>Finished</button>
        </div>
    )
}

export default WatchNextItem