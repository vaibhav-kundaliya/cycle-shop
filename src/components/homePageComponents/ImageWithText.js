import React from "react";
import "./design/ImageWithText.css";
export default function ImageWithText(props) {
   const cssStyle = {
      backgroundImage: `linear-gradient(rgba(8, 82, 156, 0), rgba(0, 0, 0, 0.655), rgb(0, 0, 0)), url(${props.img})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   };

   return (
      
      <div className="div-img" style={cssStyle}>
         <div>
            <span className="div-img-title">{props.title}</span><br />
            <span className="div-img-description">{props.text}</span>
         </div>
         <div></div>
      </div>
   );
}
