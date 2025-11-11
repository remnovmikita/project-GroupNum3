document.getElementById("formEmail").addEventListener("submit", function (e) {
  const form = e.currentTarget;
  const modalMenu = document.querySelector('.modal');
  const CloseMdMenu = document.querySelector('.success-btn-close');
  const CloseMdMenutwo = document.querySelector('.modal-close-btn');

  modalMenu.classList.add("is-open");
  e.preventDefault();

  CloseMdMenu.addEventListener("click", () => {
    modalMenu.classList.remove("is-open");
    form.reset();
  });
  CloseMdMenutwo.addEventListener("click", () => {
    modalMenu.classList.remove("is-open");
    form.reset();
  });
});