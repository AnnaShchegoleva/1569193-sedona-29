const form = document.querySelector(".popup");
const formOpenButton = document.querySelector(".hotel-search-button");

form.classList.toggle("visually-hidden");

formOpenButton.addEventListener("click", function () {
  form.classList.toggle("visually-hidden");
});
