import manwhas from "../data/manwhas.json";

export const getManwhaByTitle = (slug = "") => {
  return manwhas.find((manwha) => manwha.slug === slug);
};
