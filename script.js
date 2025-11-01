// Dark Mode
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Efeito de digitação
const typing = document.querySelector(".typing");
const text = "Fabio Marques";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Scroll reveal
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let r of reveals) {
    let windowHeight = window.innerHeight;
    let elementTop = r.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      r.classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
