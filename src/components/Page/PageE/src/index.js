import "./styles.css";
import React, { Component, Fragment } from 'react';

import Home from "./Component/Home/Home";
import About from "./Component/FUP/FUP";
import Skills from "./Component/Skills/Time";
import Navbar from "./Component/Navbar/Navbar";
import Topnav from "./Component/Navbar/TopNavbar";

import Contact from "./Component/Contact/Contact";
import BottomNavbar from "./Component/Navbar/BottomNavbar";
import Footer1 from "./Component/foo";
import FUP from "./Component/FUP/FUP";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Time from "./Component/Skills/Time";

export default function PageETU() {
  return (
    <>
  
      {/* <Model /> */}
      {/* <Topnav /> */}
      <Home />
      <FUP />
      <Time />

      <Contact />
      <div className="navC">
        <Navbar />
      </div>
      <Footer1 />
      <div class="navbar">
        <BottomNavbar />
      </div>
    </>
  );
}
