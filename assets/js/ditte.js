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
  const instaIkonEl = document.querySelector('.instaIcon');

  const navn = post.acf.navn;
  const alder = post.acf.alder;
  const fun_fact = post.acf.fun_fact;
  const stilart = post.acf.stilart;
  const om_personen = post.acf.om_personen;
  const erfaring = post.acf.erfaring;
  const instagram = post.acf.instagram;
  const kunsterBillede = post.acf.kunstnere_billede5;

  instaIkonEl.innerHTML = `
  <a href="https://www.instagram.com/ben.nielsenn" target="_blank">
                <i class="fa-brands fa-instagram"></i>
                <h3>${instagram}</h3>
              </a>
`; 

  heroH1KunsterEl.innerHTML = `
  <h1 class="heroH1">${navn}</h1>
`;

  kunsterTextAboutEl.innerHTML = `
            <h3 class="alder">Alder</h3>
            <p>${alder}</p>
            <h3 class="erfaring">Erfaring</h3>
            <p>${erfaring}</p>
            <h3 class="stilart">Stilart</h3>
            <p>${stilart}</p>
            <h3 class="funFact">Fun Fact</h3>
            <p>${fun_fact}</p>
            <h3 class="OmKunster">Om ${navn}</h3>
            <p>
            ${om_personen}
            </p>
          </div>
  `;
}

// Fetch information for the person with ID 70 when the page loads
fetchKunsterID(73);