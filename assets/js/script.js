let firstName = document.getElementById("firstname");
let firstNameValidation = function () {
  let fnameValue = firstName.value.trim();
  //   console.log(fnameValue);
  let validFname = /^[A-Za-z]+$/;
  let fnameErr = document.getElementById("fnameErr");

  if (fnameValue == "") {
    fnameErr.innerHTML = "Please Enter the First Name";
  } else if (!validFname.test(fnameValue)) {
    fnameErr.innerHTML = "First name must be only string without blank space";
  } else {
    fnameErr.innerHTML = "";
    return true;
  }
};
firstName.oninput = function () {
  firstNameValidation();
};

let email = document.getElementById("email");
let emailValidation = function () {
  let emaiValue = email.value.trim();
  let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailErr = document.getElementById("emailErr");
  if (emaiValue == "") {
    emailErr.innerHTML = "Please Enter Your Email";
  } else if (!validEmail.test(emaiValue)) {
    emailErr.innerHTML = "The Email address should be in valid format";
  } else {
    emailErr.innerHTML = "";
    return true;
  }
};
email.oninput = function () {
  emailValidation();
};

let password = document.getElementById("password");
let passwordValidation = function () {
  let passwordValue = password.value.trim();
  let validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let passwordErr = document.getElementById("passwordErr");
  if (passwordValue == "") {
    passwordErr.innerHTML = "Please Enter the Password";
  } else if (!validPassword.test(passwordValue)) {
    passwordErr.innerHTML =
      "The Password should contain atleast one uppercase, lowercase, digit, special charecters & 8 charecters";
  } else {
    passwordErr.innerHTML = "";
    return true;
  }
};
password.oninput = function () {
  passwordValidation();
  rePasswordValidation();
};

let repeatpass = document.getElementById("repassword");

let rePasswordValidation = function () {
  let rePasswordValue = repeatpass.value.trim();
//   alert(rePasswordValue);
  let rePassErr = document.getElementById("repassErr");
  if (rePasswordValue == "") {
    rePassErr.innerHTML = "Please Re-enter Password";
  }else if(rePasswordValue!=password.value){
    rePassErr.innerHTML="Password does not Match";
  }else{
    rePassErr.innerHTML="";
    return true;
  }
};
repeatpass.oninput = function (){
    rePasswordValidation();
}

document.getElementById("button").onclick = function (e) {
  firstNameValidation();
  emailValidation();
  passwordValidation();
  rePasswordValidation();

  if(firstNameValidation()==true && emailValidation()==true && passwordValidation()==true && rePasswordValidation()==true){
  //  let success = document.getElementById("success");
  //  success.style.display="block";
  //  success.innerHTML= "Sign Up Validation Success";
  alert('Validation Success !!! Thank You for Sign Up & You are Redirecting to Login Page');
  //Redirecting to other page or webste code or you can set your own html page.
       window.location = "http://127.0.0.1:5500/bootstrap_sample_front_end_technologies-main/login.html";
   return true;
  }else{
    success.innerHTML="Error in Validation";
    return false;
  }
};



