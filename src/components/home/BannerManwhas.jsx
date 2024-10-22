import React from "react";
import { Link } from "react-router-dom";

export const BannerManwhas = ({ data }) => {
  const manwhuaFilteredRecommended = data
    .filter((manwha) => manwha.banner)
    .slice(0, 3);
  return (
    <div className="gap-3 grid grid-cols-2 grid-rows-2 mt-2 max-h-[41rem] md:max-h-96 overflow-hidden">
      {manwhuaFilteredRecommended.map((item, index) => (
        <Link
          key={item.title}
          to={`/series/${item.slug}`}
          className={`relative rounded-md h-full ${
            index === 0
              ? "col-span-2 md:col-span-1 md:row-span-2 h-full lg:h-96"
              : ""
          }`}
        >
          <div className="relative bg-slate-950 hover:bg-slate-600 bg-gradient-to-b from-transparent to-sky-300 rounded-md w-full h-full transition-all object-cover">
            <img
              src={item.banner}
              alt=""
              className="opacity-70 w-full h-full object-cover"
            />
            <div className="bottom-0 left-0 absolute p-5 w-full">
              <h1 className="font-semibold text-slate-200">{item.title}</h1>
              <p className="line-clamp-2 text-slate-600 text-sm">
                {item.paragraph}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
