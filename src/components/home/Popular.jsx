import React from "react";
import { Card } from "../common/Card";

export const Popular = ({ data }) => {
  const manwhas = data.sort((a, b) => b.views - a.views).slice(0, 4);
  return (
    <div className="mt-16">
      <h1 className="font-semibold text-2xl text-white">Popular Del Dia</h1>
      <p className="text-gray-400">
        Las series mas populares de la actualidad.
      </p>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-4 mt-10">
        {manwhas.map((manwha) => (
          <Card
            key={manwha.title}
            title={manwha.title}
            poster={manwha.poster}
            status={manwha.status}
          />
        ))}
      </div>
    </div>
  );
};
