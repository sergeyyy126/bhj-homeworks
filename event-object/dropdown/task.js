const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const valueElem = dropdown.querySelector(".dropdown__value");
  const listElem = dropdown.querySelector(".dropdown__list");
  const items = dropdown.querySelectorAll(".dropdown__item");

  valueElem.addEventListener("click", () => {
    listElem.classList.toggle("dropdown__list_active");
  });

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault(); 

      valueElem.textContent = item.textContent.trim();

      listElem.classList.remove("dropdown__list_active");
    });
  });
});

document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    if (!e.target.closest(".dropdown")) {
      dropdown
        .querySelector(".dropdown__list")
        .classList.remove("dropdown__list_active");
    }
  });
});
