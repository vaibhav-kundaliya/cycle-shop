import React from "react";
import HomePageOne from "../components/homePageComponents/HomePageOne";
import Card from "../components/cardListComponents/Card";
import Catalog from "../components/homePageComponents/Catalog";
import AboutUs from "../components/homePageComponents/AboutUs";
import Events from "../components/homePageComponents/Events";
import CustomButton from "../components/buttonComponents/CustomButton";
import FeaturedCycle from "../components/homePageComponents/FeaturedCycle";
import { useLocation } from "react-router-dom";
import { List } from "antd";
import css from "./design/Home.module.css";

export default function Home() {
   let new_arrivals_list = [
      {
         id: 1,
         name: "Kryo X26 MTB – Model K",
         price: "$350.00",
         img: require("../assets/imgs/bicycle-1.jpg"),
         rating: 4,
         description: "Product Description",
      },
      {
         id: 2,
         name: "Kryo X26 MTB – Model X",
         price: "$350.00",
         img: require("../assets/imgs/bicycle-2.jpg"),
         rating: 1,
         description: "Product Description",
      },
      {
         id: 3,
         name: "Kryo X26 MTB – Model Y",
         price: "$350.00",
         img: require("../assets/imgs/bicycle-3.jpg"),
         rating: 5,
         description: "Product Description",
      },
      {
         id: 4,
         name: "Kryo X26 MTB – Model Z",
         price: "$350.00",
         img: require("../assets/imgs/bicycle-4.jpg"),
         rating: 0,
         description: "Product Description",
      },
   ];

   let accessory = [
      {
         id: 1,
         name: "Bicycle Gloves Blue",
         price: "$27.00-$35.00",
         pair: { L: "$27.00", M: "$30.00", XL: "$35.00" },
         img: require("../assets/imgs/gloves-1.jpg"),
         rating: 4,
         description: "Product Description",
      },
      {
         id: 2,
         name: "Bicycle Gloves Gold",
         price: "$35.00-$50.00",
         pair: { L: "$35.00", M: "$40.00", XL: "$50.00" },
         img: require("../assets/imgs/gloves-2.jpg"),
         rating: 1,
         description: "Product Description",
      },
      {
         id: 3,
         name: "Bicycle Gloves Pink",
         price: "$25.00-$32.00",
         pair: { L: "$25.00", M: "$28.00", XL: "$32.00" },
         img: require("../assets/imgs/gloves-3.jpg"),
         rating: 5,
         description: "Product Description",
      },
      {
         id: 4,
         name: "Bicycle Gloves Red",
         price: "$45.00-$65.00",
         pair: { L: "$45.00", M: "$50.00", XL: "$60.00" },
         img: require("../assets/imgs/gloves-4.jpg"),
         rating: 0,
         description: "Product Description",
      },
   ];

   const location = useLocation();

   return (
      <div>
         <div className={css.outermost}>
            <div className={css.leftmost}></div>
            <div className={css.rightmost}></div>
         </div>
         <HomePageOne />
         <div>
            <div className={css.NewArraivalTitle+" group-3"}>
               <>New Arrivals</>
            </div>
            <div className={css.NewArraivalList}>
               <List
                  grid={{
                     gutter: 16,
                     xs: 1,
                     sm: 2,
                     md: 4,
                     lg: 4,
                     xl: 4,
                     xxl: 4,
                  }}
                  dataSource={new_arrivals_list}
                  renderItem={(element) => (
                     <List.Item>
                        <Card element={element} width={"25px"} style={{ borderRadius: "0px" }} />
                     </List.Item>
                  )}
               />
            </div>
         </div>
         <Catalog />
         <AboutUs />
         <div>
            <div className={css.NewArraivalTitle+" group-3"}>
               <>Explore Accesory</>
            </div>
            <div className={css.NewArraivalList}>
               <List
                  grid={{
                     gutter: 16,
                     xs: 1,
                     sm: 2,
                     md: 4,
                     lg: 4,
                     xl: 4,
                     xxl: 4,
                  }}
                  dataSource={accessory}
                  renderItem={(element) => (
                     <List.Item>
                        <Card element={element} width={"25px"} style={{ borderRadius: "0px" }} />
                     </List.Item>
                  )}
               />
               </div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
               <CustomButton text="View All" />
            </div>
         </div>
         <Events />
         <FeaturedCycle />
      </div>
   );
}
