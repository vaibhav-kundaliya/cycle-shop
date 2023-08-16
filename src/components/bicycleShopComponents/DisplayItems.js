import { React, useState } from "react";
import css from "./design/DisplayItems.module.css";
import { Select, Input, Slider, List } from "antd";
import Card from "../cardListComponents/Card";
import CustomButton from "../buttonComponents/CustomButton";
import { useLocation } from "react-router-dom";
const { Search } = Input;

export default function DisplayItems() {
   const options = [
      { value: 0, label: "Default Sorting" },
      { value: 1, label: "Sort By Popularity" },
      { value: 2, label: "Sort By Average Rating" },
      { value: 3, label: "Sort By latest" },
      { value: 4, label: "Sort By Price: low to high" },
      { value: 5, label: "Sort By Price: hight to low" },
   ];

   const items = [
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

   const marks = {
      20: "$20",
      350: "$350",
   };

   const [range, setRange] = useState([20, 350]);

   const location = useLocation();

   const displayRange = (element) => {
      setRange([element[0], element[1]]);
   };

   const handleChange = (value) => {
      console.log(`Selected: ${value}`);
   };

   let path = location.pathname.trim().split("/");
   path.map((e, index) => {
      path[index] = e ? e[0].toUpperCase() + e.slice(1) : "";
   });
   path = path.join("/ ");
   return (
      <div className={css.itemsandfilters}>
         <div className={css.displayItems}>
            Home {path}
            <div className={css.title + " group-3"}>
               <h1>Bicycle</h1>
            </div>
            <div className={css.listitems}>
               <div className={css.resultCount}>
                  <p>Showing all 4 results</p>
               </div>
               <div className={css.sortingOptions}>
                  <Select
                     size="large"
                     defaultValue={0}
                     onChange={handleChange}
                     style={{
                        width: 200,
                        borderRadius: 0,
                        color: "red",
                     }}
                     options={options}
                  />
               </div>
            </div>
            <div className={css.cardlist}>
               <List
                  grid={{
                     gutter: 16,
                     xs: 1,
                     sm: 2,
                     md: 2,
                     lg: 3,
                     xl: 3,
                     xxl: 3,
                  }}
                  dataSource={items}
                  renderItem={(element) => (
                     <List.Item>
                        <Card element={element} width={"20px"} style={{ borderRadius: "0px" }} />
                     </List.Item>
                  )}
               />
            </div>
         </div>

         <div className={css.filters}>
            <div className={css.searchbar}>
               <div className="group-4">
                  <span>Search</span>
               </div>
               <Search placeholder="Search Products..." enterButton size="large" style={{ borderRadius: 0 }} />
            </div>

            <div className={css.filterbar}>
               <div className="group-4">
                  <span>Filter by price</span>
               </div>
               <Slider
                  range={{
                     draggableTrack: true,
                  }}
                  defaultValue={[20, 350]}
                  min={20}
                  max={350}
                  value={[range[0], range[1]]}
                  onChange={displayRange}
               />
               <div className={css.filterbaramount}>
                  <div>${range[0]}</div>
                  <div>${range[1]}</div>
               </div>
               <div className={css.filterbuttons}>
                  <div onClick={() => setRange([20, 350])}>
                     <CustomButton text="RESET" />
                  </div>
                  <CustomButton text="APPLY"></CustomButton>
               </div>
            </div>

            <div className={css.filtercatagory}>
               <div className="group-4">
                  <span>Filter by catagories</span>
               </div>
               <ul>
                  <li>
                     <span>Bicycle</span> (4)
                  </li>
                  <li>
                     <span>Accessory</span> (10)
                  </li>
               </ul>
            </div>

            <div className={css.resentlyviewedproducts}>
               <div className="group-4">
                  <span>Recently viewed products</span>
               </div>
               <div className={css.recently_item}>
                  <div>
                     <img src={items[0].img} alt={items[0].img} />
                  </div>
                  <div>
                     <div className="">{items[0].name}</div>
                     <div className="">{items[0].price}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
