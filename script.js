// MOBILE MENU CLOSE ON LINK CLICK

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navToggle.checked = false;
  });
});

// NAVBAR SHADOW ON SCROLL

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }

});

// SCROLL REVEAL ANIMATION

const sections = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add("hidden");
  revealObserver.observe(section);
});

// ACTIVE NAVBAR LINK ON SCROLL

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  document.querySelectorAll("section").forEach(section => {

    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});