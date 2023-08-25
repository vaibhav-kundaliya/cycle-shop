import { React, useState, useEffect } from "react";
import HomePageOne from "../components/homePageComponents/HomePageOne";
import Card from "../components/cardListComponents/Card";
import Catalog from "../components/homePageComponents/Catalog";
import AboutUs from "../components/homePageComponents/AboutUs";
import Events from "../components/homePageComponents/Events";
import FeaturedCycle from "../components/homePageComponents/FeaturedCycle";
import { Button, List } from "antd";
import css from "./design/Home.module.css";
import fetchProduct from "../API/fetchProduct";
export default function Home() {
   const [new_arrivals_list, setNewArrivalList] = useState([]);
   const [accessories, setAccessories] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         let bicycle_list = await fetchProduct("http://localhost:8001/productFilter?minPrice=0&maxPrice=100000&category=Bicycle");
         let accessory_list = await fetchProduct("http://localhost:8001/productFilter?minPrice=0&maxPrice=100000&category=Accessory");
         bicycle_list = bicycle_list?.reverse()?.slice(0, 4);
         accessory_list = accessory_list?.reverse()?.slice(0, 4);
         setNewArrivalList(bicycle_list);
         setAccessories(accessory_list);
      };
      fetchData();
   }, [1]);

   const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("user"))
   useEffect(()=>{
      setIsAuthenticated(sessionStorage.getItem("user"))
   }, [isAuthenticated])

   return (
      <div>
         <div className={css.outermost}>
            <div className={css.leftmost}>
               <HomePageOne />
            </div>
            <div className={css.rightmost}></div>
         </div>
         {isAuthenticated ? (
            <div className={css.NewArraivalElement}>
               <div className={css.NewArraivalTitle + " group-3"}>
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
                     dataSource={new_arrivals_list ? new_arrivals_list : []}
                     renderItem={(element) => (
                        <List.Item>
                           <Card element={element} width={"25px"} style={{ borderRadius: "0px" }} />
                        </List.Item>
                     )}
                  />
               </div>
            </div>
         ) : (
            <></>
         )}
         <Catalog />
         <AboutUs />
         {isAuthenticated ? (
            <div className={css.NewArraivalElement}>
               <div className={css.NewArraivalTitle + " group-3"}>
                  <>Explore Accesory</>
               </div>
               <div className={css.NewArraivalList}>
                  <List
                     grid={{
                        gutter: 16,
                        xs: 2,
                        sm: 4,
                        md: 4,
                        lg: 4,
                        xl: 4,
                        xxl: 4,
                     }}
                     dataSource={accessories ? accessories : []}
                     renderItem={(element) => (
                        <List.Item>
                           <Card element={element} width={"25px"} style={{ borderRadius: "0px" }} />
                        </List.Item>
                     )}
                  />
                  <div style={{ width:"fit-content", margin:"auto" }}>
                     <Button type="primary">VIEW ALL</Button>
                  </div>
               </div>
            </div>
         ) : (
            <></>
         )}
         <Events />
         <FeaturedCycle />
      </div>
   );
}
