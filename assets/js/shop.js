let shopItems = document.querySelectorAll('.cardShop');

document.querySelectorAll('.shopKategorier li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    let categoryId = parseInt(event.target.dataset.categoryId, 10);
        filterProductsByCategory(categoryId);
    });
});

function filterProductsByCategory(categoryId) {
    shopItems.forEach(item => {
    let itemCategory = parseInt(item.dataset.categoryId, 10);
        if (itemCategory === categoryId || categoryId === 0) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}