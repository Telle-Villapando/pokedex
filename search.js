const inputElement = document.querySelector("#search-input");
const search_icon = document.querySelector("#search-close-icon");
const sort_wrapper = document.querySelector("#sort_wrapper");

inputElement.addEventListener("input", () => {
  handleInputChange(inputElement);
});

search_icon.addEventListener("click", () => {
  handleSearchClsoeOnClick(inputElement);
});

sort_wrapper.addEventListener("click", () => {
  handleInputChange(inputElement);
});
