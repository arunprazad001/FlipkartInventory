document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    // Load products for shoes category
    loadProducts();

    function loadProducts() {
        const products = JSON.parse(localStorage.getItem('shoes')) || [];
        const tbody = document.getElementById('product-list');
        tbody.innerHTML = ''; // Clear existing table content
        products.forEach(product => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${product}</td>
                <td><button class="remove-btn">Remove</button></td>
            `;
            const removeBtn = tr.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                removeProduct(product);
            });
            tbody.appendChild(tr);
        });
    }

    function removeProduct(product) {
        let products = JSON.parse(localStorage.getItem('shoes')) || [];
        products = products.filter(item => item !== product);
        localStorage.setItem('shoes', JSON.stringify(products));
        loadProducts();
    }
});
