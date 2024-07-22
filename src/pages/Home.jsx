import React from "react";
import { Recommended } from "../components/home/Recommended";
import { Popular } from "../components/home/Popular";
import manwhas from "../data/manwhas.json";

export const Home = () => {
  return (
    <div className="mx-auto w-[100%]">
      <Recommended data={manwhas} />
      <Popular data={manwhas} />
    </div>
  );
};
