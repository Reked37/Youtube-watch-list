import React from "react"


function Home(){
    return(
        <div>
            <br></br>
            <h1 className="ui large header, header">Home Page!</h1><br></br>
            <p className="text">This website shows a list of the Top 10 youtubers with the ability to add more youtubers to the list!</p>
            <div className="img"><img 
            src="https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png"
            alt="youtube logo"
            width="400"
            height="400"
            ></img></div>
            <p className="text">On the <u>Watch Next</u> tab you are able to add videos on what to watch next and can remove the video after watching it!</p>
        </div>
    )
}

export default Home