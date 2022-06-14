// var form = document.getElementById("form");
// let btn = document.getElementById('btn')
// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     checkValidation()
// })
// function validation(){
//     var email = document.getElementById("email").value;
//     var text = document.getElementById("text");
//     var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;
//     let validateEmail = false
//     if (email == ""){
//         text.innerHTML = "empty";
//         text.style.color = "red";
//     }else if (email.match(pattern)){
//         text.innerHTML = "Your Email address is Valid."; 
//         text.style.color = "#09c309";
//     }  else {
//         text.innerHTML = "Please Enter Valid Email address";
//         text.style.color = "#ff0000";
//         validateEmail = true
//     }
//    return validateEmail;
// }

// /* validation() ?  */

// function checkValidation() {
//     let nextPage = "./cnp.html";
//     validation() ? window.location.assign(nextPage) : ''
// }

// function validation(){
//     var form = document.getElementById("form");
//     var email = document.getElementById("email").value;
//     var text = document.getElementById("text");
//     var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

//     if (email.match(pattern)){
//         form.classList.add("valid");
//         form.classList.remove("invalid");
//         text.innerHTML = "Your Email address is Valid.";
//         text.style.color = "#09c309";
//     }
//     else{
//         form.classList.remove("valid");
//         form.classList.add("invalid");
//         text.innerHTML = "Please Enter Valid Email address";
//         text.style.color = "#ff0000";
//     }
//     if (email == ""){
//         form.classList.add("valid");
//         form.classList.remove("invalid");
//         text.innerHTML = "";
//         text.style.color = "#00ff00";
//     }
// }

function validation() {
    var form = document.querySelector("#form");
    var email = document.querySelector("#email").value;
    var text = document.querySelector("#text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;
    if (email.length != 0) {
      if (pattern.test(email)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Email address is valid";
        text.style.color = "#00ff00";
        let location = "./cnp.html";
        window.location.assign(location);
        
      } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Email address is invalid";
        text.style.color = "#ff0000";
      }
    } else {
      text.innerHTML = "Email address is empty";
      text.style.color = "#f0000f";
      text.style.fontWeight = "700";
    }
  }