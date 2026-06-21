document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide-content");
  const bgSlides = document.querySelectorAll(".bg-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.remove("active");
      bgSlides[index].classList.remove("active");
      dots[index].classList.remove("active");
      if (index === currentSlide) {
        slide.classList.add("active");
        bgSlides[index].classList.add("active");
        dots[index].classList.add("active");
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });

  // Optional: Auto slide every 5 seconds
  // setInterval(() => {
  //   currentSlide = (currentSlide + 1) % totalSlides;
  //   updateSlider();
  // }, 5000);
});
