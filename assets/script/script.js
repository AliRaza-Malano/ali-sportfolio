document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed", {
      strings: ["Software Developer", "Designer", "Freelancer"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      smartBackspace: false, // disable to avoid skipping first string
      showCursor: true,
      cursorChar: "|"
    });
  });  

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});




const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});

const heroText = document.querySelector('.hero-text');
observer.observe(heroText);

// Toggle menu when hamburger is clicked
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

function hideUL(){
    const nav2 = document.getElementById("navLinks");
    nav2.classList.remove("active");
}

