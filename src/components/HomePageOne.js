import React, { memo } from "react";
import "./HomePageOne.css";
import { CaretRightFilled } from "@ant-design/icons";
import Button from "./Button.js";

function HomePageOne() {
   return (
      <>
         <div className="first_content" >
         
         <div style={{ fontSize: "40px" }}>
            <b>
               <i>Newly Launched</i>
            </b>
         </div>
         <p style={{ fontSize: "56px" }}>Kryo X26 MTB</p>
         <p style={{ fontSize: "24px" }}>
            <b>
               <i>Specifications:</i>
            </b>
         </p>
         <div style={{ fontSize: "20px" }}>
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

         <Button href="/" text="Buy Now"></Button>
      </div>
      </>
);
}

export default HomePageOne;
