import logo from "./logo.svg";
import Navbar from "./components/navBarComponents/Navbar";
import LeftDrover from "./components/navBarComponents/LeftDrover";
import BicyclesShop from "./pages/BicyclesShop";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";
import Footer from "./components/footerComponents/Footer";
import ThemePallate from "./components/themePallate/ThemePallate";
import CartPage from "./pages/CartPage.js";
import { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation, Routes, Route } from "react-router-dom";
import { ConfigProvider, Switch } from "antd";
import Authentication from "./pages/Authentication";
import { AppProvider } from "./context";
import { Provider } from "react-redux";
import {store} from "./store";
import PrivateRoute from "./components/authenticationComponents/PrivateRoute";
import ErrorPage from "./pages/ErrorPage";

function App() {
   const [isvisible, setisvisible] = useState("none");

   const open_close = () => {
      if (isvisible == "none") setisvisible("block");
      else setisvisible("none");
   };
   const [isModalOpen, setIsModalOpen] = useState(false);

   const showModal = () => {
      setIsModalOpen(true);
   };

   const [color, setColor] = useState(
      sessionStorage.getItem("website_color") ? sessionStorage.getItem("website_color") : getComputedStyle(document.documentElement).getPropertyValue("--website-color")
   );

   const [font, setFont] = useState(sessionStorage.getItem("website_font") ? sessionStorage.getItem("website_font") : getComputedStyle(document.documentElement).getPropertyValue("--website-font"));

   useEffect(() => {
      sessionStorage.setItem("website_color", color);
      sessionStorage.setItem("website_font", font);
      document.documentElement.style.setProperty("--website-color", sessionStorage.getItem("website_color"));
      document.documentElement.style.setProperty("--website-font", sessionStorage.getItem("website_font"));
   });

   return (
      <div>
         <ConfigProvider
            theme={{
               token: {
                  colorPrimary: color,
               },
               components: {
                  Button: {
                     borderRadius: 0,
                     fontSize: 16,
                     controlHeight: 40,
                  },
                  Input: {
                     borderRadius: 0,
                  },
                  InputNumber: {
                     borderRadius: 0,
                  },
                  Select: {
                     borderRadius: 0,
                  },
                  Tabs: {
                     titleFontSize: 18,
                  },
               },
            }}
         >
            <AppProvider>
               <Provider store={store}>
                  <Router>
                     <ThemePallate setColor={setColor} setFont={setFont} />
                     <LeftDrover isvisible={isvisible} setisvisible={setisvisible} open_close={open_close} bg={"transparent"} />
                     <Navbar open_close={open_close} showModal={showModal} />
                     <Authentication isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} showModal={showModal} />
                     <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/contact" element={<ContactUs />} />
                        <Route element={<PrivateRoute />}>
                           <Route exact path="/product-details" element={<ProductDetails />} />
                           <Route exact path="/store" element={<BicyclesShop />} />
                           <Route exact path="/shopping-cart" element={<CartPage />} />
                        </Route>
                        <Route path="*" element={<ErrorPage status_code="404" />} />
                     </Routes>
                  </Router>
               </Provider>
               <Footer />
            </AppProvider>
         </ConfigProvider>
      </div>
   );
}

export default App;
