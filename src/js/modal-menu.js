(() => {
  const refs = {
    // Додати атрибут data-mobile-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-mobile-open]"),
    // Додати атрибут data-mobile-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-mobile-close]"),
    // Додати атрибут data-mobile на контейнер мобільного меню
    modal: document.querySelector("[data-mobile]"),
  };

  refs.openModalBtn.addEventListener("click", OpenModal);
  refs.closeModalBtn.addEventListener("click", CloseModal);

  function OpenModal() {
    // is-open це клас який буде додаватися/забиратися на контейнер мобільного меню при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }

  function CloseModal() {
    // Додаємо клас для анімації закриття

    refs.modal.classList.remove("is-open");
  }
})();