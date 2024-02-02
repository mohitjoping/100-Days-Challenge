// Create a counter in javascript (counts down from 30 to 0)
function countdown(seconds) {
    function updateCountdown() {
      console.log(seconds);
      seconds--;
  
      if (seconds >= 0) {
        setTimeout(updateCountdown, 1000); // Call the function updateCountdown again after 1000 milliseconds (1 second)
      }
    }
  
    updateCountdown(); // initial call to Start the countdown
  }
  
  // Start countdown from 30 seconds
  countdown(30);
  