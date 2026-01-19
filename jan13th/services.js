const reveals = document.querySelectorAll(
  ".reveal-fade,.reveal-slide-up,.reveal-pop"
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
