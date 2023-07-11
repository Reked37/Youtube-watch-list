import React, {useState} from "react"

function AddToWatch({onAddVideo}){
    const [addToWatch, setAddToWatch]=useState({
        channel:"",
        video:""
    })

    function handleSubmit(event){
        event.preventDefault()
        fetch(`http://localhost:3000/watchnext`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "channel":addToWatch.channel,
                "video":addToWatch.video
            })
        })
        .then(res=>res.json())
        .then(data=>onAddVideo(data))
        setAddToWatch({
            channel:"",
            video:""
        })
    }

    function handleChange(event){
        const name=event.target.name
        const value= event.target.value
        setAddToWatch({...addToWatch, [name]:value})
    }
    console.log(addToWatch)

    return(
        <form onSubmit={handleSubmit} className="ui form">
            <div className="field">
            <label>Channel: </label>
            <input onChange={handleChange} name="channel" type="text" 
            value={addToWatch.channel}
            placeholder="Add Channel"
            ></input>
            </div>
            <div className="field">
            <label>Video: </label>
            <input onChange={handleChange} name="video" type="text" 
            value={addToWatch.video}
            placeholder="Video's Name"
            ></input>
            </div>
            <button  className="ui olive button" type="submit">Add To Watch List</button>
        </form>
    )
}

export default AddToWatch