// SCROLL ANIMATIONS
const reveals = document.querySelectorAll(
  ".reveal-fade,.reveal-slide-up,.reveal-slide-left,.reveal-slide-right,.reveal-pop"
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

// FORM SUBMISSION INTERACTION
const form = document.getElementById("applyForm");
const status = document.querySelector(".status-message");

form.addEventListener("submit", e => {
  e.preventDefault();
  status.textContent = "Submitting your application...";
  status.style.color = "#0f172a";

  setTimeout(() => {
    status.textContent = "Application submitted successfully 🎉";
    status.style.color = "#22c55e";
    form.reset();
  }, 1500);
});
