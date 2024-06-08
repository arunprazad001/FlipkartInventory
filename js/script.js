document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const productForm = document.getElementById('product-form');
    const messageContainer = document.getElementById('message');

    const categories = ['trousers', 'shoes', 'tshirts'];

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const categoryName = categorySelect.value;
        const productName = document.getElementById('product-name').value;
        addProduct(categoryName, productName);
    });

    function addProduct(category, productName) {
        const products = JSON.parse(localStorage.getItem(category)) || [];
        products.push(productName);
        localStorage.setItem(category, JSON.stringify(products));
        showMessage(`Product added successfully!`);
    }

    function showMessage(message) {
        messageContainer.textContent = message;
        setTimeout(() => {
            messageContainer.textContent = '';
        }, 3000); // Clear message after 3 seconds
    }
});
