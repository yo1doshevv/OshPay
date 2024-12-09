import React from "react";
import { Routes, Route } from "react-router-dom";
import BoshSahifa from "../Page/BoshSahifa";
import Menu from "../Page/Menu";
import Aloqa from "../Page/Aloqa";
import BizHaqimizda from "../Page/BizHaqimizda";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BoshSahifa/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/aloqa" element={<Aloqa/>} />
        <Route path="/biz" element={<BizHaqimizda/>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
