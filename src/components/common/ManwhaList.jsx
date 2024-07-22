import React, { useEffect, useReducer } from "react";
import { Card } from "./Card";
import manwhasJSON from "../../data/manwhas.json";
import { manwhasReducer } from "../../reducers/manwhasReducer";

export const ManwhaList = ({ title, filter, data }) => {
  const [manwhas, dispatch] = useReducer(manwhasReducer, manwhasJSON);

  useEffect(() => {
    dispatch({ type: filter.toLowerCase() });
  }, [filter]);

  return (
    <div className="mt-16">
      <h1 className="font-semibold text-2xl text-white">{title}</h1>
      {filter === "all" ? (
        <p className="text-gray-400 text-lg">
          Mostrando <span className="text-sky-500">{manwhas.length - 1}</span>{" "}
          series de comic.
        </p>
      ) : (
        <p className="text-gray-400">
          Las series mas <span className="text-sky-500">{title}</span> de la
          actualidad.
        </p>
      )}

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
