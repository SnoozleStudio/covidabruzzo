// Set the date we're counting down to
const countDownDate = new Date("May 3, 2020 23:59:59").getTime();

// Update the count down every 1 second
const x = setInterval(() => {

  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element
  document.getElementById('cdD').innerHTML = days;
  document.getElementById('cdH').innerHTML = hours;
  document.getElementById('cdM').innerHTML = minutes;
  document.getElementById('cdS').innerHTML = seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('cdLockdown').remove();
    document.getElementById("cdLockdownExpired").innerHTML = "Il periodo di contenimento è terminato";
  }
}, 1000);