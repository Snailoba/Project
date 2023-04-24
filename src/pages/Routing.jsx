import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Calendar from "./Calendar";
import Weather from "./Weather";
import Combinations from "./Combinations";
import Inventory from "./Inventory";
import Preferences from "./Preferences";
import Submit from "./Submit";
import Details from "./Details";

function Routing() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/combinations" element={<Combinations />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/submit" element={<Submit />} />
      <Route path="/details" element={<Details />} />
    </Router>
  );
}

export default Routing;
