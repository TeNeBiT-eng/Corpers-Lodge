// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
// When the user scrolls the page, execute myScrollIndicator. 
window.onscroll = function() {myScrollIndicator()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
function myScrollIndicator() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
}

