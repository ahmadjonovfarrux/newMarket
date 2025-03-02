import { showLoader } from "./loader.js";

export const getData = async (url) => {
  showLoader(true);
  const res = await fetch(url);
  if (!res.ok) {
    showLoader(false);
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  showLoader(false);
  return data;
};
