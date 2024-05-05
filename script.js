// Get arrows & img
const arrowleft = document.getElementById("arrowleft");
const arrowright = document.getElementById("arrowright");
const srcImg = document.getElementById("bgImg");
const textElement = document.getElementById("text");
const dots = document.querySelectorAll(".dot");
let arrowIndex = 0;

// Create array for imgs & texts
const slideshow = [
  {
    image: "slide1.jpg",
    text: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    text: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    text: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    text: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Add click event listeners to arrows
arrowleft.addEventListener("click", function () {
  clickCheck(event);
  arrowIndex = (arrowIndex - 1 + slideshow.length) % slideshow.length;
  updateContent();
  updateDots();
});

arrowright.addEventListener("click", function () {
  clickCheck(event);
  arrowIndex = (arrowIndex + 1) % slideshow.length;
  updateContent();
  updateDots();
});

// Function to check if addEventListener(click) works
function clickCheck(event) {
  console.log("Button clicked:", event.target);
}

// Function to update the src and text based on the current index
function updateContent() {
  if (arrowIndex >= 0 && arrowIndex < slideshow.length) {
    srcImg.src = "./assets/images/slideshow/" + slideshow[arrowIndex].image;
    textElement.innerHTML = slideshow[arrowIndex].text;
  } else {
    if (arrowIndex > slideshow.length) {
      arrowIndex = 0;
    } else if (arrowIndex < 0) {
      arrowIndex = slideshow.length - 1;
    }
    srcImg.src = "./assets/images/slideshow/" + slideshow[arrowIndex].image;
    textElement.innerHTML = slideshow[arrowIndex].text;
  }
}
// Fuction to update the dots based on arrowindex and slidshow
function updateDots() {
  for (let i = 0; i < dots.length; i++) {
    if (i === arrowIndex) {
      dots[i].classList.add("dot_selected");
    } else {
      dots[i].classList.remove("dot_selected");
    }
  }
}
