document.addEventListener("DOMContentLoaded", function () {
    let i = 0;
    const text = "Hi, I'm Desowja Palagani";
    const speed = 100;
    function typeEffect() {
        if (i < text.length) {
            document.querySelector(".typing-effect").textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        }
    }
    typeEffect();
});
