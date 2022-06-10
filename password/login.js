function emailvalidation() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let text =document.getElementById("text")
  let emailcheckicon = document.getElementById("emailcheckicon")
  // let text = document.getElementById("text");
  //   let emailcheckicon = document.getElementById("emailcheckicon")

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML="Your email address is valid"
    text.style.color="green"
    emailcheckicon.classList.add("bi", "bi-check-circle")
    emailcheckicon.style.color="green"
    text.innerHTML = "Your email address is valid";
    text.style.color = "green";
    email.style.border="2px solid green"
    // emailcheckicon.classList.add("bi", "bi-check-circle")
    // emailcheckicon.style.color="green"
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerText="Your email address is invalid"
    text.style.color="red"
    emailcheckicon.classList.add("bi", "bi-x-circle-fill")
    emailcheckicon.style.color="red"

    text.innerText = "Your email address is invalid";
    text.style.color = "red";
    // emailcheckicon.classList.add("bi", "bi-x-circle-fill")
    // emailcheckicon.style.color="red"
  }
}
function passwordvalidation() {
  let password = document.getElementById("password").value;
  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/
  let passText = document.getElementById("passText");

  if (regex.test(password)) {
    passText.innerHTML = "Your Password is Valid";
    passText.style.color="green"
    let location = "index2.html";

    window.location.assign(location);
  }else{
    passText.innerHTML= "Your Password should contain at least one special character"
    passText.style.color="red"
    passText.style.fontSize="14px"
  }
}