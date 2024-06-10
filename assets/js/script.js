//Fanger de relevante HTML elementer 
const chatIconEl = document.querySelector("#contactIcon");
const contactFormEl = document.querySelector(".contactFormSticky");
const burgerIcon = document.querySelector(".burgerMenuIcon");
const notificationsEl = document.querySelector(".subMenu");
const crossContactEl = document.querySelector("#contactFormClose"); 

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
notificationsEl.classList.toggle("subMenuOpen");
});

// hamburger menu js slut
