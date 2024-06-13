//Fanger de relevante HTML elementer 
const chatIconEl = document.querySelector("#contactIcon");
const contactFormEl = document.querySelector(".contactFormSticky");
const crossMenuIcon = document.querySelector('.closeMenuIcon')
const burgerIcon = document.querySelector(".burgerMenuIcon");
const subMenuEl = document.querySelector(".subMenu");
const subMenuMobilEl = document.querySelector(".subMenuMobil");
const crossContactEl = document.querySelector("#contactFormClose"); 
const mobilBurgerIconEl = document.querySelector(".burgerMenuIconMobil");

//tilføjer en addeventListener click til vores chat ikon.
//herefter tildeles contactFormActive class, som ændrer opacity fra 0-1 og derfor er kontaktformen synlig. 
chatIconEl.addEventListener("click", () => {
  contactFormEl.classList.toggle("contactFormActive");
});

//Det samme som ovenover, men her tilføjes der addeventlistenere til "krydset" som toggler active classen. 
crossContactEl.addEventListener("click", () => {
  contactFormEl.classList.toggle("contactFormActive");
});


// hamburger menu js start 
burgerIcon.addEventListener("click", () => {
  subMenuEl.classList.toggle("subMenuOpen");
});

mobilBurgerIconEl.addEventListener("click", () => {
  subMenuMobilEl.classList.toggle("subMenuOpen");
});