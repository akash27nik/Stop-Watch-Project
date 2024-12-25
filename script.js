
// Select the display and buttons
let display = document.querySelector('.display');
let startbtn = document.getElementById('startbtn');
let stopbtn = document.getElementById('stopbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 0;
let sec = 0;
let mins = 0;

let timer = null;

// Function to start the timer
function startTimer() {
  msec += 10;

  if (msec === 1000) {
    msec = 0;
    sec++;
    if (sec === 60) {
      sec = 0;
      mins++;
    }
  }

  // Update the display with formatted time
  display.innerHTML = `${String(mins).padStart(2, '0')} : ${String(sec).padStart(2, '0')} : ${String(
    Math.floor(msec / 10)
  ).padStart(2, '0')}`;
}

// Start button click event
startbtn.addEventListener('click', function () {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(startTimer, 10);
});

// Stop button click event
stopbtn.addEventListener('click', function () {
  clearInterval(timer);
});

// Reset button click event
resetbtn.addEventListener('click', function () {
  clearInterval(timer);
  msec = 0;
  sec = 0;
  mins = 0;
  display.innerHTML = `00 : 00 : 00`;
});
