const url = "https://dummyjson.com/product";
const div = document.querySelector(".hero__Container");
import { getData } from "./fetchData.js";
import { upDateUI } from "./upDateUI.js";

getData(url)
  .then((data) => upDateUI(data))
  .catch((error) => console.log(error.message));

// async yordamida functionni promise ga aylantirish mumkin
