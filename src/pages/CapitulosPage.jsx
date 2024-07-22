import React from "react";
import { usePageTitle } from "../hooks/usePageTitle";

export const CapitulosPage = () => {
  usePageTitle("Ultimos capitulos | Olympus Scanlation");
  return (
    <>
      <h1 className="text-sky-500">Capitulos</h1>
    </>
  );
};
