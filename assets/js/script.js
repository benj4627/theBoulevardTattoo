baseUrl = 'https://theboulevardtattoo.xn--dittebrgesen-0jb.dk/wp-json/wp/v2/'

function fetchKunster() {
  fetch(baseUrl + 'posts'
  )
    .then(response => response.json())
    .then(posts => {
      console.log(posts);
      renderPosts(posts);
    })
    .catch(error => {
      console.error('Der opstod en fejl', error);
    });
}

function renderPosts(posts) {
const postsContainer = document.getElementById('posts-container');
posts.forEach(post => {
  const postElement = document.createElement('div');
  postElement.classList.add('post');
  postElement.innerHTML = `
    <h2>${post.title.rendered}</h2>
    <div>${post.acf.tekst_1}</div>
    <div>${post.acf.tekst_2}</div>
    <div>${post.acf.tekst_3}</div>
  `;
  postsContainer.appendChild(postElement);
});
}

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