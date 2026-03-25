const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initial Render
function displayProducts(items) {
    productGrid.innerHTML = items.map(product => `
        <div class="card">
            <img src="${product.image}" alt="${product.name}" class="card-img">
            <div class="card-content">
                <h3 class="card-title">${product.name}</h3>
                <div class="price-row">
                    <span>Amazon: ${product.amazonPrice}</span>
                </div>
                <div class="price-row">
                    <span>Flipkart: <span class="best-deal">${product.flipkartPrice}</span></span>
                </div>
                <a href="${product.link}" target="_blank" class="buy-btn">View Best Deal</a>
            </div>
        </div>
    `).join('');
}

// Search Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    displayProducts(filtered);
});

// Category Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active UI
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-cat');
        if(cat === 'all') {
            displayProducts(products);
        } else {
            const filtered = products.filter(p => p.category === cat);
            displayProducts(filtered);
        }
    });
});

// Run on load
displayProducts(products);
