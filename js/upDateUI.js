const template = document.querySelector("template");
const list = document.querySelector(".hero__container");

export function upDateUI({ products }) {
  products.forEach((product) => {
    const { thumbnail, price, title, description } = product;
    const clone = template.content.cloneNode(true);
    const h2 = clone.querySelector(".card__title");
    const image = clone.querySelector(".card__img");
    const text = clone.querySelector(".card__description");
    const pPrice = clone.querySelector(".card__price");
    h2.textContent = title;
    text.textContent = description;
    pPrice.textContent = price;
    image.src = thumbnail;
    list.appendChild(clone);
  });
}
