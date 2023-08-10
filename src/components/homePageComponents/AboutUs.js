import React from "react";
import { Col, Row } from "antd";
import ImageWithText from "./ImageWithText";
import img from "../../assets/imgs/bicycle-1.jpg";
import "./design/AboutUs.css"

export default function AboutUs() {
   return (
      <div className="outerMost">
         <div>
            <div className="group-3">
               <h3>Why Choose KRYO?</h3>
            </div>
         </div>
         <div className="imagesTable">
            <Row className="rowC" gutter={[20, 20]}>
               <Col className="column" xs={18} sm={10}>
                  <ImageWithText title="title" text="desc" height="100%"  img={img} />
               </Col>
               <Col className="column" xs={18} sm={10}>
                  <ImageWithText title="title" text="desc" height="100%"  img={img} />
               </Col>

               <Col className="column" xs={18}  sm={6}>
                  <ImageWithText title="title" text="desc" height="100%"  img={img} />
               </Col>
               <Col className="column" xs={18} sm={6}>
                  <ImageWithText title="title" text="desc" height="100%"  img={img} />
               </Col>
               <Col className="column" xs={18} sm={6}>
                  <ImageWithText title="title" text="desc" height="100%"  img={img} />
               </Col>
            </Row>
         </div>
      </div>
   );
}
