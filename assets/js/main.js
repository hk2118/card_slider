/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let opt5 = document.getElementById("opt5");
let opt6 = document.getElementById("opt6");
let network = document.getElementById("network");
let web = document.getElementById("web");
let database = document.getElementById("database");
let science = document.getElementById("science");
let program = document.getElementById("program");
let test = document.getElementById("test");
opt1.addEventListener("click", function () {
  network.style.display = "block";
  database.style.display = "none";
  science.style.display = "none";
  program.style.display = "none";
  test.style.display = "none";
});

opt2.addEventListener("click", function () {
  network.style.display = "none";
  database.style.display = "none";
  science.style.display = "none";
  program.style.display = "none";
  test.style.display = "none";
  web.style.display = "block";
});
opt3.addEventListener("click", function () {
  network.style.display = "none";
  web.style.display = "none";
  science.style.display = "none";
  program.style.display = "none";
  test.style.display = "none";
  database.style.display = "block";
});
opt4.addEventListener("click", function () {
  network.style.display = "none";
  web.style.display = "none";
  database.style.display = "none";
  program.style.display = "none";
  test.style.display = "none";
  science.style.display = "block";
});
opt5.addEventListener("click", function () {
  network.style.display = "none";
  web.style.display = "none";
  database.style.display = "none";
  science.style.display = "none";
  test.style.display = "none";
  program.style.display = "block";
});
opt6.addEventListener("click", function () {
  network.style.display = "none";
  web.style.display = "none";
  database.style.display = "none";
  science.style.display = "none";
  program.style.display = "none";
  test.style.display = "block";
});
