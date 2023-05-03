import React, { useState } from "react";
import { Box } from "@mui/material";
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
import "./App.css";

const App = () => {
  const [step, setStep] = useState(0);
  return (
    <>
      {/*<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/combinations" element={<Combinations />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/details" element={<Details />} />
      </Routes> */}
      <Login />
    </>
  );
};

export default App;
