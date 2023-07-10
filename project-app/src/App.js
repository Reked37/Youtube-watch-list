import React, {useEffect, useState} from "react"
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import YoutuberContainer from "./YoutuberContainer";
import Home from "./Home"
import AddYoutuber from "./AddYoutuber";
import WatchNextList from "./WatchNextList";

function App() {
  const[youtubers, setYoutubers]=useState([])
  const [watchVideos, setWatchVideos]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/youtubers')
    .then(res=>res.json())
    .then(data=>setYoutubers(data))
  },[])

  useEffect(()=>{
    fetch('http://localhost:3000/watchnext')
    .then(res=>res.json())
    .then(data=>setWatchVideos(data))
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
        <Route path="watchnext" element={<WatchNextList watchVideos={watchVideos}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

