import React from "react";

export const manwhasReducer = (state = [], action) => {
  switch (action.type) {
    case "all":
      return [...state];
    case "popular":
      return [...state].sort((a, b) => b.views - a.views).slice(0, 4);
    case "recomendados":
      return [...state].sort((a, b) => b.likes - a.likes).slice(0, 4);
    case "nuevos":
      return [...state];

    default:
      return state;
  }
};
