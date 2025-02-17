import React from "react";
import { BannerManwhas } from "../components/home/BannerManwhas";
import { ManwhaList } from "../components/common/ManwhaList";
import { usePageTitle } from "../hooks/usePageTitle";
import manwhas from "../data/manwhas.json";

export const HomePage = () => {
  usePageTitle("Olympus Scanlation");

  return (
    <div className="mx-auto w-[100%]">
      <BannerManwhas data={manwhas} />
      <ManwhaList title="Populares" filter="popular" data={manwhas} />
      <ManwhaList title="Nuevos Lanzamientos" filter="nuevos" data={manwhas} />
    </div>
  );
};
