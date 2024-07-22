import React from "react";
import { Card } from "../common/Card";

export const NuevosLanzamientos = ({ data }) => {
  return (
    <div className="mt-16 pb-16">
      <h1 className="font-bold text-2xl text-white">Nuevos Lanzamientos</h1>
      <p className="text-gray-400">
        Se han lanzado nuevos capitulos tanto para novelas como para comics.
      </p>
      <div className="gap-3 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 my-8 rounded-md">
        {data.map((manwha) => (
          <Card
            title={manwha.title}
            poster={manwha.poster}
            status={manwha.status}
          />
        ))}
      </div>
    </div>
  );
};
