// SCROLL REVEAL
const reveals = document.querySelectorAll(
  ".reveal-fade,.reveal-slide-up,.reveal-slide-left,.reveal-slide-right,.reveal-pop,.reveal-scale"
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

// FORM INTERACTION
const form = document.getElementById("contactForm");
const statusText = document.querySelector(".form-status");

form.addEventListener("submit", e=>{
  e.preventDefault();
  statusText.textContent = "Sending your message...";
  statusText.style.color = "#0f172a";

  setTimeout(()=>{
    statusText.textContent = "Thank you! Our team will contact you shortly.";
    statusText.style.color = "#22c55e";
    form.reset();
  }, 1500);
});
