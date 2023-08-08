import React from "react";
import Header from "./Header";
import "./static_css/Events.css"
import img from "./imgs/cycling-img.jpg"
import {PlayCircleFilled} from "@ant-design/icons"
import Button from "./Button";
export default function Events() {
   return (
      <div className="event_div">
         <div>
            <div className="group-3">
               <h3>Join #GoEcoBiking Programme</h3>
            </div>
         </div>

         <div className="event_video" style={{backgroundImage:` linear-gradient(rgba(8, 82, 156, 0), rgba(0, 0, 0, 0.655), rgb(0, 0, 0)
        ), url(${img})`}}>
            <div className="video_symbol">
               <PlayCircleFilled style={{fontSize:"60px", cursor:"pointer"}}/>
            </div>
            <div className="group-4">
               <h4>Watch Full Video</h4>
            </div>

         </div>
            <div className="text-button">
               <div className="text group-4">
                  <h2>Duis aute irure dolor in reprehenderit velit.</h2>
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
