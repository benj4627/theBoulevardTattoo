// fanger relevante HTML elementer gemmer dem i variablen shopItems. Alle elementer med klassen .cardShop
let blogPosts = document.querySelectorAll('.blogindlæg'); // 

// Tilføj en eventListener til kategorilinks '.shopKategorier'
document.querySelectorAll('.blogKategorier a').forEach(link => {
// Når man trykket på et link udføres funktionen filterProductsByCategory
  link.addEventListener('click', (event) => {
 //  fanger værdien, gemt i data-category-id for det klikkede kategori-filterlink, og tildeler den til variablen. categoryId bruges derefter til at identificere den valgte kategori og filtrere det rigtige blogindlæg.k
    let categoryId = event.target.dataset.categoryId;
    // Kalder funktionen filterProductsByCategory med den valgte kategori-ID som argument og hermed filtreres der.
    filterBlogPostsByCategory(categoryId);
  });
});

// Funktion til filtrering baseret på kategori links
function filterBlogPostsByCategory(categoryId) {
// looper igennem produkter
  blogPosts.forEach(post => {
     // Henter kategori-ID for det pågældende produkt
    let postCategoryId = post.dataset.categoryId;
    // Hvis kategori ID matcher den valgte kategori eller hvis den valgte kategori er '0' (alle kategorier)
        //ændre det til display flex og vises
    if (postCategoryId === categoryId || categoryId === '0') {
      post.style.display = 'flex';
    } else {
         // Gemmer de andre produkter som ikke matcher kategori ID ved display:none; 
      post.style.display = 'none';
    }
  });
}