const v1 = document.getElementById("v1");
const normal = document.getElementById("normal");

const som = new Audio("Sons/ULTRAKILL/soco.ogg");
const som2 = new Audio("../Sons/GD/normal.mp3");

if (v1) {
    v1.addEventListener("click", () => {
        som.currentTime = 0;
        som.volume = 0.075;
        som.play();
    });
}

if (normal) {
    normal.addEventListener("click", () => {
        som2.currentTime = 0;
        som2.volume = 0.35;
        som2.play();
    });
}
