<<<<<<< Updated upstream
=======

// 1. variables

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    startValue += 1;
    valueDisplay.textContent = startValue;
    if(startValue == endValue){
        clearInterval(counter);
    }
    },duration);
});
=======
      startValue += 1;

      valueDisplay.textContent = startValue;
      if(startValue == endValue){
          clearInterval(counter);
      }
    }, duration);
})




for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    fetch(this.href).then(function(response) {
      return response.text()
    }).then(function(responseHTML) {
      let dummy = document.createElement('div')
      dummy.innerHTML = responseHTML;
      let outerRating = dummy.querySelector('.outer-rating')
      let dialog = document.createElement('dialog')
      dialog.appendChild(outerRating)
      document.body.appendChild(dialog)
      dialog.showModal()
    })
    event.preventDefault();
  })
}


// 3. functions
function openMenu() {
  mobileMenu.classList.toggle('open');
  openButton.classList.toggle('open');
}

function audiobutton() {
  audio.play()
}

>>>>>>> Stashed changes

