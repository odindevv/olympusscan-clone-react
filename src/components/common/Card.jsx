import React from "react";

export const Card = ({ title, poster, status }) => {
  return (
    <div className="relative bg-slate-950 rounded-md w-full h-[440px] overflow-hidden">
      <img src={poster} alt={title} className="w-full h-full object-cover" />
      <div className="bottom-4 left-4 absolute text-white">
        <h1 className="font-semibold text-lg">{title}</h1>
        <span className="inline-block bg-slate-800 p-2 rounded">{status}</span>
      </div>
    </div>
  );
};
