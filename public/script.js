const openButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.header-list-left');
const audio = new Audio("./door-bell-sound-99933.mp3");

openButton.addEventListener("click", openMenu);


function openMenu() {
    mobileMenu.classList.toggle('open');
    openButton.classList.toggle('open');
}



  openButton.addEventListener("click", audiobutton);
  
  function audiobutton() {
audio.play()
  }
