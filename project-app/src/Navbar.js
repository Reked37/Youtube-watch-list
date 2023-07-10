import React from "react"
import { NavLink } from "react-router-dom"

function Navbar(){

    return(
        <div className="navbar">
            <NavLink to="watchnext">Watch Next</NavLink>
            <NavLink to="addyoutuber" >Add Youtuber</NavLink>
            <NavLink to="listofyoutubers" >Youtubers</NavLink>
            <NavLink to="/" >Home</NavLink>
        </div>
    )
}

export default Navbar