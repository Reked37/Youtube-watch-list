import React, {useEffect, useState} from "react"
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import YoutuberContainer from "./YoutuberContainer";
import Home from "./Home"

function App() {
  const[youtubers, setYoutubers]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/youtubers')
    .then(res=>res.json())
    .then(data=>setYoutubers(data))
  },[])

  function postEntertainer(newYoutuber){
    setYoutubers([...youtubers,newYoutuber])
  }

 

  return (
    <div>
      <Navbar />
      <Home />
      <YoutuberContainer youtubers={youtubers} />
    </div>
  );
}

export default App;

