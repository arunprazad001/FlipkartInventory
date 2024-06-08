document.addEventListener('DOMContentLoaded', () => {
    const productTable = document.getElementById('product-table');

    function loadProducts() {
        const products = JSON.parse(localStorage.getItem('trousers')) || [];
        const tbody = document.getElementById('product-list');
        tbody.innerHTML = '';
        products.forEach((product, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${product}</td>
                <td><button data-index="${index}">Remove</button></td>
            `;
            tr.querySelector('button').addEventListener('click', () => {
                removeProduct(index);
            });
            tbody.appendChild(tr);
        });
    }

    function removeProduct(index) {
        const products = JSON.parse(localStorage.getItem('trousers')) || [];
        products.splice(index, 1);
        localStorage.setItem('trousers', JSON.stringify(products));
        loadProducts();
    }

    loadProducts();
});
