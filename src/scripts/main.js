const eventDate = new Date("2024-12-31T00:00:00").getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft >= 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h2>O evento já começou!</h2>";
    }
}, 1000);
