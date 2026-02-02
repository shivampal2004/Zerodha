import { StrictMode, React } from 'react';
import { createRoot, ReactDOM } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landingPage/home/HomePage.jsx';
import Signup from "./landingPage/signup/Signup.jsx"
import ProductPage from './landingPage/products/ProductPage.jsx';
import AboutPage from './landingPage/about/AboutPage.jsx';
import PricingPage from './landingPage/pricing/PrincingPage.jsx';
import SupportPage from './landingPage/support/SupportPage.jsx';
import Navbar from './landingPage/Navbar.jsx';
import Footer from './landingPage/Footer.jsx';
import NotFound from "./landingPage/NotFound.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/product' element={<ProductPage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
