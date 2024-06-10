const chatIconEl = document.querySelector("#contactIcon");
const contactFormEl = document.querySelector(".contactFormSticky");
const burgerIcon = document.querySelector(".burgerMenuIcon");
const notificationsEl = document.querySelector(".subMenu");
const crossContactEl = document.querySelector("#contactFormClose"); 


chatIconEl.addEventListener("click", () => {
  contactFormEl.classList.toggle("contactFormActive");
});

crossContactEl.addEventListener("click", () => {
  contactFormEl.classList.toggle("contactFormActive");
});


// hamburger menu js start 
burgerIcon.addEventListener("click", () => {
notificationsEl.classList.toggle("subMenuOpen");
});


// hamburger menu js slut
