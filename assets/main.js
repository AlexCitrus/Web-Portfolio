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
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

let spanA = document.querySelectorAll(".spanA");
let imgA = document.querySelector(".home__img");
//   result;
// for (let i = 0; i < spanA.length; i++) {
//   result = spanA[i];
//   result.addEventListener("mouseover", function () {
//     result.classList.add("in");
//     console.log("test");
//     result.classList.remove("out");
//   });

// result.addEventListener("mouseout", function () {
//   result.classList.add("out");
// });
// }

imgA.addEventListener("mouseover", function () {
  imgA.classList.add("in");
  imgA.classList.remove("out");
});

imgA.addEventListener("mouseout", function () {
  imgA.classList.add("out");
  setTimeout(removeaniImg, 1000);
});
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
    // if (spanA == "in") {
    //   spanA[i].classList.remove("in");
    // } else if (spanA == "out") {
    //   spanA[i].classList.remove("out");
    // } else if (spanA == "in out") {
    //   spanA[i].classList.remove("in out");
    // }
    spanA[i].classList.remove("out");
    spanA[i].classList.remove("in");
    console.log("taeka");
  }

  setInterval(spanA[i].classList.remove("in"), 3000);
}

function removeaniImg() {
  imgA.classList.remove("out");
  imgA.classList.remove("in");
}

sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 400 });

sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 200 });
sr.reveal(".about__text", { delay: 400 });

sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", { delay: 200 });
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 400 });

sr.reveal(".projects__img", { interval: 200 });

sr.reveal(".contact__input", { interval: 200 });

// particlesJS("particles-js", {
//   particles: {
//     number: { value: 80, density: { enable: true, value_area: 800 } },
//     color: { value: "#ffffff" },
//     shape: {
//       type: "circle",
//       stroke: { width: 0, color: "#000000" },
//       polygon: { nb_sides: 5 },
//       image: { src: "img/github.svg", width: 100, height: 100 },
//     },
//     opacity: {
//       value: 0.5,
//       random: false,
//       anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
//     },
//     size: {
//       value: 3,
//       random: true,
//       anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
//     },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 6,
//       direction: "none",
//       random: false,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: { enable: false, rotateX: 600, rotateY: 1200 },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: { enable: true, mode: "repulse" },
//       onclick: { enable: true, mode: "push" },
//       resize: true,
//     },
//     modes: {
//       grab: { distance: 400, line_linked: { opacity: 1 } },
//       bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
//       repulse: { distance: 200, duration: 0.4 },
//       push: { particles_nb: 4 },
//       remove: { particles_nb: 2 },
//     },
//   },
//   retina_detect: true,
// });
