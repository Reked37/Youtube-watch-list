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
        setAddToWatch
    }

    function handleChange(event){
        const name=event.target.name
        const value= event.target.value
        setAddToWatch({...addToWatch, [name]:value})
    }
    console.log(addToWatch)

    return(
        <form onSubmit={handleSubmit}>
            <label>Channel: </label>
            <input onChange={handleChange} name="channel" type="text" value={addToWatch.channel}></input>
            <label>Video: </label>
            <input onChange={handleChange} name="video" type="text" value={addToWatch.video}></input>
            <button  type="submit">Add To Watch List</button>
        </form>
    )
}

export default AddToWatch