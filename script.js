const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function updateClock() {
    const now = new Date();

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate the angles
    const minuteDegrees = (minutes / 60) * 360; // 360 degrees per hour
    const secondDegrees = (seconds / 60) * 360; // 360 degrees per minute

    // Apply rotation
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

// Call the function every second to update the time
setInterval(updateClock, 1000);

// Run once initially to set the clock at load
updateClock();

