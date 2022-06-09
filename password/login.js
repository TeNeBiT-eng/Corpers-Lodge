function emailvalidation() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let text =document.getElementById("text")
  let emailcheckicon = document.getElementById("emailcheckicon")

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML="Your email address is valid"
    text.style.color="green"
    emailcheckicon.classList.add("bi", "bi-check-circle")
    emailcheckicon.style.color="green"
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerText="Your email address is invalid"
    text.style.color="red"
    emailcheckicon.classList.add("bi", "bi-x-circle-fill")
    emailcheckicon.style.color="red"
     
  }
}
