// BASIC REVEALS
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

// STICKY CONTENT CHANGE
const data = [
  {
    title: "Learn with Industry Direction",
    desc: "Oppty Academy bridges the gap between academics and real industry needs.",
    img: "./academy1.jpg"
  },
  {
    title: "Hands-on & Practical Learning",
    desc: "Every program focuses on real-time projects and execution.",
    img: "./academy2.jpg"
  },
  {
    title: "Career-Focused Training",
    desc: "Mentorship, interview prep and placement guidance included.",
    img: "./academy3.jpg"
  }
];

let current = 0;

window.addEventListener("scroll",()=>{
  const vh = window.innerHeight;
  const index = Math.min(data.length-1, Math.floor(window.scrollY/vh));
  if(index !== current){
    current = index;
    document.getElementById("academyTitle").textContent = data[index].title;
    document.getElementById("academyDesc").textContent = data[index].desc;
    document.getElementById("academyImg").src = data[index].img;
  }
});
