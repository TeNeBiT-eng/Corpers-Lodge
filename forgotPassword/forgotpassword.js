function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

    if (email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email address is Valid.";
        text.style.color = "#09c309";
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email address";
        text.style.color = "#ff0000";
    }
    if (email == ""){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}