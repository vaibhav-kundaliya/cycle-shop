import { React, useState, useEffect } from "react";
import HomePageOne from "../components/homePageComponents/HomePageOne";
import Card from "../components/cardListComponents/Card";
import Catalog from "../components/homePageComponents/Catalog";
import CardList from "../components/cardListComponents/CardList";
import AboutUs from "../components/homePageComponents/AboutUs";
import Events from "../components/homePageComponents/Events";
import FeaturedCycle from "../components/homePageComponents/FeaturedCycle";
import { Button } from "antd";
import css from "./design/Home.module.css";
import { useSelector } from "react-redux";
import getRequest from "../API/getRequest";

export default function Home() {
   const [new_arrivals_list, setNewArrivalList] = useState([]);
   const [accessories, setAccessories] = useState([]);
   
   const isAuthenticated = useSelector((state) => {
      return state.authReducer;
   });

   useEffect(() => {
      const fetchData = async () => {
         if (isAuthenticated) {
            let bicycle_list = await getRequest(process.env.REACT_APP_CONSUMER_URL + "productFilter?minPrice=0&maxPrice=100000&category=Bicycle");
            let accessory_list = await getRequest(process.env.REACT_APP_CONSUMER_URL + "productFilter?minPrice=0&maxPrice=100000&category=Accessory");
            bicycle_list = bicycle_list.data.data?.reverse()?.slice(0, 4);
            accessory_list = accessory_list.data.data?.reverse()?.slice(0, 4);
            setNewArrivalList(bicycle_list);
            setAccessories(accessory_list);
         }
      };
      fetchData();
   }, [isAuthenticated]);

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
               <div className={css.NewArraivalTitle + " group-3"}>New Arrivals</div>
               <div className={css.NewArraivalList}>
                  <CardList product_list={new_arrivals_list ? new_arrivals_list : []} />
               </div>
            </div>
         ) : (
            <></>
         )}
         <Catalog />
         <AboutUs />
         {isAuthenticated ? (
            <div className={css.NewArraivalElement}>
               <div className={css.NewArraivalTitle + " group-3"}>Explore Accesory</div>
               <div className={css.NewArraivalList}>
                  <CardList product_list={accessories ? accessories : []} />
                  <div className={css.view_all_button_center}>
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
