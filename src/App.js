import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/Navbar';
import TopHeader from './Components/Navbar/topHeader';
import HomeBanner from './Components/Banner/HomeBanner';
import Shop from './Components/Shop';
import NewLetter from './Components/Banner/Newletters';
import Footer from './Components/Footer';
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from './Pages/home';
import ShopPage from './Pages/Products';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Promo from './Pages/Promo';



function App() {

  useEffect(() => {
    fetch('https://ipapi.co/json/')
    .then( res => res.json())
    .then(response => {
      console.log(response)
     localStorage.setItem('CountryCode', response.country_code_iso3);
     localStorage.setItem('Currency',"");
   })
   .catch((data, status) => {
     console.log('Request failed:', data);
   });
  },[])
  return (<div className='bgLightBlue'>
    <BrowserRouter>
      <TopHeader/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/promo" element={<Promo/>}></Route>
      </Routes>
      <Footer /> 
    </BrowserRouter>
  </div>
   
  );
}

export default App;
