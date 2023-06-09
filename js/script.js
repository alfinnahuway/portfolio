const navbar = document.querySelector(".navbar");
const linkNav = document.querySelectorAll(".link-nav");
const sec = document.querySelectorAll("section");

const navbarNav = document.querySelector(".navbar-nav");

document.getElementById("hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("check");
};

// Click diluar sidebar untuk menghilangkan nav
const hamburgerMenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("check");
  }
});

// SROLL NAVBAR EFFECT
function sizeScroll() {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    navbarNav.classList.add("navpad");
    navbar.style.backgroundColor = "#000";
    navbar.style.transition = "background-color 0.5s linear";
  } else {
    navbarNav.classList.remove("navpad");
    navbar.style.backgroundColor = null;
  }
}

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    sizeScroll();
  }
});

window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((e) => {
    let windowHeight = window.innerHeight;
    let elementTop = e.getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });
  if (window.matchMedia("(min-width: 768px)").matches) {
    sizeScroll();
  }
});

// SCROLL ACTIVE NAV MENU
function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}

  if (len > 0) {
    linkNav.forEach((li) => li.classList.remove("active"));
    linkNav[len].classList.add("active");
  } else {
    linkNav.forEach((li) => li.classList.remove("active"));
  }
}
activeMenu();

window.addEventListener("scroll", activeMenu);

// HOVER RESUME
const resume = document.querySelector(".bg-resume");
const resumeLink = document.querySelector(".resume .root a");

resumeLink.addEventListener("mouseover", () => {
  resume.classList.add("blur-off");
});
resumeLink.addEventListener("mouseleave", () => {
  resume.classList.remove("blur-off");
});
