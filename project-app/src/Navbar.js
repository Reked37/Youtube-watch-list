import React from "react"
import { NavLink } from "react-router-dom"

function Navbar(){

    return(
        <div className="navbar">
            <NavLink to="/" className="navli">Home</NavLink>
            <NavLink to="listofyoutubers" className="navli">Youtubers</NavLink>
            <NavLink to="addyoutuber" className="navli">Add Entertainer</NavLink>
        </div>
    )
}

export default Navbar