import React from "react";
import css from "./design/Footer.module.css";
import logoimg from "../../assets/imgs/logo-1-80x48.png";
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined, TwitterOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

import { Space } from "antd";

export default function Footer() {
   return (
      <>
         <div className={css.footer}>
            <Row gutter={[0, 10]}>
               <Col xs={24} sm={6}>
                  <img src={logoimg} height="90px" />
               </Col>
               <Col xs={24} sm={6}>
                  <div className="group-5">Usefull Links</div>
                  <a href="http://localhost:3000/"><p className={css.links}>Home</p></a>
                  <a href="http://localhost:3000/store"><p className={css.links}>Shop</p></a>
                  <a href="http://localhost:3000/contact"><p className={css.links}>Contact Us</p></a>
                  <p className={css.links}>About Us</p>
                  
               </Col>
               <Col xs={24} sm={6}>
                  <div className="group-5">Our Collection</div>
                  <p className={css.links}>Mountain Bikes</p>
                  <p className={css.links}>City Bikes</p>
                  <p className={css.links}>Speciality Bikes</p>
                  <p className={css.links}>Electric Bikes</p>
               </Col>
               <Col xs={24} sm={6}>
                  <div className="group-5">Account</div>
                  <p className={css.links}>Customer Login</p>
                  <p className={css.links}>Dealer Login</p>
                  <p className={css.links}>Address</p>
                  <p className={css.links}>Payment Methods</p>
               </Col>
            </Row>
         </div>
         <hr />
         <div className={css.lower_footer}>
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
