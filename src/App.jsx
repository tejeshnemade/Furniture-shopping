import React from "react";
import "./App.css";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Shop from "../Components/Shop";
import About from "../Components/About";
import Services from "../Components/Services";
import Blog from "../Components/Blog";
import Contect from "../Components/Contect";
import Footer from "../Components/Footer";
import Login from "../Components/Login";
import Cart from "../Components/Cart";
import Register from '../Components/RegisterForm';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Services />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contect" element={<Contect />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
