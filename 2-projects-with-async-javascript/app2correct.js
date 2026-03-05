const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body = document.querySelector('body'); // Select body ONCE, not every millisecond

let intervalId = null; // Store the ID here so both buttons see it

// 1. START BUTTON
start.addEventListener('click', function(){
    // Safety Check: If a timer is already running, don't start another one!
    if (intervalId !== null) return;

    intervalId = setInterval(function(){
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        
        body.style.backgroundColor = `rgb(${r},${g},${b})`;
    }, 1000); // Change color every 1 second
});

// 2. STOP BUTTON (Defined OUTSIDE)
stop.addEventListener('click', function(){
    clearInterval(intervalId);
    intervalId = null; // Reset variable so we can start again later
});