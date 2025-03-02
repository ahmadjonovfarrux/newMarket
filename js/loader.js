const loaderWrapper = document.querySelector(".loaderWrapper");

export const showLoader = (status) => {
  if (status) {
    loaderWrapper.classList.remove("hidden");
  } else {
    loaderWrapper.classList.add("hidden");
  }
};
