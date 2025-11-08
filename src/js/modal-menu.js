(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const anchors = mobileMenu.querySelectorAll('a[href*="#"]');

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  };

  const openMenu = () => {
    mobileMenu.classList.add('is-open');
    openMenuBtn.setAttribute('aria-expanded', true);
    bodyScrollLock.disableBodyScroll(document.body);
  };

  openMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);

  anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
      closeMenu(); // закрываем меню
    });
  });

  // Закрытие при изменении брейкпоинта
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    closeMenu();
  });
})();
