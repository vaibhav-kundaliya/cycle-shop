import React from "react";
import "./design/Navbar.css";
import logoimg from "../../assets/imgs/logo-1-80x48.png";
import { Badge } from "antd";
import { ShoppingFilled, MenuOutlined } from "@ant-design/icons";
import NavigationList from "./NavigationList";
import { useLocation } from "react-router-dom";

function Navbar(props) {
   
   let items_count = 10;
   let total_money = 0.0;

   const location = useLocation();
   const style = location.pathname==="/"?{backgroundColor:"transparent"}:{}

   function display_hide_list() {
      let dropdownlist = document.getElementById("dropdown_list");
      if (dropdownlist.style.display === "block") {
         dropdownlist.style.display = "none";
      } else {
         dropdownlist.style.display = "block";
      }
   }

   return (
      <>
         <div className="Navbar" style={style}>
            <div className="logo">
               <img src={logoimg} />
            </div>

            <div className="navigation">
               <NavigationList showModal={props.showModal} />
            </div>

            <div className="cart" id="totalAmount">
               ${total_money}
               <div>
                  <ShoppingFilled onClick={props.open_close} className="cart_logo" style={{ fontSize: "20px", paddingLeft: "8px", marginRight: "-5px", cursor:"pointer" }} />
                  <Badge count={items_count} size="small" style={{ top: "-10px" }} />
               </div>
               <div className="hide_dropdown_button" onClick={display_hide_list}>
                  <MenuOutlined style={{ fontSize:"24px", display: "block" }} />
               </div>
            </div>
         </div>

         <div id="dropdown_list">
            <NavigationList showModal={props.showModal} />
         </div>
      </>
   );
}

export default Navbar;
