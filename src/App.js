import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import HomePageOne from "./components/HomePageOne";
import "./App.css";
import NewArrival from "./components/NewArrival";
import Catalog from "./components/Catalog";
import AboutUs from "./components/AboutUs";
import Button from "./components/Button";
import Events from "./components/Events";
import FeaturedCycle from "./components/FeaturedCycle";
import Footer from "./components/Footer";
import LeftDrover from "./components/LeftDrover";
import { useEffect, useState, useRef } from "react";

function App() {
   let NavbarColor = "none";
   let new_arrivals_list = [
      {
         id: 1,
         name: "Kryo X26 MTB – Model K",
         price: "$350.00",
         img: require("./components/imgs/bicycle-1.jpg"),
         rating: 4,
         description: "Product Description",
      },
      {
         id: 2,
         name: "Kryo X26 MTB – Model X",
         price: "$350.00",
         img: require("./components/imgs/bicycle-2.jpg"),
         rating: 1,
         description: "Product Description",
      },
      {
         id: 3,
         name: "Kryo X26 MTB – Model Y",
         price: "$350.00",
         img: require("./components/imgs/bicycle-3.jpg"),
         rating: 5,
         description: "Product Description",
      },
      {
         id: 4,
         name: "Kryo X26 MTB – Model Z",
         price: "$350.00",
         img: require("./components/imgs/bicycle-4.jpg"),
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
         img: require("./components/imgs/gloves-1.jpg"),
         rating: 4,
         description: "Product Description",
      },
      {
         id: 2,
         name: "Bicycle Gloves Gold",
         price: "$35.00-$50.00",
         pair: { L: "$35.00", M: "$40.00", XL: "$50.00" },
         img: require("./components/imgs/gloves-2.jpg"),
         rating: 1,
         description: "Product Description",
      },
      {
         id: 3,
         name: "Bicycle Gloves Pink",
         price: "$25.00-$32.00",
         pair: { L: "$25.00", M: "$28.00", XL: "$32.00" },
         img: require("./components/imgs/gloves-3.jpg"),
         rating: 5,
         description: "Product Description",
      },
      {
         id: 4,
         name: "Bicycle Gloves Red",
         price: "$45.00-$65.00",
         pair: { L: "$45.00", M: "$50.00", XL: "$60.00" },
         img: require("./components/imgs/gloves-4.jpg"),
         rating: 0,
         description: "Product Description",
      },
   ];

   const [isvisible, setisvisible] = useState("none");

   const open_close = () => {
      if (isvisible == "none") setisvisible("block");
      else setisvisible("none");
   };

   return (

      <div>
            <LeftDrover isvisible={isvisible} setisvisible={setisvisible} open_close={open_close} />

         <Navbar color={NavbarColor} open_close={open_close} />
         <div className="outermost">
            <div className="leftmost"></div>
            <div className="rightmost"></div>
         </div>
         <HomePageOne />
         <NewArrival title="New Arrivals" product_list={new_arrivals_list} />
         <Catalog />
         <AboutUs />

         <NewArrival title="Explore Accessory" product_list={accessory} />
         <div style={{ display: "flex", justifyContent: "center", marginTop: "-20px", marginBottom: "20px" }}>
            <Button text="View All" />
         </div>

         <Events />

         <FeaturedCycle />

         <Footer />
      </div>
   );
}

export default App;
