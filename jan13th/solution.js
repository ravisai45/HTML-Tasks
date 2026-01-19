// SCROLL REVEAL
const reveals = document.querySelectorAll(
  ".reveal-fade,.reveal-slide-up,.reveal-pop,.reveal-scale"
);

function revealOnScroll(){
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 120){
      el.classList.add("reveal-active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// SIMPLE SLIDER
const slides = document.querySelector(".slider")
const slideImgs = document.querySelectorAll(".slide")
let idx = 0

function showSlide(i){
  slides.style.transform = `translateX(-${i * 100}%)`
}

document.querySelector(".next").addEventListener("click", ()=>{
  idx = (idx + 1) % slideImgs.length
  showSlide(idx)
})

document.querySelector(".prev").addEventListener("click", ()=>{
  idx = (idx - 1 + slideImgs.length) % slideImgs.length
  showSlide(idx)
})
