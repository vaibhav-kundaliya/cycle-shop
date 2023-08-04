import React from "react";
import "./static_css/LeftDrover.css";
import { useEffect, useState, useRef } from "react";
import { CloseOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Row, Col, Divider, Button } from "antd";
import img from "./imgs/bicycle-1.jpg";

export default function LeftDrover({ isvisible, setisvisible, open_close }) {
   // const [isvisible, setisvisible] = useState("none");

   const bodyRef = useRef(document.querySelector("extra_container"));
   

   useEffect(() => {
      if (isvisible === "block") {
         console.log(bodyRef.current)
         bodyRef.current.style.overflow = "hidden";
      } else
      {
         bodyRef.current.style.cursor = "";
         bodyRef.current.style.overflow = "scroll";
      }
   }, [isvisible]);

   const cart_list = [
      {
         id: 1,
         name: "Kryo X26 MTB – Model K",
         img: img,
         price: "$350",
         quantity: "13",
      },
      {
         id: 2,
         name: "Kryo X26 MTB – Model K",
         img: img,
         price: "$350",
         quantity: "14",
      },
      {
         id: 4,
         name: "Kryo X26 MTB – Model K",
         img: img,
         price: "$350",
         quantity: "1",
      },
      {
         id: 5,
         name: "Kryo X26 MTB – Model K",
         img: img,
         price: "$350",
         quantity: "1",
      },
      {
         id: 6,
         name: "Kryo X26 MTB – Model K",
         img: img,
         price: "$350",
         quantity: "1",
      },
      {
         id: 7,
         name: "Kryo X26 MTB – Model K",
         img: img,
         price: "$350",
         quantity: "1",
      },
      {
         id: 8,
         name: "Kryo X26 MTB – Model K",
         img: img,
         price: "$350",
         quantity: "1",
      },
      {
         id: 9,
         name: "Kryo X26 MTB – Model K",
         img: img,
         price: "$350",
         quantity: "1",
      },
   ];

   const iter = cart_list.map((item) => {
      return (
         <div key={item.id}>
            <div className="card_item">
               <div className="card_img">
                  <img src={item.img} alt={item.img} />
               </div>
               <div className="card_details">
                  <div className="card_name">{item.name}</div>
                  <div className="card_price">
                     {item.quantity} X {item.price}
                  </div>
               </div>
               <div className="card_remove">
                  <CloseCircleOutlined />
               </div>
            </div>
            <Divider style={{ margin: 10 }} />
         </div>
      );
   });

   return (
      <>
         <div className="extra_container" style={{ display: isvisible }} onClick={open_close}>

         </div>
         <div className="l_drover" style={{ display: isvisible }}>
            <div className="closed_sign">
               <CloseOutlined style={{ fontSize: "24px", cursor: "pointer" }} onClick={open_close} />
            </div>
            <div className="cart_list">{iter}</div>
            <hr />
            <div className="subtotal">
               <div className="label">Subtotal:</div>
               <div className="price">$1,1500</div>
            </div>
            <hr />
            <Button className="cart_btn" type="primary" danger block>
               View Cart
            </Button>
            <br />
            <br />
            <Button className="cart_btn" type="primary" danger block>
               Checkout
            </Button>
         </div>
      </>
   );
}
