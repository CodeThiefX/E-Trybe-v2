let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slide.style.left = "100%"; // reset position offscreen
    slide.style.opacity = "0"; // reset opacity
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");
  slides[index].style.left = "0"; // bring into view
  slides[index].style.opacity = "1"; // make visible
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Initialize the first slide and dot as active
showSlide(currentSlide);

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 10000);
