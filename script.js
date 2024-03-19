// Add event listeners on each .arrow element
const button = document.querySelectorAll(".arrow");

// Check if event listeners are working with PointerEvent
function Clickcheck(event) {
  console.log(event);
}

// Start callback function ClickCheck when clicking
button.forEach(function (button) {
  button.addEventListener("click", Clickcheck);
});
