const btn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");
const flap = document.querySelector(".top");
const envelope = document.getElementById("envelope");

btn.addEventListener("click", () => {

    // Hide button
    btn.style.display = "none";

    // Open envelope flap
    flap.style.transform = "rotateX(180deg)";

    // Wait for flap animation
    setTimeout(() => {

        // Show letter
        letter.style.display = "block";

        // Slide letter up
        letter.animate([
            {
                transform: "translateY(150px)",
                opacity: 0
            },
            {
                transform: "translateY(-30px)",
                opacity: 1
            }
        ],{
            duration:1200,
            fill:"forwards",
            easing:"ease"
        });

    },900);

});
