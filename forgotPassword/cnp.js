function togglePsw() {
    var x = document.getElementById("password");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");
  
    if (x.type === "password") {
      x.type = "text";
      y.style.display = "none";
      z.style.display = "block";
    } else {
      x.type = "password";
      y.style.display = "block";
      z.style.display = "none";
    }
  }
  
  function togglePS() {
    var a = document.getElementById("Cpassword");
    var b = document.getElementById("hide3");
    var c = document.getElementById("hide4");
  
    if (a.type === "password") {
      a.type = "text";
      b.style.display = "none";
      c.style.display = "block";
    } else {
      a.type = "password";
      b.style.display = "block";
      c.style.display = "none";
    }
  }
  
  var e = document.getElementById("myInput");
  var f = document.getElementById("myInput2");
  
  /* if(e === f){
      
  } */
  let form;
  form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkValidation();
  });
  let checkValidity = () => {
    let [validpassword, validCpassword] = [false, false];
    if (password.value == "") {
      error.style.display = "block";
    } else if (Cpassword.value == "") {
      /* let errohtml =  */
      /* errohtml */
      /* console.log(error.innerHTML); */
      error.style.display = "block";
      error.innerHTML = "Confirm Password can't be empty!";
    } else if (password.value != Cpassword.value) {
      error.style.display = "block";
      error.innerHTML = "Password does not match";
    } else {
      error.style.display = "none";
      validCpassword = true;
      validpassword = true;
    }
  
    return validpassword && validCpassword;
  };
  function checkValidation() {
    let nextPage = "./index2.html";
    checkValidity() ? window.location.assign(nextPage) : " ";
  }