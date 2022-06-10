var email = document.forms["form"]["email"];
var password = document.forms["form"]["password"];

var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

email.addEventListener("textInput", email_verify);
password.addEventListener("textInput", pass_verify);

function validated() {
  if (email.value.length > 9) {
    email.style.border = "2px solid red";
    email.style.borderRadius = "12px";
    email_error.style.color = "red";
    email_error.textContent = "please enter your email";
    email.focus();
    return false;
  }
  if (password.value.length < 9) {
    password.style.border = "2px solid red";
    password.style.borderRadius = "12px";
    pass_error.style.color = "red";
    pass_error.textContent = "please enter your strong password";
    password.focus();
    return false;
    
  }
}
function email_verify() {
  if (email.value.length < 9) {
    email.style.border = "2px solid green";
    email.style.borderRadius = "12px";
    email_error.style.color = "green";
    email_error.textContent = "email is valid";
    email.focus();
    return true;
    
  }

  
}
function pass_verify() {
    if (password.value.length < 9) {
      password.style.border = "2px solid green";
      password.style.borderRadius = "12px";
      pass_error.style.color = "green";
      pass_error.textContent = "password is valid";
      password.focus();
      return true;
    }
}
