import React, {useState} from "react"
import { useNavigate, redirect }from "react-router-dom"

function AddYoutuber({onPostYoutuber}){
const [newYoutuber, setNewYoutuber]= useState({
    youtuber:"",
    logo:"",
    subs:""
})
    // const navigate=useNavigate()
    // console.log(navigate)
    function handleSubmit(e){
        e.preventDefault()
        console.log(newYoutuber.youtuber)
        fetch('http://localhost:3000/youtubers',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "youtuber":newYoutuber.youtuber,
                "logo": newYoutuber.logo,
                "subs":newYoutuber.subs
            })
        })
        .then(res=>res.json())
        .then(data=>onPostYoutuber(data))
        redirect("/listofyoutubers")
        setNewYoutuber({
            youtuber:"",
            logo:"",
            subs:""
        })
    }

    function handleChanges(e){
        const name=e.target.name
        const value=e.target.value
        setNewYoutuber({...newYoutuber, [name]:value})
    }
    console.log(newYoutuber)

    return(
        <div>
            <br></br>
            <br></br>
            <form onSubmit={handleSubmit}>
                <label name="youtuber">Youtuber: </label>
                <input onChange={handleChanges} name="youtuber" type="text" value={newYoutuber.youtuber}></input>
                <label name="logo"> Logo: </label>
                <input onChange={handleChanges} name="logo" type="text" value={newYoutuber.logo}></input>
                <label name="subs"> Sub Count: </label>
                <input onChange={handleChanges} name="subs" type="number" value={newYoutuber.subs}></input>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default AddYoutuber