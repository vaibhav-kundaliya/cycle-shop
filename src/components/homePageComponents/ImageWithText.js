import React from "react";
import css from "./design/ImageWithText.module.css";
export default function ImageWithText(props) {
   const cssStyle = {
      backgroundImage: `linear-gradient(rgba(8, 82, 156, 0), rgba(0, 0, 0, 0.655), rgb(0, 0, 0)), url(${props.img})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   };

   return (
      <div className="image-container">
         <img src={props.img} alt="Image" width={"fit-content"} />
         <div className="overlay-text">Hello, Ant Design!</div>
      </div>
   );
}
