import logo from "./logo.svg";
import Cycle1 from "./1st_back_img.jpg";
import Navbar from "./components/Navbar";
import HomePageOne from "./components/HomePageOne";
import "./App.css";
import NewArrival from "./components/NewArrival";

function App() {
   let NavbarColor = "none";
   return (
      <div>
         <div className="outermost">
            <div className="leftmost"></div>
            <div className="rightmost"></div>
         </div>
         <Navbar color={NavbarColor} />
         <HomePageOne />
         <NewArrival/>
      </div>
   );
}

export default App;
