document.addEventListener("DOMContentLoaded", () => {
  // Constants and variables
  const arrowLeft = document.getElementById("arrowleft");
  const arrowRight = document.getElementById("arrowright");
  const srcImg = document.getElementById("bgImg");
  const textElement = document.getElementById("text");
  const dots = document.querySelectorAll(".dot");
  let arrowIndex = 0;

  // Slideshow data
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

  // Event listeners
  arrowLeft.addEventListener("click", handleArrowLeftClick);
  arrowRight.addEventListener("click", handleArrowRightClick);

  // Event handlers
  function handleArrowLeftClick(event) {
    clickCheck(event);
    decrementArrowIndex();
    updateContent();
    updateDots();
  }

  function handleArrowRightClick(event) {
    clickCheck(event);
    incrementArrowIndex();
    updateContent();
    updateDots();
  }

  // Helper functions
  function clickCheck(event) {
    console.log("Button clicked:", event.target);
  }

  function updateContent() {
    srcImg.src = `./assets/images/slideshow/${slideshow[arrowIndex].image}`;
    textElement.innerHTML = slideshow[arrowIndex].text;
  }

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle("dot_selected", index === arrowIndex);
    });
  }

  function incrementArrowIndex() {
    if (arrowIndex < slideshow.length - 1) {
      arrowIndex++;
    } else {
      arrowIndex = 0;
    }
  }

  function decrementArrowIndex() {
    if (arrowIndex > 0) {
      arrowIndex--;
    } else {
      arrowIndex = slideshow.length - 1;
    }
  }

  // Initial content and dots update
  updateContent();
  updateDots();
});
