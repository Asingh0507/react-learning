
import {Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Product from "./pages/Product";
import MainNavigation from "./components/MainNavigation";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import React from "react";



function App() {
  return (
    <React.Fragment>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/products" element={<Products/>}> </Route>
        <Route path="/products/:id" element={<Product/>}> </Route>
        <Route path="*" element={<NotFound/>}> </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App;
