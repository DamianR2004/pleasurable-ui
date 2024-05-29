import JSConfetti from 'js-confetti';

const openButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.header-list-left');
const audio = new Audio("./door-bell-sound-99933.mp3");
const submitButton = document.querySelector('input[type="submit"]');

if (openButton) {
  openButton.addEventListener("click", openMenu); 
}


function openMenu() {
    mobileMenu.classList.toggle('open');
    openButton.classList.toggle('open');
}


if (openButton) {
  openButton.addEventListener("click", audiobutton);
}
  
function audiobutton() {
  audio.play()
}



submitButton.addEventListener("click", function() {
  JSConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
  });
});