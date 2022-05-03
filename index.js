// Text label
let countLabel = document.getElementById("count");
let total = 0;

// Get inputs from html
let setInput = document.getElementById("set");
let stepInput = document.getElementById("step");

// Step is the value of the input (default: 2)
let set = setInput.value;
let step = stepInput.value;

// Timer speed (default: 1000 ms)
let speed = 1000;

let countUp = true;

// Function to change counter step
let changeStep = (event) => {
  step = event.target.value;
};

//Function to change count value
let setTo = (event) => {
  total = +event.target.value;
};

// Event Listener for inputs changes
setInput.addEventListener("input", setTo);
stepInput.addEventListener("input", changeStep);

// Function to set label text
let setTime = () => {
  countUp ? (total += +step) : (total -= +step);
  countLabel.innerHTML = total;
};

// Set count up/down
let setCountUp = (value) => (countUp = value);

// Start, pause & reset functions
let start = () => (interval = setInterval(setTime, speed));
let pause = () => clearInterval(interval);
let reset = () => (countLabel.innerHTML = 0);
