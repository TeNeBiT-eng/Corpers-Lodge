// When the user scrolls the page, execute myScrollIndicator. 
window.onscroll = function() {myScrollIndicator()};

function myScrollIndicator() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


function onClickMenu() {
    document.getElementById("hamburger").classList.toggle("fa-times");
    document.getElementById('menu_bg').classList.toggle('change_bg');
  }

  let logo = document.querySelector('.menu');
  let nav = document.querySelector('nav');

  logo.addEventListener('click', function(){
    menu_bar.classList.toggle('none')

  })

