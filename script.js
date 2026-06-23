// ============================================
// PRODUCT DATA - COMPLETE
// ============================================

// SET 1: VITAPLEKX Complete Hair Care Kit – Deep Conditioning Damage Repair & Black Shine Set
// Includes: Shampoo + Conditioner + Serum

// SET 2: VITAPLEKX Complete Hair Care Kit – 3-Step Deep Conditioning & Anti-Hair Fall Treatment Set
// Includes: Hair Fall Shampoo + Breakage Fighter Conditioner + Keratin Serum

// INDIVIDUAL PRODUCTS:
// 1. VITAPLEKX Breakage Fighter Conditioner – Multi-Vitamin Strengthening & Repair Treatment
// 2. VITAPLEKX Hair Care Serum – Collagen Crystal & Keratin Repair Treatment
// 3. VITAPLEKX Black Shine Damage Repair Shampoo – Restorative Gloss & Strengthening Formula
// 4. VITAPLEKX Hair Fall Control Shampoo with Natural Nourishing Oils

const products = [
    // ===== SET 1 =====
    {
        id: 1,
        name: 'VITAPLEKX Complete Hair Care Kit',
        subtitle: 'Deep Conditioning Damage Repair & Black Shine Set',
        type: 'set',
        price: 3499,
        originalPrice: 4999,
        image: 'images/set1.jpg',
        imageEmoji: '🎁',
        description: 'A complete 3-step hair care system designed to deeply condition, repair damage, and restore shine. This set includes:',
        size: '300ml + 300ml + 50ml',
        includes: [
            'Lustrous Shine Shampoo with 10 Nourishing Oils (300ml)',
            'Breakage Fighter Conditioner with Multi-Vitamins (300ml)',
            'Keratin Serum for Damage Repair & Split Ends (50ml)'
        ],
        benefits: [
            'Deeply conditions and repairs damaged hair',
            'Restores natural shine and luster',
            'Controls breakage up to 98%',
            'Nourishes with 10 essential oils',
            'Suitable for all hair types'
        ],
        badge: 'Best Seller',
        discount: 30
    },

    // ===== SET 2 =====
    {
        id: 2,
        name: 'VITAPLEKX Complete Hair Care Kit',
        subtitle: '3-Step Deep Conditioning & Anti-Hair Fall Treatment Set',
        type: 'set',
        price: 3699,
        originalPrice: 5199,
        image: 'images/set2.jpg',
        imageEmoji: '🎁',
        description: 'A powerful anti-hair fall treatment system that deeply conditions and strengthens hair from root to tip. This set includes:',
        size: '300ml + 300ml + 50ml',
        includes: [
            'Hair Fall Control Shampoo with Natural Nourishing Oils (300ml)',
            'Breakage Fighter Conditioner with Multi-Vitamins (300ml)',
            'Keratin Serum for Damage Repair & Split Ends (50ml)'
        ],
        benefits: [
            'Controls hair fall and promotes growth',
            'Strengthens hair with multi-vitamins',
            'Repairs damage and split ends',
            'Deep conditioning for all hair types',
            '98% breakage control'
        ],
        badge: 'Anti-Hair Fall',
        discount: 29
    },

    // ===== INDIVIDUAL PRODUCTS =====
    {
        id: 3,
        name: 'VITAPLEKX Breakage Fighter Conditioner',
        subtitle: 'Multi-Vitamin Strengthening & Repair Treatment',
        type: 'individual',
        price: 1499,
        originalPrice: 2199,
        image: 'images/conditioner.jpg',
        imageEmoji: '💧',
        description: 'A powerful strengthening conditioner formulated with multi-vitamins to repair damaged hair, prevent breakage, and restore health.',
        size: '300ml',
        includes: [
            'Multi-Vitamin complex for hair strength',
            'Repairs damage from root to tip',
            'Controls breakage up to 98%'
        ],
        benefits: [
            'Strengthens hair with multi-vitamins',
            'Repairs damage and prevents split ends',
            'Controls breakage up to 98%',
            'Restores hair health and vitality',
            'Suitable for all hair types'
        ],
        badge: '98% Breakage Control',
        discount: 32
    },
    {
        id: 4,
        name: 'VITAPLEKX Hair Care Serum',
        subtitle: 'Collagen & Keratin Repair Treatment',
        type: 'individual',
        price: 999,
        originalPrice: 1499,
        image: 'images/serum.jpg',
        imageEmoji: '✨',
        description: 'A luxurious serum with collagen and keratin that deeply repairs damage, restores shine, and protects hair from environmental stressors.',
        size: '50ml',
        includes: [
            'Collagen for hair strength and elasticity',
            'Keratin for damage repair',
            'Antioxidants for protection'
        ],
        benefits: [
            'Repairs damage and split ends',
            'Restores natural shine and softness',
            'Protects from environmental damage',
            'Strengthens with collagen & keratin',
            'Lightweight and non-greasy'
        ],
        badge: 'Repair & Shine',
        discount: 33
    },
    {
        id: 5,
        name: 'VITAPLEKX Black Shine Damage Repair Shampoo',
        subtitle: 'Restorative Gloss & Strengthening Formula',
        type: 'individual',
        price: 1399,
        originalPrice: 1999,
        image: 'images/black-shine.jpg',
        imageEmoji: '🖤',
        description: 'A restorative shampoo that repairs damage while adding brilliant shine and strength to dull, damaged hair.',
        size: '300ml',
        includes: [
            '10 Nourishing Oils for deep conditioning',
            'Damage repair formula',
            'Shine enhancing complex'
        ],
        benefits: [
            'Repairs and restores damaged hair',
            'Adds brilliant shine and luster',
            'Strengthens with nourishing oils',
            'Deeply conditions hair',
            'Suitable for all hair types'
        ],
        badge: 'Restorative Gloss',
        discount: 30
    },
    {
        id: 6,
        name: 'VITAPLEKX Hair Fall Control Shampoo',
        subtitle: 'With Natural Nourishing Oils',
        type: 'individual',
        price: 1299,
        originalPrice: 1899,
        image: 'images/hair-fall-shampoo.jpg',
        imageEmoji: '🧴',
        description: 'A deeply nourishing shampoo with natural oils that controls hair fall, promotes growth, and leaves hair feeling healthy and strong.',
        size: '300ml',
        includes: [
            'Natural Nourishing Oils blend',
            'Anti-hair fall formula',
            '10 essential nutrients'
        ],
        benefits: [
            'Controls hair fall and promotes growth',
            'Nourishes with natural oils',
            'Strengthens hair from root to tip',
            'Deeply cleanses the scalp',
            'Suitable for all hair types'
        ],
        badge: 'Anti-Hair Fall',
        discount: 32
    }
];

