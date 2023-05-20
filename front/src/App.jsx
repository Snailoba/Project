import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Trio/Home";
import Events from "./pages/Trio/Events";
import Weather from "./pages/Trio/Weather";
import Combinations from "./pages/Outfits/Combinations";
import Inventory from "./pages/Outfits/Inventory";
import Preferences from "./pages/Outfits/Preferences";
import Submit from "./pages/Outfits/Submit";
import Details from "./pages/Outfits/Details";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import UpperBody from "./pages/Categories/UpperBody";
import LowerBody from "./pages/Categories/LowerBody";
import Shoes from "./pages/Categories/Shoes";
import Hats from "./pages/Categories/Hats";
import OuterLayer from "./pages/Categories/OuterLayer";
import Accessories from "./pages/Categories/Accessories";
import Genesis from "./pages/Authentication/Genesis";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Genesis />} />
        <Route path="/events" element={<Events />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/combinations" element={<Combinations />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/preference" element={<Preferences />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/details" element={<Details />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
