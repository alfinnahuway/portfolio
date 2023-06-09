const navbar = document.querySelector(".navbar");
const linkNav = document.querySelectorAll(".link-nav");
const sec = document.querySelectorAll("section");
const navLogo = document.querySelector(".navbar-logo");
const navStars = document.querySelector(".stars-logo");

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

// HOVER LOGO
navLogo.addEventListener("mouseover", () => {
  navLogo.style.color = "#bfbfbf";
  navStars.setAttribute("src", "./images/stars2.png");
});
navLogo.addEventListener("mouseleave", () => {
  navLogo.style.color = "#fff";
  navStars.setAttribute("src", "./images/stars.png");
});

// HOVER RESUME
const resume = document.querySelector(".bg-resume");
const resumeLink = document.querySelector(".resume .root a");
const le = document.querySelector(
  ".experience .content .list .list-experience"
);

resumeLink.addEventListener("mouseover", () => {
  resume.classList.add("blur-off");
  le.classList.add("glow");
});
resumeLink.addEventListener("mouseleave", () => {
  resume.classList.remove("blur-off");
  le.classList.remove("glow");
});
