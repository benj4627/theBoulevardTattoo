// gemmer wordpress rest API i variabel
const baseUrl = 'https://theboulevardtattoo.xn--dittebrgesen-0jb.dk/wp-json/wp/v2/'; // Grundlæggende URL for WordPress REST API

// Funktion til at hente kunstnerinformation baseret på relevante ID for den specifikke kunster
function fetchKunsterID(id) {
  // Henter data fra WordPress API for det angivne kunstner-ID
  fetch(baseUrl + 'posts/' + id)
    // Håndter succesfuldt svar
    .then(response => response.json())
    .then(post => {
      // Render kunstnerinformationen på siden
      renderPost(post);
    })
    // Fejlhåndtering, hvis det skulle opstå under fetch
    .catch(error => {
      console.error('Der skete en fejl:', error);
    });
}

// Funktion til at vise kunstnerinformation på siden
function renderPost(post) {
  // fannger de HTML-elementer, hvor kunstnerinformationen skal vises
  const kunsterTextAboutEl = document.querySelector('.kunsterTextAbout');
  const heroH1KunsterEl = document.querySelector('#benHeaderContainer');

  // Henter den kunstnerinformation vi skal bruge fra objektet i API
  const navn = post.acf.navn; // Kunstnerens navn
  const alder = post.acf.alder; // Kunstnerens alder
  const fun_fact = post.acf.fun_fact; // Kunstnerens fun fact
  const stilart = post.acf.stilart; // Kunstnerens stil
  const om_personen = post.acf.om_personen; // Beskrivelse af kunstneren
  const erfaring = post.acf.erfaring; // Kunstnerens erfaring

  // Opdatere kunstnerens H1 navn dynamisk
  heroH1KunsterEl.innerHTML = `
    <h1 class="heroH1">${navn}</h1>
  `;

  // Opdater kunstnerens informationer dynamisk med innerHTML
  kunsterTextAboutEl.innerHTML = `
    <div class="kunsterTextAbout">
      <h3 class="alder">Alder</h3>
      <p>${alder}</p>
      <h3 class="erfaring">Erfaring</h3>
      <p>${erfaring}</p>
      <h3 class="stilart">Stilart</h3>
      <p>${stilart}</p>
      <h3 class="funFact">Fun Fact</h3>
      <p>${fun_fact}</p>
      <h3 class="OmKunster">Om Benjamin</h3>
      <p>
        ${om_personen}
      </p>
    </div>
  `;
}

// kalder funktionen fetchKunsterID med argumentet 70, som er det korrekte ID for den relevante kunster
fetchKunsterID(70);
