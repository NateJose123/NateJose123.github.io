const hambutton = document.querySelector("#hamicon");
const hamoverlay = document.querySelector("#hamenuitems");
const hamsubs = document.querySelectorAll(".hamsubmenu");

function openMenu(){
  hambutton.classList.toggle("active");
  hamoverlay.classList.toggle("active");
  for (var i=0; i<4; i++) {
    hamsubs[i].classList.toggle("active");
   
  } 
}

hambutton.onclick = openMenu;