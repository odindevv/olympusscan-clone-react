import React from "react";
import { CardListCapitulos } from "../common/CardListCapitulos";
import { Link } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
export const CardCapitulos = ({ poster, title, slug, status }) => {
  return (
    <div className="flex flex-col bg-slate-700/40 p-4 rounded overflow-hidden">
      <div className="flex flex-1 space-x-4 md:space-y-2">
        <div className="w-16 h-20 object-cover roundend-md">
          <img
            src={poster}
            alt=""
            className="flex-1 rounded-md w-full h-full"
          />
        </div>
        <div className="flex flex-col flex-1 space-y-2">
          <Link to={`/series/${slug}`}>
            <h3 className="font-bold text-lg text-white">{title}</h3>
          </Link>
          <span className="bg-green-950/30 p-2 rounded w-max font-semibold text-white capitalize">
            {status}
          </span>
        </div>
      </div>
      <CardListCapitulos />
      <CardListCapitulos />
    </div>
  );
};
