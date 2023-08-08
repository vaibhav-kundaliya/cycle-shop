import React from "react";
import { CaretRightFilled } from "@ant-design/icons";
import "./static_css/Catagories.css";
import Button from "./Button";

export default function Catagories({element}) {
  
  const content_css = {
      backgroundImage: element.img,
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
  }
   return (
      <>
         <div key={element.id} style={content_css}>
         <div className="content" >
              <div className="group-4">Discover The Collection</div>
              <div className="group-2"><h3>{element.catagories}</h3></div>
              <div className="description">{element.description}</div>
              <div className="points">
                <div>
                  <li><CaretRightFilled />{element.key_points[0]}</li>
                  <li><CaretRightFilled />{element.key_points[1]}</li>
                  <li><CaretRightFilled />{element.key_points[2]}</li>
                </div>
                <div>
                  <li><CaretRightFilled />{element.key_points[3]}</li>
                  <li><CaretRightFilled />{element.key_points[4]}</li>
                  <li><CaretRightFilled />{element.key_points[5]}</li>
                </div>
              </div>
              <br></br>
              <Button text="EXPLORE NOW" style={{marginTop: "30px"}} />
            </div>
        </div>
      </>
   );
}
