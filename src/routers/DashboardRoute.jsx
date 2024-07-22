import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { SeriesPage } from "../pages/SeriesPage";
import { CapitulosPage } from "../pages/CapitulosPage";
import { HomePage } from "../pages/HomePage";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { ManwhaPage } from "../pages/ManwhaPage";

export const DashboardRoute = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="mx-auto pb-4 w-[90%]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/capitulos" element={<CapitulosPage />} />
          <Route path="/series/:serieSlug" element={<ManwhaPage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
