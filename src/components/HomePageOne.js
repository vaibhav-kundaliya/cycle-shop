import React from "react";
import "./static_css/HomePageOne.css";
import { CaretRightFilled } from "@ant-design/icons";
import Button from "./Button.js";

function HomePageOne() {
   return (
      <>
         <div className="first_content">
            <div style={{ fontSize: "2rem" }}>
               <b>
                  <i>Newly Launched</i>
               </b>
            </div>
            <div style={{ fontSize: "3.69rem" }}><b>Kryo X26 MTB</b></div>
            <div style={{ fontSize: "2rem", marginTop:"30px" }}>
               <b>
                  <i>Specifications:</i>
               </b>
            </div>
            <div style={{ fontSize: "1.5rem" }}>
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
            <Button href="/" text="Buy Now"></Button>
         </div>
      </>
   );
}

export default HomePageOne;
