import React from 'react'
import HomePageOne from "../components/homePageComponents/HomePageOne"
import CardList from "../components/cardListComponents/CardList"
import Catalog from "../components/homePageComponents/Catalog"
import AboutUs from "../components/homePageComponents/AboutUs"
import Events from "../components/homePageComponents/Events"
import Button from '../components/buttonComponents/Button'
import FeaturedCycle from "../components/homePageComponents/FeaturedCycle"
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

  return (
    <div>
      <div className="outermost">
            <div className="leftmost"></div>
            <div className="rightmost"></div>
         </div>
         <HomePageOne />
         <div>
            <div className="NewArraivalTitle group-3">
               <h3>New Arrivals</h3>
            </div>
            <div className="NewArraivalList">
               <CardList product_list={new_arrivals_list} width={300} />
            </div>
         </div>
         <Catalog />
         <AboutUs />
         <div className="NewArraivalTitle group-3">
            <h3>Explore Accesory</h3>
         </div>
         <div className="NewArraivalList">
            <CardList title="Explore Accessory" product_list={accessory} width={300} />
         </div>
         <div style={{ display: "flex", justifyContent: "center", marginTop: "-20px", marginBottom: "20px" }}>
            <Button text="View All" />
         </div>
         <Events />
         <FeaturedCycle />
    </div>
  )
}
