import React from "react";
import { ManwhaList } from "../components/common/ManwhaList";
import manwhas from "../data/manwhas.json";
import { usePageTitle } from "../hooks/usePageTitle";

export const SeriesPage = () => {
  usePageTitle("Archivo de la serie | Olympus Scanlation");
  return (
    <div className="mx-auto w-[100%]">
      <ManwhaList title="Recomendadas" filter="recomendados" data={manwhas} />
      <ManwhaList title="Series" filter="all" data={manwhas} />
    </div>
  );
};
