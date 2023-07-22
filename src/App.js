import './App.css';
import React from 'react';
import HeaderComponent from "./component/Header";

import { Outlet } from 'react-router-dom';
import FooterComponent from './component/Footer';

//import RestaurantCard from './component/RestaurantCard';







function App() {
  return (
    <>
    <HeaderComponent/>
    <Outlet/>
    <FooterComponent/>
      
    </>
  );
}
export default App;
