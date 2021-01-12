/* TOGGLE HAMBURGER */

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/* ACTIVE AND REMOVE MENU */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // remove menu for mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

let spanA = document.querySelectorAll(".spanA");
let navBar = document.querySelector(".headerOne");
window.onload = () => {
  function removeNone() {
    console.log("weh");
    navBar.classList.remove("none");
  }

  setTimeout(removeNone, 500);
  $(".wrap-loader").fadeOut("slow");
  console.log("onload test");
  let spanA = document.querySelectorAll(".spanA");
  for (let i = 0; i < spanA.length; i++) {
    spanA[i].classList.add("in");
    console.log("onload test");
    setTimeout(removeAni, 1000);
    function removeAni() {
      spanA[i].classList.remove("out");
      spanA[i].classList.remove("in");
      console.log("taeka");
    }
  }
};

for (let i = 0; i < spanA.length; i++) {
  spanA[i].addEventListener("mouseover", function () {
    spanA[i].classList.add("in");
    console.log("test");
    spanA[i].classList.remove("out");
  });

  spanA[i].addEventListener("mouseout", function () {
    spanA[i].classList.add("out");
    setTimeout(removeAni, 1000);
    // spanA[i].classList.remove("in");
  });

  function removeAni() {
    spanA[i].classList.remove("out");
    spanA[i].classList.remove("in");
    console.log("taeka");
  }

  //   setInterval(spanA[i].classList.remove("in"), 3000);
}

sr.reveal(".contact__input", {});
sr.reveal(".contact__button", { delay: 100 });
sr.reveal(".skills__names", { delay: 400 });
