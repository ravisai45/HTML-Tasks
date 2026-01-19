const slides = document.querySelectorAll(".hero-slide");
const prev = document.querySelector(".hero-arrow.left");
const next = document.querySelector(".hero-arrow.right");

let index = 0;
let timer;

function showSlide(i){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide(){
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide(){
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

next.addEventListener("click", () => {
  nextSlide();
  resetAuto();
});

prev.addEventListener("click", () => {
  prevSlide();
  resetAuto();
});

function startAuto(){
  timer = setInterval(nextSlide, 5000);
}

function resetAuto(){
  clearInterval(timer);
  startAuto();
}

startAuto();


const focusItems = document.querySelectorAll(".focus-item");

focusItems.forEach(item => {
    item.addEventListener("click", () => {
        focusItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});


const valueSection = document.querySelector(".reveal-value");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    { threshold: 0.4 }
);

observer.observe(valueSection);




const steps = [
  {
    title: "Enterprise Digital Solutions",
    desc: "Oppty Tech Hub delivers secure, scalable and future-ready digital solutions for growing businesses.",
    points: [
      "✔ Web & App Development",
      "✔ Cloud & DevOps",
      "✔ Cyber Security"
    ],
    image: "./slider-3-image.png"
  },
  {
    title: "AI-Driven Innovation",
    desc: "Our AI solutions enable smarter decision-making and intelligent automation.",
    points: [
      "✔ Machine Learning",
      "✔ Predictive Analytics",
      "✔ Intelligent Automation"
    ],
    image: "./slider-3-image.png"
  },
  {
    title: "Cloud-Native Architecture",
    desc: "We build high-performance cloud infrastructure optimized for scale and security.",
    points: [
      "✔ AWS & Azure",
      "✔ Microservices",
      "✔ CI / CD Pipelines"
    ],
    image: "./man.jpeg"
  }
];

const title = document.getElementById("techTitle");
const desc = document.getElementById("techDesc");
const points = document.getElementById("techPoints");
const image = document.getElementById("techImage");

let currentStep = -1;

window.addEventListener("scroll", () => {
  const section = document.querySelector(".oppty-tech");
  const rect = section.getBoundingClientRect();
  const vh = window.innerHeight;

  if (rect.top <= 0 && rect.bottom >= vh) {
    const scrollProgress = Math.min(
      steps.length - 1,
      Math.floor((vh - rect.top) / vh)
    );

    if (scrollProgress !== currentStep) {
      currentStep = scrollProgress;

      // fade out
      title.classList.add("fade-out");
      desc.classList.add("fade-out");
      points.classList.add("fade-out");
      image.classList.add("fade-out");

      setTimeout(() => {
        title.textContent = steps[currentStep].title;
        desc.textContent = steps[currentStep].desc;

        points.innerHTML = "";
        steps[currentStep].points.forEach(p => {
          const li = document.createElement("li");
          li.textContent = p;
          points.appendChild(li);
        });

        image.src = steps[currentStep].image;

        // fade in
        title.classList.remove("fade-out");
        desc.classList.remove("fade-out");
        points.classList.remove("fade-out");
        image.classList.remove("fade-out");
      }, 300);
    }
  }
});
