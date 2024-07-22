import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Series } from "../pages/Series";
import { Capitulos } from "../pages/Capitulos";
import { Home } from "../pages/Home";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";

export const DashboardRoute = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="mx-auto pb-4 w-[90%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/capitulos" element={<Capitulos />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
