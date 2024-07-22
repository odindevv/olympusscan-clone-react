import React from "react";

export const CardListCapitulos = () => {
  return (
    <div className="flex flex-col space-y-2 ml-2 pt-4">
      <a
        href="#"
        className="flex justify-between items-center border-2 border-slate-500/40 hover:bg-slate-500/80 p-1 rounded-full transition-all"
      >
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-400 ml-2 rounded-full w-3 h-3"></div>
          <h2 className="text-white">Capitulo 111</h2>
        </div>
        <p className="px-1 font-semibold text-gray-400 text-sm">Hace 7 horas</p>
      </a>
    </div>
  );
};
