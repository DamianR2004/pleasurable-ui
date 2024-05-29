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

submitButton.addEventListener("click", function() {
  JSConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
  });
});

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

// console.log(valueDisplays)
valueDisplays.forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
    // console.log(endValue)
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
    startValue += 1;
    valueDisplay.textContent = startValue;
    if(startValue == endValue){
        clearInterval(counter);
    }
    },duration);
});
