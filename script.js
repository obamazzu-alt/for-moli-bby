const text = "Hey Moli Bby... 💖";
const typing = document.getElementById("typing");
const button = document.getElementById("openBtn");
const video = document.getElementById("bgVideo");

let i = 0;

// Hide button at first
button.style.display = "none";

// Typewriter Effect
function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            button.style.display = "block";
            button.style.opacity = "0";

            let fade = 0;
            const showBtn = setInterval(() => {
                fade += 0.05;
                button.style.opacity = fade;

                if (fade >= 1) {
                    clearInterval(showBtn);
                }
            }, 30);

        }, 700);
    }
}

window.onload = () => {
    typeWriter();
};

// Open Letter
button.addEventListener("click", () => {

    // Start video if browser paused it
    video.play().catch(() => {});

    // Fade animation
    document.body.style.transition = "0.8s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "letter.html";
    }, 800);

});
