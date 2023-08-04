import React from "react";
import Header from "./Header";
import "./static_css/Events.css"
import img from "./imgs/cycling-img.jpg"
import {PlayCircleFilled} from "@ant-design/icons"
import Button from "./Button";
export default function Events() {
   return (
      <div className="event_div">
         <Header header="Join #GoEcoBiking Programme" />

         <div className="event_video" style={{backgroundImage:` linear-gradient(rgba(8, 82, 156, 0), rgba(0, 0, 0, 0.655), rgb(0, 0, 0)
        ), url(${img})`}}>
            <div>
               <PlayCircleFilled style={{fontSize:"60px", cursor:"pointer"}}/>
            </div>
            <div>
               <h1>Watch Full Video</h1>
            </div>

         </div>
            <div className="text-button">
               <div className="text">
                  <h1>Duis aute irure dolor in reprehenderit velit.</h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
               </div>
               <br></br>
               <div className="button">
                  <Button text="Join Telegram Group"/>
               </div>
            </div>
      </div>
   );
}
