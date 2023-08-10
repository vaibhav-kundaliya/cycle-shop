import React from "react";
import "./design/HomePageOne.css";
import { CaretRightFilled } from "@ant-design/icons";
import Button from "../buttonComponents/Button";

function HomePageOne() {
   return (
      <>
         <div className="first_content">
            <div className="group-4">
               <h3>Newly Launched</h3>
            </div>
            <div className="group-1"><h1>Kryo X26 MTB</h1></div>
            <div className="group-3">
               <h4>Specification: </h4>
            </div>
            <div>
               <li>
                  <CaretRightFilled /> Lightweight 18" Frame
               </li>
               <li>
                  <CaretRightFilled /> Steel Suspension Fork
               </li>
               <li>
                  <CaretRightFilled /> Steel Hardtail Frame
               </li>
            </div>
            <br></br>
            <Button href="/" text="BUY NOW"></Button>
         </div>
      </>
   );
}

export default HomePageOne;
