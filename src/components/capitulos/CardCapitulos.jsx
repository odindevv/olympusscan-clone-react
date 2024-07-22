import React from "react";

export const CardCapitulos = ({ poster, title, status }) => {
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
          <h3 className="font-bold text-lg text-white">{title}</h3>
          <span className="bg-green-950/30 p-2 rounded w-max font-semibold text-white capitalize">
            {status}
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-2 pt-4">
        <a
          href="#"
          className="flex justify-between items-center border-2 border-slate-500/40 hover:bg-slate-500/80 p-1 rounded-full transition-all"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 ml-2 rounded-full w-3 h-3"></div>
            <h2 className="text-white">Capitulo 111</h2>
          </div>
          <p className="px-1 font-semibold text-gray-400 text-sm">
            Hace 7 horas
          </p>
        </a>
        <a
          href="#"
          className="flex justify-between items-center border-2 border-slate-500/40 hover:bg-slate-500/80 p-1 rounded-full transition-all"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 ml-2 rounded-full w-3 h-3"></div>
            <h2 className="text-white">Capitulo 111</h2>
          </div>
          <p className="px-1 font-semibold text-gray-400 text-sm">
            Hace 7 horas
          </p>
        </a>
      </div>
    </div>
  );
};
