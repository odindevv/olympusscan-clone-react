import React from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { CardCapitulos } from "../components/capitulos/CardCapitulos";
import manwhas from "../data/manwhas.json";

export const CapitulosPage = () => {
  usePageTitle("Ultimos capitulos | Olympus Scanlation");
  return (
    <div className="mt-16">
      <h1 className="font-bold text-2xl text-white">Ultimos capitulos</h1>
      <p className="font-semibold text-gray-400">
        Actualmente se muestra la pagina <span className="text-sky-500">1</span>
      </p>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 my-8">
        {manwhas.map((manwha) => (
          <CardCapitulos
            key={manwha.title}
            poster={manwha.poster}
            title={manwha.title}
            status={manwha.status}
            slug={manwha.slug}
          />
        ))}
      </div>
      <h2 className="text-center text-gray-400 text-lg">
        Mostrando <span className="font-bold text-sky-500">1</span> a{" "}
        <span className="font-bold text-sky-500">15</span> de{" "}
        <span className="font-bold text-sky-500">891</span> series
      </h2>
    </div>
  );
};
