import React from "react";
import img from "./imgs/bicycle-4.jpg";
import "./static_css/ImageWithText.css";
export default function ImageWithText(props) {
   const cssStyle = {
      backgroundImage: `url(${props.img})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "row",
      alignItems: "end",
      height: props["height"],
      width: props["width"]
   };

   return (
      <div className="div-img" style={cssStyle}>
         <div>
            <div className="div-img-title">{props.title}</div>
            <div className="div-img-description">{props.text}{props.img}</div>
         </div>
      </div>
   );
}
