import React, {useEffect, useState} from "react"
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import YoutuberContainer from "./YoutuberContainer";
import Home from "./Home"
import AddYoutuber from "./AddYoutuber";

function App() {
  const[youtubers, setYoutubers]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/youtubers')
    .then(res=>res.json())
    .then(data=>setYoutubers(data))
  },[])

  function postYoutuber(newYoutuber){
    console.log(newYoutuber)
    setYoutubers([...youtubers,newYoutuber])
  }

 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="addyoutuber" element={<AddYoutuber onPostYoutuber={postYoutuber}/>}></Route>
        <Route path="listofyoutubers" element={<YoutuberContainer youtubers={youtubers} />}></Route>
      </Routes>
    </div>
  );
}

export default App;

