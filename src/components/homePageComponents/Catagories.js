import React from "react";
import { CaretRightFilled } from "@ant-design/icons";
import "./design/Catagories.css";
import CustomButton from "../buttonComponents/CustomButton";


export default function Catagories({ element }) {
   const content_css = {
      backgroundImage: `linear-gradient(rgba(8, 82, 156, 0), rgba(0, 0, 0, 0.655), rgb(0, 0, 0)),  `+element.img,
      color: "White",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "90vh",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
   };
   return (
      <>
         <div key={element.id} style={content_css}>
            <div className="content">
               <div className="group-4">Discover The Collection</div>
               <div className="group-3">
                  {element.catagories}
               </div>
               <div className="description">{element.description}</div>
               <div className="points">
                  <div>
                     <li>
              
                        <i className="fas fa-bullseye bullet_points"></i>&nbsp;&nbsp;
                        <span>{element.key_points[0]}</span>
                     </li>
                     <li>
              
                        <i className="fas fa-bullseye bullet_points"></i>&nbsp;&nbsp;
                        <span>{element.key_points[1]}</span>
                     </li>
                     <li>
              
                        <i className="fas fa-bullseye bullet_points"></i>&nbsp;&nbsp;
                        <span>{element.key_points[2]}</span>
                     </li>
                  </div>
                  <div>
                     <li>
              
                        <i className="fas fa-bullseye bullet_points"></i>&nbsp;&nbsp;
                        <span>{element.key_points[3]}</span>
                     </li>
                     <li>
              
                        <i className="fas fa-bullseye bullet_points"></i>&nbsp;&nbsp;
                        <span>{element.key_points[4]}</span>
                     </li>
                     <li>
              
                        <i className="fas fa-bullseye bullet_points"></i>&nbsp;&nbsp;
                        <span>{element.key_points[5]}</span>
                     </li>
                  </div>
               </div>
               <br></br>
               <CustomButton text="EXPLORE NOW" style={{ marginTop: "30px" }} />
            </div>
         </div>
      </>
   );
}
