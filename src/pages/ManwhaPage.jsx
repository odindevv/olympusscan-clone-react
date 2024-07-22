import React from "react";
import { useParams } from "react-router-dom";
import { getManwhaByTitle } from "../selector/getManwhaByTitle";
import { CardManwha } from "../components/series/CardManwha";

export const ManwhaPage = () => {
  const { serieSlug } = useParams();
  const manwha = getManwhaByTitle(serieSlug);
  return (
    <div className="mx-auto w-[100%]">
      <CardManwha {...manwha} />
    </div>
  );
};
