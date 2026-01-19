const reveals = document.querySelectorAll(
  ".reveal-fade,.reveal-slide-left,.reveal-slide-right,.reveal-slide-up,.reveal-pop,.reveal-stagger,.reveal-flip"
);

function revealOnScroll(){
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 120){
      el.classList.add("reveal-active");
    }
  });
}

window.addEventListener("scroll",revealOnScroll);
revealOnScroll();
