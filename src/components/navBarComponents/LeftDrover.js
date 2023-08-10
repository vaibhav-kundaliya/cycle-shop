import React from "react";
import "./design/LeftDrover.css";
import { useEffect, useRef } from "react";
import { CloseOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Divider, Button } from "antd";
import img from "../../assets/imgs/bicycle-1.jpg";

export default function LeftDrover({ isvisible, setisvisible, open_close }) {
   // const [isvisible, setisvisible] = useState("none");

   const bodyRef = useRef(document.querySelector("body"));
   const extraRef = useRef(null)
   const cart_list_ = useRef(null)
   useEffect(() => {
      if (isvisible === "block") {
         bodyRef.current.style.overflow = "hidden";
         extraRef.current.style.display = "block";
         cart_list_.current.style.right = "0"
      } else
      {
         extraRef.current.style.display = "none";
         cart_list_.current.style.right = "-2000px"
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
      }
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
         <div className="extra_container" ref={extraRef} onClick={open_close}>

         </div>
         <div className="l_drover" ref={cart_list_}>
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
