import React from "react";
import { Col, Row } from "antd";
import ImageWithText from "./ImageWithText";
import img from "../../assets/imgs/bicycle-1.jpg";
import "./design/AboutUs.css";

export default function AboutUs() {
   return (
      <div className="outerMost">
         <div>
            <div className="group-3">
               <h3>Why Choose KRYO?</h3>
            </div>
         </div>
         <div className="imagesTable">
            <div className="firstLine">
               <div>
                  <ImageWithText
                     title="Light weight"
                     text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem laudantium eos assumenda reiciendis hic officiis, accusamus fugit, quis odio "
                     img={img}
                  />
               </div>
               <div>
                  <ImageWithText
                     title="Lifetime Warrenty"
                     text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem laudantium eos assumenda reiciendis hic officiis, accusamus fugit, quis odio "
                     img={img}
                  />
               </div>
            </div>
            <div className="secondLine">
               <div>
                  <ImageWithText title="Biggest Service Network" img={img} />
               </div>
               <div>
                  <ImageWithText title="99% Assembled Delivery" img={img} />
               </div>
               <div>
                  <ImageWithText title="Free First Bike Service" img={img} />
               </div>
            </div>
         </div>
      </div>
   );
}
