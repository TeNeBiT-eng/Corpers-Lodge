var form = document.getElementById("form");
let btn = document.getElementById('btn')
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkValidation()
})
function validation(){
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;
    let validateEmail = false
    if (email == ""){
        text.innerHTML = "empty";
        text.style.color = "red";
    }else if (email.match(pattern)){
        text.innerHTML = "Your Email address is Valid."; 
        text.style.color = "#09c309";
    }  else {
        text.innerHTML = "Please Enter Valid Email address";
        text.style.color = "#ff0000";
        validateEmail = true
    }
   return validateEmail;
}

/* validation() ?  */

function checkValidation() {
    let nextPage = "./cnp.html";
    validation() ? window.location.assign(nextPage) : ''
}