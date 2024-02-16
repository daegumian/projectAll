import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";
import Settings from "./components/Settings";
import Chart from "./components/Chart";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chart' element={<Chart />} />
      <Route path='/order' element={<Order />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  );
};

export default App;
