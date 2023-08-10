import { React, useState, useRef } from "react";
import "./design/ProductDescription.css";
import img from "../../assets/imgs/bicycle-1.jpg";
import search_img from "../../assets/imgs/search-icon.svg";
import { ShoppingFilled } from "@ant-design/icons";
import Buttons from "../buttonComponents/Button";
import SubNavbar from "./SubNavbar";
import CardList from "../cardListComponents/CardList";
import PriceRange from "./PriceRange";
import { Button } from "antd";
import "./design/PriceRange.css";

export default function ProductDescription() {
   let accessory = [
      {
         id: 1,
         name: "Kryo X26 MTB – Model K",
         price: "$350.00",
         img: require("../../assets/imgs/bicycle-1.jpg"),
         rating: 4,
         description: "Product Description",
      },
      {
         id: 2,
         name: "Kryo X26 MTB – Model X",
         price: "$350.00",
         img: require("../../assets/imgs/bicycle-2.jpg"),
         rating: 1,
         description: "Product Description",
      },
      {
         id: 3,
         name: "Kryo X26 MTB – Model Y",
         price: "$350.00",
         img: require("../../assets/imgs/bicycle-3.jpg"),
         rating: 5,
         description: "Product Description",
      },
      {
         id: 4,
         name: "Kryo X26 MTB – Model Z",
         price: "$350.00",
         img: require("../../assets/imgs/bicycle-4.jpg"),
         rating: 0,
         description: "Product Description",
      },
   ];

   const product = {
      id: 1,
      name: "Bicycle Gloves Blue",
      price: "$27.00-$35.00",
      pair: { L: "$27.00", M: "$30.00", XL: "$35.00" },
      img: require("../../assets/imgs/gloves-1.jpg"),
      rating: 4,
      description: "Product Description",
      catagory: "Accessories",
   };

   const [price, setPrice] = useState(product.price);
   const [memory, setMemory] = useState(null);
   const [disabled, setDisability] = useState(true);

   const div_show_hide = useRef(null);
   const clearButton = useRef(null);

   const Showprice = (element) => {
      if (memory != element) {
         setPrice(product.pair[element]);
         setDisability(false);
         div_show_hide.current.style.maxHeight = "60px";
         clearButton.current.style.display = "block";
         setMemory(element);
      } else {
         clearButton.current.style.display = "none";
         div_show_hide.current.style.maxHeight = "0px";
         setDisability(true);
         setMemory(null);
      }
   };

   let iter;
   if (product.pair) {
      iter = Object.keys(product.pair).map((element) => {
         return (
            <div key={element} style={{ display: "inline", marginRight: "5px" }}>
               <Button className="size" onClick={() => Showprice(element)} style={{ borderRadius: 0 }}>
                  {element}
               </Button>
            </div>
         );
      });
   }
   return (
      <>
         <div className="outer_product_desc">
            <div className="product_description">
               <div className="product_description_inner">
                  <div className="img_text">
                     <div className="product_description_img" style={{ backgroundImage: `url(${product.img})` }}>
                        <div className="product_desc_search">
                           <img src={search_img} alt="" width={26} height={26} />
                        </div>
                     </div>
                     <div className="product_description_text">
                        <div className="path">
                           Home / {product.catagory} / {product.name}
                        </div>
                        <div className="catagory">
                           <h3>Bicycles</h3>
                        </div>
                        <div className="product_name">{product.name}</div>
                        <div className="cost">
                           <div className="amount">{product.price}</div> & Free Shipping
                        </div>
                        <div className="text_dis">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>

                        <div className="productSize">
                           <div>
                              <div>{iter ? iter : <div></div>}</div>
                           </div>
                           <div
                              className="clearspan"
                              onClick={() => {
                                 clearButton.current.style.display = "none";
                                 div_show_hide.current.style.maxHeight = "0px";
                                 setDisability(true);
                                 setMemory(null);
                              }}
                              ref={clearButton}
                           >
                              Clear
                           </div>
                           <hr />
                           <div className="cost_hidden" ref={div_show_hide}>
                              <div className="amount">{price}</div>
                           </div>
                        </div>

                        <div className="btns_add">
                           <div>
                              <input type="number" name="quantity" defaultValue={1} min={1} />
                           </div>
                           <div>
                              <Buttons disabled={disabled} text="ADD TO CART" />
                           </div>
                        </div>
                        <hr />
                        <span>
                           Category: <span className="catagory">{product.catagory}</span>
                        </span>
                     </div>
                  </div>
                  <br />
                  <br />
                  <SubNavbar></SubNavbar>
                  <div>
                     <div className="group-3">Related Products</div>
                     <CardList title="Related products" product_list={accessory} width={200} />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
