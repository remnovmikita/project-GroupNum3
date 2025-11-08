document.getElementById("formEmail").addEventListener("submit", function (x) {
    
    const modalMenu = document.querySelector('.modal');
    const CloseMdMenu = document.querySelector('.success-btn-close');
    const CloseMdMenutwo = document.querySelector('.modal-close-btn');
    const userEmail = document.getElementById("userEmail");
    const erorEmail = document.getElementById("erorEmail");

    CloseMdMenu.addEventListener('click', () => {
    modalMenu.classList.remove('is-open');
});
    CloseMdMenutwo.addEventListener('click', () => {
    modalMenu.classList.remove('is-open');
});

  const emailValue = userEmail.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    if (!isValidEmail) {
    x.preventDefault();
    erorEmail.style.display = "inline"; // показать span
    
  } else {
    erorEmail.style.display = "none"; // скрыть span
    modalMenu.classList.add('is-open');
  }
});
