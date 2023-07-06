import React from "react"
import { NavLink } from "react-router-dom"

function Navbar(){

    return(
        <div>
            <div href="/">Home</div>
            <div href="/youtubers">Youtubers</div>
            <div href="/addyoutubers">Add Entertainer</div>
        </div>
    )
}

export default Navbar