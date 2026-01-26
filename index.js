const text = "> initializing developer profile...";
let index = 0;
const speed = 60;
const typedText = document.getElementById("typed-text");

function type() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
    }
}
type();

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.querySelectorAll(".magnetic").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translate(0,0)";
    });
});
