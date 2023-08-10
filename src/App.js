import logo from "./logo.svg";
import Navbar from "./components/navBarComponents/Navbar";
import LeftDrover from "./components/navBarComponents/LeftDrover";
import BicyclesShop from "./pages/BicyclesShop";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";

// import HomePageOne from "./components/HomePageOne";
import "./App.css";
// import NewArrival from "./components/NewArrival";
// import Catalog from "./components/Catalog";
// import AboutUs from "./components/homePageComponents/AboutUs";
// import Button from "./components/buttonComponents/Button";
// import Events from "./components/Events";
// import FeaturedCycle from "./components/FeaturedCycle";
import Footer from "./components/footerComponents/Footer";
// import LeftDrover from "./components/LeftDrover";
import { useEffect, useState, useRef } from "react";
// import ProductDescription from "./components/productDetailsComponents/ProductDescription";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  
   // let accessory = [
   //    {
   //       id: 1,
   //       name: "Bicycle Gloves Blue",
   //       price: "$27.00-$35.00",
   //       pair: { L: "$27.00", M: "$30.00", XL: "$35.00" },
   //       img: require("./components/imgs/gloves-1.jpg"),
   //       rating: 4,
   //       description: "Product Description",
   //    },
   //    {
   //       id: 2,
   //       name: "Bicycle Gloves Gold",
   //       price: "$35.00-$50.00",
   //       pair: { L: "$35.00", M: "$40.00", XL: "$50.00" },
   //       img: require("./components/imgs/gloves-2.jpg"),
   //       rating: 1,
   //       description: "Product Description",
   //    },
   //    {
   //       id: 3,
   //       name: "Bicycle Gloves Pink",
   //       price: "$25.00-$32.00",
   //       pair: { L: "$25.00", M: "$28.00", XL: "$32.00" },
   //       img: require("./components/imgs/gloves-3.jpg"),
   //       rating: 5,
   //       description: "Product Description",
   //    },
   //    {
   //       id: 4,
   //       name: "Bicycle Gloves Red",
   //       price: "$45.00-$65.00",
   //       pair: { L: "$45.00", M: "$50.00", XL: "$60.00" },
   //       img: require("./components/imgs/gloves-4.jpg"),
   //       rating: 0,
   //       description: "Product Description",
   //    },
   // ];

   const [isvisible, setisvisible] = useState("none");

   const open_close = () => {
      if (isvisible == "none") setisvisible("block");
      else setisvisible("none");
   };

   return (
      <div>
         {/*
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

         <ProductDescription />

         <Footer /> */}
         <Router>
            <LeftDrover isvisible={isvisible} setisvisible={setisvisible} open_close={open_close} />
            <Navbar open_close={open_close} />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/contact" element={<ContactUs />} />
               <Route path="/bicycle" element={<BicyclesShop />} />
               <Route path="/product-details" element={<ProductDetails />} />
            </Routes>
         </Router>
         <Footer />
      </div>
   );
}

export default App;
