import React from "react";

export const CardPoster = ({ title, poster, status }) => {
  return (
    <div className="relative bg-slate-950 rounded-md w-full h-[440px] cursor-pointer overflow-hidden">
      <img
        src={poster}
        alt={title}
        className="opacity-40 hover:opacity-80 w-full h-full object-cover"
      />
      <div className="bottom-4 left-4 absolute flex flex-col text-white">
        <h1 className="font-semibold text-1xl">{title}</h1>
        <span className="bg-green-950/60 my-2 p-2 rounded w-max font-semibold capitalize">
          {status}
        </span>
      </div>
    </div>
  );
};
