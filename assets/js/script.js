
//fanger de relevante HTML elementer
let visibleAnimEl = document.querySelectorAll(".slideinAnim");
//Sætter en værdi for hvor langt man scroller før function aktiverer. 
let scrollThreshold = 50;

function toggleClassScroll() {
  //tilføjer eventListnere som lytter efter scroll-begivenheden. Når brugeren scroller siden, udføres funktionen.
  window.addEventListener("scroll", function() {
    //Tjekker, om den aktuelle scroll position (window.scrollY) er større end  det tilladte scrollThreshold på 100
    if (window.scrollY > scrollThreshold) {
      //Gennemgår HTML elementer isibleAnimEl og tilføjer klassen animationVisible. 
      visibleAnimEl.forEach(container => {
        container.classList.add("animationVisible");
      });
    }
  });
};
//kalder function når siden loader, for at tjekke scroll position
toggleClassScroll();

// hamburger menu js start 
 
const burgerIcon = document.querySelector(".burgerMenuIcon");
const notificationsEl = document.querySelector(".subMenu");


burgerIcon.addEventListener("click", () => {
notificationsEl.classList.toggle("subMenuOpen");
});

// hamburger menu js slut

//chat funktion

const chatIconEl = document.querySelector("#contactIcon");
const contactFormEl = document.querySelector(".contactFormSticky");

chatIconEl.addEventListener("click", () => {
    contactFormEl.classList.toggle("contactFormActive");
});
