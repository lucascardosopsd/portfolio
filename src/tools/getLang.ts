export const getLang = () => {
  return navigator.language.split("-")[0] as "pt" | "en";
};
