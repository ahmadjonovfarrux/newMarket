// http eski variant hozirda esa https bu s sertifikat ximoya vazifasini bildiradi yani bunda ximoya kuchliroq
// DNS server bu yozuvli manzillarni api manzilga yani (raqamlarga) o'zgartiruvchi server
// AJAX kengtmasi bu asinhrom javascript and xml
// api lar ikki turda bo'ladi rest api and soap api farqlari
// Soap api malumotlar xml rest keladigan malumotlar json formatda keladi va hozirda rest api ishlatilinadi
// Promise()
// Promise ichida resolve va reject bular funksiyalar hisoblanadi
// const vada = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Helllooo");
//   }, 5000);
// });
// vada
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// js error handling nima?
// let a = 1;
// console.log(a);

// try {
//     console.log(b)
//     let b = 2;
// } catch {
//     console.log("Something went wrong")
// }

const url = "https://dummyjson.com/product";
const div = document.querySelector(".hero__container");

function showData({ products }) {
  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const h2 = document.createElement("h2");
    h2.classList.add("card__title");
    const description = document.createElement("p");
    description.classList.add("card__description");
    const price = document.createElement("h4");
    const image = document.createElement("img");
    h2.textContent = product.title;
    price.textContent = `Price:${product.price}$`;
    description.textContent = product.description;
    image.src = product.thumbnail;
    card.append(image, h2, description, price);
    div.appendChild(card);
  });
}

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    showData(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally();
