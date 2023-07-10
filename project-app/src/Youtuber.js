import React from "react"

function Youtuber({passYoutuber}){
    const {id, youtuber, logo, subs}=passYoutuber
    console.log(youtuber)

    return(
        <div className="ui four wide column">
            <div className="ui card">
                <div className="ui image">
                    <img src={logo}></img>
                </div>
                <div className="content">
                    <div className="header">{youtuber}</div>
                    <div className="meta">Youtuber</div>
                </div>
                <div className="extra content">
                    <p>Sub Count: {subs} million</p>
                </div>
            </div>
        </div>
            
      
    )
}

export default Youtuber