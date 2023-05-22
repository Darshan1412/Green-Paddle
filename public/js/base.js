let scrolltotop=document.querySelector('#scrolltotop')
scrolltotop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

//carousel 
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 5000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});


//login and post
// window.onload = function() {
//     console.log("called onload inside index.html")
//   if (localStorage.getItem("isloggedin") == "true") {
//     document.getElementById("profile-nav").style.display = "flex"
//     document.getElementById("login-nav").style.display = "none"
//     // $("#logout-link").show();
//   } else {
//     // $("login-link").show();
//     document.getElementById("profile-nav").style.display = "none"
//     document.getElementById("login-nav").style.display = "flex"
//     // $("#register-link").show();
//   }
// };

// function loggedinfalse(){
//   localStorage.setItem("isloggedin", "false")
// }
// function forsell(){
// if(localStorage.getItem("isloggedin")=="true"){
//   location.href='/sell.html';
// } else{
//   alert("SignIn Required to post your product ");
// }
// }
