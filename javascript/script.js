const menu = document.getElementById("menu");
const actions = document.getElementById("actions");

menu.addEventListener("click",()=>{
   hundelMenu();
})

function hundelMenu(){

  menu.classList.toggle("is-active");
  actions.classList.toggle("is-active");
}

let scroll = document.getElementById('scroll');

window.onscroll = function () {
  if (scrollY >= 260){
    scroll.style.display = 'block';
  }else{
    scroll.style.display = 'none';
  } 
}



