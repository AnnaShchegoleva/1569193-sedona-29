const form = document.querySelector(".popup");
const formOpenButton = document.querySelector(".hotel-search-button");

formOpenButton.addEventListener("click", function () {
  form.classList.toggle("visually-hidden");
});
