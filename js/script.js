const form = document.querySelector(".popup");
const formOpenButton = document.querySelector(".hotel-search-button");

form.classList.add("form-hidden");

formOpenButton.addEventListener("click", function () {
  form.classList.toggle("form-hidden");
});
