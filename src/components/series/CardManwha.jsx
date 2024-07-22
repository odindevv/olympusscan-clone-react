import React from "react";
import { CardCapitulos } from "../capitulos/CardCapitulos";
import { CardListCapitulos } from "../common/CardListCapitulos";
import { usePageTitle } from "../../hooks/usePageTitle";

export const CardManwha = ({ title, poster, views, likes }) => {
  usePageTitle(` ${title} | Olympus Scanlation`);
  return (
    <div className="flex md:flex-row flex-col md:space-x-8 mt-8">
      <div className="flex flex-col items-center w-full md:max-w-[380px]">
        <div className="flex flex-col justify-center items-center bg-slate-900/60 shadow p-4 rounded-md">
          <div className="w-64 h-96">
            <img
              src={`/` + poster}
              alt={title}
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <h1 className="mt-2 font-bold text-center text-lg text-white">
            {title}
          </h1>
          <div className="mt-1 text-white">
            <span className="font-bold text-md text-sky-500">{views}</span>{" "}
            vistas{" "}
            <span className="font-bold text-md text-red-500">{likes}</span> me
            gusta
          </div>
        </div>
        <div className="flex flex-col bg-slate-900/70 shadow item-center mt-4 p-8 rounded-md w-full">
          <h3 className="font-semibold text-md text-white">Tecno</h3>
          <p className="text-sm text-yellow-500">Responsable Actual</p>
        </div>
      </div>
      <div className="flex flex-col flex-grow space-y-2 bg-slate-900/60 shadow mt-4 md:mt-0 p-4 rounded-md w-full">
        <div className="flex justify-center md:justify-normal space-x-3">
          <button className="btn-active">Capitulos</button>
          <button className="btn-noactive">Sinopsis</button>
          <button className="btn-noactive">Comentarios</button>
        </div>
        <h1 className="ml-2 pt-12 font-bold text-lg text-white">
          49 capitulos en total
        </h1>
        <div className="grid grid-cols-2">
          <CardListCapitulos />
          <CardListCapitulos />
          <CardListCapitulos />
          <CardListCapitulos />
          <CardListCapitulos />
        </div>
      </div>
    </div>
  );
};
