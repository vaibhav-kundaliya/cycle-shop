import logo from './logo.svg';

import './App.css';
import Cycle1 from "./1st_back_img.jpg";
import Navbar from './components/Navbar';
import HomePageOne from './components/HomePageOne';

function App() {
  let NavbarColor = "none"
  return (
    <div>
      <Navbar color ={NavbarColor} />  
      <div style={{display:"flex", backgroundImage:`url(${Cycle1})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", position:"absolute", top:0, height:"inherit", width:"100%", zIndex:"-1"}}>
        <div  style={{width:"50%", backgroundColor:"rgba(0, 0, 0, 0.50)"}}>
          <HomePageOne />
        </div>
        <div style={{width:"50%", backgroundColor:"rgba(245, 0, 0, 0.50)", zIndex:-1}}></div>
      </div>
    </div>
  );
}

export default App;
