document.getElementById("formEmail").addEventListener("submit", function (e) {
  e.preventDefault();

  const modalMenu = document.querySelector('.modal');
  const CloseMdMenu = document.querySelector('.success-btn-close');
  const CloseMdMenutwo = document.querySelector('.modal-close-btn');

  modalMenu.classList.add("is-open");

  CloseMdMenu.addEventListener("click", () => {
    modalMenu.classList.remove("is-open");
    form.reset();
  });
  CloseMdMenutwo.addEventListener("click", () => {
    modalMenu.classList.remove("is-open");
    form.reset();
  });
});