
function login() {
    location.href = "email.html";
  }
  
  var allmail = [];
  var userMailData = localStorage.getItem("UserDataEmail");
  if (userMailData !== null) {
    allmail = JSON.parse(userMailData);
  }
  
  function getMail() {
    var mail = document.getElementById("mail");
    //   console.log(mail.value);
    if (mail.value === "") {
      alert("Please enter email");
    } else if (!mail.value.includes("@")) {
      alert("please includes '@' in the email adrress");
    } else if (!mail.value.includes(".com")) {
      alert("please enter a part following '@'");
    } else {
      sessionStorage.setItem("mail", mail.value);
      var isEmailExist = allmail.includes(mail.value);
      if (!isEmailExist) {
        // email = mail.value;
        console.log(mail.value);
        allmail.push(mail.value);
        localStorage.setItem("UserDataEmail", JSON.stringify(allmail));
      }
      if (isEmailExist) {
        location.href = "/passlogin.html";
      } else {
        location.href = "/PassCreate.html";
      }
    }
  }
  
  var allpass = [];
  var userPassData = localStorage.getItem("UserDataPass");
  if (userPassData !== null) {
    allpass = JSON.parse(userPassData);
  }
  function createpass() {
    var newPass = document.getElementById("newPass").value;
    var conPass = document.getElementById("conPass").value;
    if (newPass === "") {
      alert("All field Required");
    } else {
      if (newPass !== conPass) {
        alert("Password not match, \nEnter same password on both field ");
      } else {
        allpass.push(newPass);
        localStorage.setItem("UserDataPass", JSON.stringify(allpass));
        location.href = "user.html";
        var logvalue = document.getElementById("log").innerText;
        console.log(logvalue);
      }
    }
  }
  
  function loginpass() {
    var mail = sessionStorage.getItem("mail");
    var pass = document.getElementById("pass").value;
    var isPassExist = allpass.includes(pass);
    var match = true;
    if (isPassExist) {
      for (var i = 0; i < allmail.length; i++) {
        if (allpass[i] === pass && allmail[i] === mail) {
          location.href = "index.html";
          var logvalue = document.getElementById("log");
          console.log(logvalue);
          match = false;
        }
      }
      if (match === true) {
        alert("Password is incorrect");
      }
    } else {
      alert("Password is incorrect");
    }
  }
  
  // function loadfun() {
  //   var mail = sessionStorage.getItem("mail");
  //   document.getElementById("para").childNodes[1].innerText = mail;
  //   var log = sessionStorage.getItem("log");
  // }

  // function sell() {
  //   location.href = "sell.html";
  // }
  
  // function forsell() {
  //   alert("SignIn Required to post your product ");
  // }




