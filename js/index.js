const url = "https://dummyjson.com/product";
const div = document.querySelector(".hero__container");


function showData({ products }) {
  products.forEach((product) => {
    // Card
    const card = document.createElement("div");
    card.classList.add("card");
    // h2
    const h2 = document.createElement("h2");
    h2.classList.add("card__title");
    // desc
    const description = document.createElement("p");
    description.classList.add("card__description");
    // price
    const price = document.createElement("h4");
    price.classList.add("card__price");
    // cardImage
    const image = document.createElement("img");
    image.classList.add("card__img");
    //
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
