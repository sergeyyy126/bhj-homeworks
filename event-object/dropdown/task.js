// Получаем все дропдауны на странице
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const valueElem = dropdown.querySelector(".dropdown__value");
  const listElem = dropdown.querySelector(".dropdown__list");
  const items = dropdown.querySelectorAll(".dropdown__item");

  // Переключение списка (открыть/закрыть)
  valueElem.addEventListener("click", () => {
    listElem.classList.toggle("dropdown__list_active");
  });

  // Обработка клика по пункту меню
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault(); // запрет перехода по ссылке

      // Записываем выбранное значение в .dropdown__value
      valueElem.textContent = item.textContent.trim();

      // Закрываем список
      listElem.classList.remove("dropdown__list_active");
    });
  });
});

// Закрываем открытые списки при клике вне дропдауна
document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    if (!e.target.closest(".dropdown")) {
      dropdown
        .querySelector(".dropdown__list")
        .classList.remove("dropdown__list_active");
    }
  });
});
