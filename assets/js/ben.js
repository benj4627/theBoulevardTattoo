const baseUrl = 'https://theboulevardtattoo.xn--dittebrgesen-0jb.dk/wp-json/wp/v2/';

function fetchKunsterID(id) {
  fetch(baseUrl + 'posts/' + id)
    .then(response => response.json())
    .then(post => {
      renderPost(post);
    })
    .catch(error => {
      console.error('An error occurred', error);
    });
}

function renderPost(post) {
  const kunsterTextAboutEl = document.querySelector('.kunsterTextAbout');
  const heroH1KunsterEl = document.querySelector('#benHeaderContainer');
  const navn = post.acf.navn;
  const alder = post.acf.alder;
  const fun_fact = post.acf.fun_fact;
  const stilart = post.acf.stilart;
  const om_personen = post.acf.om_personen;
  const erfaring = post.acf.erfaring;

  heroH1KunsterEl.innerHTML = `
  <h1 class="heroH1">${navn}</h1>
`;

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

// Fetch information for the person with ID 70 when the page loads
fetchKunsterID(70);