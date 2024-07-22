import React, { useEffect, useReducer } from "react";
import { CardPoster } from "./CardPoster";
import manwhasJSON from "../../data/manwhas.json";
import { manwhasReducer } from "../../reducers/manwhasReducer";
import { useLocation } from "react-router-dom";
export const ManwhaList = ({ title, filter, path, data }) => {
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
          <CardPoster
            key={manwha.title}
            title={manwha.title}
            poster={manwha.poster}
            status={manwha.status}
            slug={manwha.slug}
            path={path}
          />
        ))}
      </div>
    </div>
  );
};
