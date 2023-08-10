import React from "react";
import "./design/Footer.css";
import logoimg from "../../assets/imgs/logo-1-80x48.png";
import { createFromIconfontCN, InstagramOutlined, FacebookOutlined, YoutubeOutlined, TwitterOutlined } from "@ant-design/icons";
import { Col, Divider, Row } from "antd";

import { Space } from "antd";

const IconFont = createFromIconfontCN({
   scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

export default function Footer() {
   return (
      <>
         <div className="footer">
            <Row gutter={[0, 10]}>
               <Col xs={24} sm={6}>
                  <img src={logoimg} height="90px" />
               </Col>
               <Col xs={24} sm={6}>
                  <h1 className="group-5">Usefull Links</h1>
                  <p className="links">Home</p>
                  <p className="links">Shop</p>
                  <p className="links">About Us</p>
                  <p className="links">Contact Us</p>
               </Col>
               <Col xs={24} sm={6}>
                  <h1 className="group-5">Our Collection</h1>
                  <p className="links">Mountain Bikes</p>
                  <p className="links">City Bikes</p>
                  <p className="links">Speciality Bikes</p>
                  <p className="links">Electric Bikes</p>
               </Col>
               <Col xs={24} sm={6}>
                  <h1 className="group-5">Account</h1>
                  <p className="links">Customer Login</p>
                  <p className="links">Dealer Login</p>
                  <p className="links">Address</p>
                  <p className="links">Payment Methods</p>
               </Col>
            </Row>
         </div>
         <hr />
         <div className="lower-footer">
            <div>Copyright © 2023 Cycle Shop</div>
            <div>
               <Space>
                  <FacebookOutlined style={{fontSize: 18}} />
                  <InstagramOutlined style={{fontSize: 18}}/>
                  <TwitterOutlined style={{fontSize: 18}}/>
                  <YoutubeOutlined style={{fontSize: 18}}/>
               </Space>
            </div>
         </div>
      </>
   );
}
