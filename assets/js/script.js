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





// hamburger menu js slut


// fetch data fra wordpess api





/* Hent blogpost med id og placering  */

// function hentBlogPost(blogPostId, placering) {
//     fetch(urlBase + "posts/" + blogPostId) /* Fetch link med id fra den specefikke opskrift vi ønsker at hente.  */
//         console.log('fetch:', fetch)
//         .then(res => res.json())
//         .then(data => {
//             renderFuldBlogPost(data, placering) /* Kald funktionen der renderer en opskrift med dataet der bliver fetchet og hvor den skal placeres på siden  */
//         })
//         .catch(err => console.log("Noget gik galt: " + err));
// }

// function renderFuldBlogPost(blogPostId, placering) {
//     /* Brug innerHTML på placeringen sat i funktions kaldet til at indsætte indholdet. Brug funktioner til at opsætte ingredienser, fremgangmåde og tips. */
//     placering.innerHTML += `
//     <article class="opskrift">
//      <section class="opskriftInfo fullWidth">
//         <div class="text">
//             <a href="opskrifter.html" class="breadcrum">Opskrifter</a> - <a href="#" class="breadcrum">Placering</a> - <a href="#" class="breadcrum">${blogPostId.acf.overskrift_blog}</a>
//             <h2 class="opskriftNavn">${opskrift.title.rendered}</h2>
//             <div class="metadata">
//                 <p><i class="fa-regular fa-clock"></i> ${opskrift.acf.tilberedningstid}</p>
//                 <p class="italic"> ${opskrift.acf.forfatter}</p>
//             </div>
//             <p class="beskrivelse">${opskrift.acf.beskrivelse}</p>
//             <div class="ikoner">
//                 <button><i class="fa-regular fa-heart"></i> Gem</button>
//                 <button><i class="fa-solid fa-arrow-up-from-bracket"></i> Del</button>
//                 <button><i class="fa-solid fa-print"></i>Print</button>
//             </div>
//         </div>
//         <div class="imgContainer"><img src="${opskrift.acf.billede.sizes.large}"
//                 alt="${opskrift.acf.billede.alt}"></div>
//      </section>
//       <section class="opskriftAction fullWidth">
//           <div class="data">
//             <h3>Ingredienser</h3>
//             <p class="antal"><i class="fa-solid fa-minus"></i><span>${opskrift.acf.antal} </span> <i
//                     class="fa-solid fa-plus"></i></p>
//             <div class="ingredienser">
//                 <ul>
//                     ${skabIngredienser(opskrift.acf.ingredienser)}</ul>
//             </div>
//             <button class="tilfojAlle"> <i class="fa-regular fa-rectangle-list"></i> Tilføj ingredienser til
//                 indkøbslisten</button>
//           </div>
//          <div class="fremgangsmåde">
//             <h3>Fremgangsmåde</h3>
//              <ol> ${skabFremgangsmade(opskrift.acf.fremgangsmade)}</ol>
//             ${skabTip(opskrift.acf.tips)} 
//           </div>
//         </section>
//     </article>`

//     opdaterTabTitle(opskrift.title.rendered + "- Den Glade Gane") /* Kør funktionen der opdatere teksten i fanen ud, med titlen på opskriften og hjemmesiden navn  */
// }
   


// // hamburger menu js slut

