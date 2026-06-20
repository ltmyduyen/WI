// Countdown Timer
const weddingDate = new Date("2026-08-08T00:00:00");
function updateCountdown() {

    const now = new Date();

    const diff = weddingDate - now;

    if (diff <= 0) {
        return;
    }

    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);
// Music Control
const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if (!isPlaying) {

        bgMusic.play();

        musicBtn.classList.add("playing");

        isPlaying = true;

    } else {

        bgMusic.pause();

        musicBtn.classList.remove("playing");

        isPlaying = false;

    }

});

// Hiệu ứng mở cánh cổng thiệp

document.addEventListener("DOMContentLoaded", function() {
    const gate = document.querySelector(".wedding-gate");
    const gateBtn = document.querySelector(".gate-center-btn");

    if (gateBtn && gate) {
        gateBtn.addEventListener("click", function(e) {
            e.preventDefault();
            gate.classList.add("open");
            document.body.style.overflow = "auto";
        });
    }
});

// Xử lý hiệu ứng click mở cánh cửa thiệp
document.addEventListener("DOMContentLoaded", function() {
    const gate = document.querySelector(".wedding-gate");
    const gateBtn = document.querySelector(".gate-center-btn");

    if (gateBtn && gate) {
        gateBtn.addEventListener("click", function() {
            gate.classList.add("open");
            document.body.style.overflow = "auto"; 
        });
    }
});