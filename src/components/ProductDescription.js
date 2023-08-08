import React from "react";
import "./static_css/ProductDescription.css";
import img from "./imgs/bicycle-1.jpg";
import search_img from "./imgs/search-icon.svg";
import { ShoppingFilled } from "@ant-design/icons";
import Button from "./Button";
import SubNavbar from "./SubNavbar";
import NewArrival from "./NewArrival";

export default function ProductDescription() {
   let accessory = [
      {
         id: 1,
         name: "Kryo X26 MTB – Model K",
         price: "$350.00",
         img: require("./imgs/bicycle-1.jpg"),
         rating: 4,
         description: "Product Description",
      },
      {
         id: 2,
         name: "Kryo X26 MTB – Model X",
         price: "$350.00",
         img: require("./imgs/bicycle-2.jpg"),
         rating: 1,
         description: "Product Description",
      },
      {
         id: 3,
         name: "Kryo X26 MTB – Model Y",
         price: "$350.00",
         img: require("./imgs/bicycle-3.jpg"),
         rating: 5,
         description: "Product Description",
      },
      {
         id: 4,
         name: "Kryo X26 MTB – Model Z",
         price: "$350.00",
         img: require("./imgs/bicycle-4.jpg"),
         rating: 0,
         description: "Product Description",
      },
   ];

   return (
      <>
         <div className="outer_product_desc">
            <div className="product_description">
               <div className="product_description_inner">
                  <div className="img_text">
                     <div className="product_description_img" style={{ backgroundImage: `url(${img})` }}>
                        <div className="product_desc_search">
                           <img src={search_img} alt="" width={26} height={26} />
                        </div>
                     </div>
                     <div className="product_description_text">
                        <div className="path">Home / Bicycle / Kryo X26 MTB – Model K</div>
                        <div className="catagory">
                           <h3>Bicycles</h3>
                        </div>
                        <div className="product_name">Kryo X26 MTB – Model K</div>
                        <div className="cost">
                           <div className="amount">$350.00</div> & Free Shipping
                        </div>
                        <div className="text_dis">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className="btns_add">
                           <div>
                              <input type="number" name="quantity" defaultValue={1} min={1} />
                           </div>
                           <div>
                              <Button text="ADD TO CART" />
                           </div>
                        </div>
                        <hr />
                        <span>
                           Category: <span className="catagory">Bicycles</span>
                        </span>
                     </div>
                  </div>
                  <br />
                  <br />
                  <SubNavbar></SubNavbar>
                  <div>
                     <NewArrival title="Related products" product_list={accessory} />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
