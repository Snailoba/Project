import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Weather from "./pages/Weather";
import Combinations from "./pages/Combinations";
import Inventory from "./pages/Inventory";
import Preferences from "./pages/Preferences";
import Submit from "./pages/Submit";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpperBody from "./pages/UpperBody";
import LowerBody from "./pages/LowerBody";
import Shoes from "./pages/Shoes";
import Hats from "./pages/Hats";
import OuterLayer from "./pages/OuterLayer";
import Accessories from "./pages/Accessories";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/combinations" element={<Combinations />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/preference" element={<Preferences />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/details" element={<Details />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upper" element={<UpperBody />} />
        <Route path="/lower" element={<LowerBody />} />
        <Route path="/outer" element={<OuterLayer />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/hats" element={<Hats />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </>
  );
};

export default App;
