const slides = document.querySelectorAll(".slide");
let current = 0;
let timer;

// show slide
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  current = index;
}

// auto play
function autoPlay() {
  timer = setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4000);
}

// pause on hover
document.querySelector(".hero-slider")
  .addEventListener("mouseenter", () => clearInterval(timer));

document.querySelector(".hero-slider")
  .addEventListener("mouseleave", autoPlay);

// start
showSlide(0);
autoPlay();
