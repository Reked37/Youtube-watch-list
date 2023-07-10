import React, {useEffect, useState} from "react"
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import YoutuberContainer from "./YoutuberContainer";
import Home from "./Home"
import AddYoutuber from "./AddYoutuber";
import WatchNextList from "./WatchNextList";
import 'semantic-ui-css/semantic.min.css'

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

  function handleDeleteVideo(deleteVideo){
    const removeVideo=watchVideos.filter(video=> video.id !== deleteVideo.id)
    setWatchVideos(removeVideo)
  }

  function postNewVideo(newVideo){
    setWatchVideos([...watchVideos, newVideo])
  }

  return (
    <div className="background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="addyoutuber" element={<AddYoutuber onPostYoutuber={postYoutuber}/>}></Route>
        <Route path="listofyoutubers" element={<YoutuberContainer passYoutubers={youtubers} />}></Route>
        <Route path="watchnext" element={<WatchNextList 
        watchVideos={watchVideos}
        addVideo={postNewVideo}
        deleteVideo={handleDeleteVideo}
        />}></Route>
      </Routes>
    </div>
  );
}

export default App;

