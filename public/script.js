const openButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.header-list-left');

openButton.addEventListener("click", openMenu);


function openMenu() {
    mobileMenu.classList.toggle('open');
    openButton.classList.toggle('open');
}

