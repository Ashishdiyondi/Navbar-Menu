const bar = document.querySelector(".fa-bars");
const pages = document.querySelector(".pages");

bar.addEventListener("click", () => {
  pages.classList.toggle("show-pages");
});
