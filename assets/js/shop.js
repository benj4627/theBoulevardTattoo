// fanger relevante HTML elementer gemmer dem i variablen shopItems. Alle elementer med klassen .cardShop
let shopItems = document.querySelectorAll('.cardShop');

// Tilføj en eventListener til kategorilinks '.shopKategorier'
document.querySelectorAll('.shopKategorier li a').forEach(link => {
    // Når man trykket på et link udføres funktionen filterProductsByCategory
    link.addEventListener('click', (event) => {
        // fanger kategori-ID'en fra det klikkede link
        let categoryId = event.target.dataset.categoryId;
        // Kalder funktionen filterProductsByCategory med den valgte kategori-ID som argument og hermed filtreres der.
        filterProductsByCategory(categoryId);
    });
});

// Funktion til filtrering baseret på kategori links
function filterProductsByCategory(categoryId) {
    // looper igennem produkter
    shopItems.forEach(item => {
        // Henter kategori-ID for det pågældende produkt
        let itemCategory = item.dataset.categoryId;
        // Hvis kategori matcher den valgte kategori eller hvis den valgte kategori er '0' (alle kategorier)
        //ændre det til display block og vises
        if (itemCategory === categoryId || categoryId === '0') {
            item.style.display = 'block';
        } else {
            // Gemmer de andre produktet ved display:none; 
            item.style.display = 'none';
        }
    });
}
