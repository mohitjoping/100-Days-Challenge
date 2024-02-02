// Calculate the time it takes between the setTimout call and the inner function actually running.

function countdown(seconds) {
  const startTime = performance.now(); // calculate current time

  function updateCountdown() {
    console.log(seconds);
    seconds--;

    if (seconds >= 0) {
      setTimeout(updateCountdown, 1000); // Call the function updateCountdown again after 1000 milliseconds (1 second)
    }
    const endTime = performance.now(); // calculate time after the innerfunction execution
    const elapsedTime = endTime - startTime; // calculate time between the setTimout call and innerfunction
    console.log(`Time elapsed: ${elapsedTime} ms`); // template literal use for string concatenation
  }

  updateCountdown(); // initial call to Start the countdown
}

// Start countdown from 10 seconds
countdown(10);