// ===== CART =====
let cart = [];

function loadCart() {
    const saved = localStorage.getItem('binhamad_cart');
    if (saved) {
        cart = JSON.parse(saved);
    }
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('binhamad_cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    showToast(product.name + ' added to cart!');

    const btns = document.querySelectorAll('.btn-add');
    btns.forEach(btn => {
        if (btn.dataset.id == productId) {
            btn.classList.add('added');
            btn.textContent = '✓ Added';
            setTimeout(() => {
                btn.classList.remove('added');
                btn.textContent = 'Add to Cart';
            }, 2000);
        }
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCartItems();
}

function updateQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    saveCart();
    renderCartItems();
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
    });
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

// ===== TOAST =====
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== PRODUCT DETAIL PAGE =====
function viewProduct(productId) {
    window.location.href = 'product-detail.html?id=' + productId;
}

function loadProductDetail() {
    const container = document.getElementById('productDetailContent');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        container.innerHTML = `
            <div style="text-align:center;padding:60px 0;">
                <i class="fas fa-exclamation-circle" style="font-size:3rem;color:#C9A84C;display:block;margin-bottom:15px;"></i>
                <h2>Product Not Found</h2>
                <p style="color:#666;">The product you're looking for doesn't exist.</p>
                <a href="products.html" class="btn-primary" style="margin-top:20px;display:inline-block;">Browse Products</a>
            </div>
        `;
        return;
    }

    const isSet = product.type === 'set';
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    container.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size:8rem;\\'>${product.imageEmoji}</span>'" />
                ${product.badge ? `<span class="detail-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-detail-info">
                <h1>${product.name}</h1>
                <p class="product-subtitle">${product.subtitle}</p>
                <div class="product-detail-price">
                    <span class="price">Rs. ${product.price.toLocaleString()}</span>
                    <span class="old-price">Rs. ${product.originalPrice.toLocaleString()}</span>
                    <span class="discount-badge">${discount}% OFF</span>
                </div>
                <p class="product-size"><i class="fas fa-weight-hanging"></i> ${product.size}</p>
                
                <div class="product-description">
                    <h3>Description</h3>
                    <p>${product.description}</p>
                </div>

                ${isSet ? `
                    <div class="product-includes">
                        <h3>What's Included</h3>
                        <ul>
                            ${product.includes.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('')}
                        </ul>
                    </div>
                ` : `
                    <div class="product-includes">
                        <h3>Key Features</h3>
                        <ul>
                            ${product.includes.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('')}
                        </ul>
                    </div>
                `}

                <div class="product-benefits">
                    <h3>Benefits</h3>
                    <ul>
                        ${product.benefits.map(b => `<li><i class="fas fa-star"></i> ${b}</li>`).join('')}
                    </ul>
                </div>

                <div class="product-detail-actions">
                    <button class="btn-primary" onclick="addToCart(${product.id})" style="flex:1;text-align:center;">
                        <i class="fas fa-shopping-bag"></i> Add to Cart
                    </button>
                    <a href="https://wa.me/923128796581?text=Hi%20Bin%20Hamad%20Collection%2C%20I%20want%20to%20order%20${encodeURIComponent(product.name)}%20(${product.size})" 
                       target="_blank" 
                       class="btn-whatsapp" style="flex:1;text-align:center;justify-content:center;">
                        <i class="fab fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    `;
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    // Show individual products only (not sets) on homepage
    const individualProducts = products.filter(p => p.type === 'individual');

    grid.innerHTML = individualProducts.map(p => `
        <div class="product-card" onclick="viewProduct(${p.id})">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size:4rem;\\'>${p.imageEmoji}</span>'" />
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            </div>
            <h3>${p.name}</h3>
            <p class="vendor">${p.subtitle.substring(0, 40)}...</p>
            <div>
                <span class="price">Rs. ${p.price.toLocaleString()}</span>
                <span class="old-price">Rs. ${p.originalPrice.toLocaleString()}</span>
            </div>
            <button class="btn-add" data-id="${p.id}" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

function renderFeaturedSets() {
    const grid = document.getElementById('featuredSets');
    if (!grid) return;

    const sets = products.filter(p => p.type === 'set');

    grid.innerHTML = sets.map(p => `
        <div class="product-card" onclick="viewProduct(${p.id})">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size:4rem;\\'>${p.imageEmoji}</span>'" />
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
                <span class="discount-flag">${p.discount}% OFF</span>
            </div>
            <h3>${p.name}</h3>
            <p class="vendor">${p.subtitle}</p>
            <p style="font-size:0.8rem;color:#999;">${p.size}</p>
            <div>
                <span class="price">Rs. ${p.price.toLocaleString()}</span>
                <span class="old-price">Rs. ${p.originalPrice.toLocaleString()}</span>
            </div>
            <button class="btn-add" data-id="${p.id}" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

function renderAllProducts() {
    const grid = document.getElementById('allProductsGrid');
    if (!grid) return;

    const individualProducts = products.filter(p => p.type === 'individual');

    grid.innerHTML = individualProducts.map(p => `
        <div class="product-card" onclick="viewProduct(${p.id})">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size:4rem;\\'>${p.imageEmoji}</span>'" />
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            </div>
            <h3>${p.name}</h3>
            <p class="vendor">${p.subtitle}</p>
            <p style="font-size:0.8rem;color:#999;">${p.size}</p>
            <div>
                <span class="price">Rs. ${p.price.toLocaleString()}</span>
                <span class="old-price">Rs. ${p.originalPrice.toLocaleString()}</span>
            </div>
            <button class="btn-add" data-id="${p.id}" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

function renderAllSets() {
    const grid = document.getElementById('allSetsGrid');
    if (!grid) return;

    const sets = products.filter(p => p.type === 'set');

    grid.innerHTML = sets.map(p => `
        <div class="product-card" onclick="viewProduct(${p.id})">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size:4rem;\\'>${p.imageEmoji}</span>'" />
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
                <span class="discount-flag">${p.discount}% OFF</span>
            </div>
            <h3>${p.name}</h3>
            <p class="vendor">${p.subtitle}</p>
            <p style="font-size:0.8rem;color:#999;">${p.size}</p>
            <div>
                <span class="price">Rs. ${p.price.toLocaleString()}</span>
                <span class="old-price">Rs. ${p.originalPrice.toLocaleString()}</span>
            </div>
            <button class="btn-add" data-id="${p.id}" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

// ===== RENDER CART ITEMS =====
function renderCartItems() {
    const container = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('totalAmount');

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <h3>Your cart is empty</h3>
                <p>Start shopping to add items to your cart.</p>
                <a href="products.html" class="btn-primary" style="margin-top:15px;display:inline-block;">Browse Products</a>
            </div>
        `;
        if (subtotalEl) subtotalEl.textContent = 'Rs. 0';
        if (totalEl) totalEl.textContent = 'Rs. 0';
        return;
    }

    let html = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        html += `
            <div class="cart-item">
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}" style="width:60px;height:60px;object-fit:contain;" onerror="this.style.display='none'; this.parentElement.textContent='${item.imageEmoji}'; this.parentElement.style.fontSize='2.5rem';" />
                </div>
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p style="font-size:0.8rem;color:#999;">${item.size}</p>
                    <p class="item-price">Rs. ${item.price.toLocaleString()}</p>
                </div>
                <div class="item-qty">
                    <button onclick="updateQty(${item.id}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button onclick="updateQty(${item.id}, 1)">+</button>
                </div>
                <button class="item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-times"></i></button>
            </div>
        `;
    });

    container.innerHTML = html;

    if (subtotalEl) subtotalEl.textContent = 'Rs. ' + subtotal.toLocaleString();
    if (totalEl) totalEl.textContent = 'Rs. ' + subtotal.toLocaleString();

    const whatsappBtn = document.querySelector('.cart-summary .btn-primary');
    if (whatsappBtn) {
        let message = 'Hi Bin Hamad Collection, I want to order:%0A';
        cart.forEach(item => {
            message += '- ' + item.name + ' (' + item.size + ') x ' + item.qty + ' = Rs. ' + (item.price * item.qty).toLocaleString() + '%0A';
        });
        message += '%0ATotal: Rs. ' + subtotal.toLocaleString() + '%0A%0ADelivery Address: [Your Address Here]%0APhone: [Your Phone Here]';
        whatsappBtn.href = 'https://wa.me/923128796581?text=' + message;
    }
}

// ===== HAMBURGER =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('open');
        });
    }

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const whatsappMsg = 'Hi Bin Hamad Collection,%0AMy name is: ' + name + '%0AMy email: ' + email + '%0AMessage: ' + message;
            window.open('https://wa.me/923128796581?text=' + whatsappMsg, '_blank');

            showToast('Message sent via WhatsApp!');
            this.reset();
        });
    }

    // ===== SOCIAL MEDIA LINKS =====
    const socialLinks = {
        facebook: 'https://facebook.com/yourpage',
        instagram: 'https://instagram.com/yourpage',
        youtube: 'https://youtube.com/yourchannel',
        tiktok: 'https://tiktok.com/@yourpage'
    };

    const fbLinks = document.querySelectorAll('.footer-socials a:nth-child(1)');
    fbLinks.forEach(el => { if (el) el.href = socialLinks.facebook; });

    const igLinks = document.querySelectorAll('.footer-socials a:nth-child(2)');
    igLinks.forEach(el => { if (el) el.href = socialLinks.instagram; });

    const ytLinks = document.querySelectorAll('.footer-socials a:nth-child(3)');
    ytLinks.forEach(el => { if (el) el.href = socialLinks.youtube; });

    const ttLinks = document.querySelectorAll('.footer-socials a:nth-child(4)');
    ttLinks.forEach(el => { if (el) el.href = socialLinks.tiktok; });

    // ===== LOAD PRODUCT DETAIL =====
    if (window.location.pathname.includes('product-detail.html')) {
        loadProductDetail();
    }

    // ===== INIT =====
    loadCart();
    renderProducts();
    renderFeaturedSets();
    renderAllProducts();
    renderAllSets();
    renderCartItems();
});
