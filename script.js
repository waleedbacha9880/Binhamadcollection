// ============================================
// PRODUCT DATA
// ============================================
const products = [
    {
        id: 1,
        name: 'Hair Fall Solution Shampoo',
        vendor: 'VITAPLEKX™',
        price: 1299,
        originalPrice: 1999,
        image: '🧴',
        description: 'Deep moisturizing shampoo with multivitamins to reduce hair fall.',
        size: '300 ml'
    },
    {
        id: 2,
        name: 'Breakage Fighter Conditioner',
        vendor: 'VITAPLEKX™',
        price: 1499,
        originalPrice: 2199,
        image: '💧',
        description: 'Helps control breakage 98% with multi-vitamins.',
        size: '300 ml'
    },
    {
        id: 3,
        name: 'Keratin Hair Care Serum',
        vendor: 'VITAPLEKX™',
        price: 999,
        originalPrice: 1499,
        image: '✨',
        description: 'Repairs damage hair, solves split ends with keratin & collagen.',
        size: '50 ml'
    },
    {
        id: 4,
        name: 'Black Shine Damage Repair',
        vendor: 'VITAPLEKX™',
        price: 1399,
        originalPrice: 1999,
        image: '🖤',
        description: 'Restores shine and repairs damaged hair completely.',
        size: '300 ml'
    },
    {
        id: 5,
        name: 'Complete Care Set (3-Step)',
        vendor: 'VITAPLEKX™',
        price: 3499,
        originalPrice: 4997,
        image: '🎁',
        description: 'Full 3-step care system for complete hair transformation.',
        size: '300ml + 300ml + 50ml'
    },
    {
        id: 6,
        name: 'VITAPLEKX™ Premium System',
        vendor: 'VITAPLEKX™',
        price: 3999,
        originalPrice: 5499,
        image: '🏆',
        description: 'Complete hair care system with all VITAPLEKX™ benefits.',
        size: '300ml + 300ml + 50ml'
    }
];

// ============================================
// CART
// ============================================
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
    showToast(`${product.name} added to cart!`);
    
    // Button feedback
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

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// RENDER PRODUCTS
// ============================================
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-image">
                <span style="font-size: 4rem;">${p.image}</span>
            </div>
            <h3>${p.name}</h3>
            <p class="vendor">${p.vendor}</p>
            <div>
                <span class="price">Rs. ${p.price.toLocaleString()}</span>
                <span class="old-price">Rs. ${p.originalPrice.toLocaleString()}</span>
            </div>
            <button class="btn-add" data-id="${p.id}" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

function renderAllProducts() {
    const grid = document.getElementById('allProductsGrid');
    if (!grid) return;

    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-image">
                <span style="font-size: 4rem;">${p.image}</span>
            </div>
            <h3>${p.name}</h3>
            <p class="vendor">${p.vendor} · ${p.size}</p>
            <p style="font-size: 0.85rem; color: #666; margin: 8px 0;">${p.description}</p>
            <div>
                <span class="price">Rs. ${p.price.toLocaleString()}</span>
                <span class="old-price">Rs. ${p.originalPrice.toLocaleString()}</span>
            </div>
            <button class="btn-add" data-id="${p.id}" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

// ============================================
// RENDER CART ITEMS
// ============================================
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
                <a href="products.html" class="btn-primary" style="margin-top: 15px; display: inline-block;">Browse Products</a>
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
                    <span style="font-size: 2.5rem;">${item.image}</span>
                </div>
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p style="font-size: 0.8rem; color: #999;">${item.size}</p>
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

    if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;

    // Update WhatsApp order link
    const whatsappBtn = document.querySelector('.cart-summary .btn-primary');
    if (whatsappBtn) {
        let message = 'Hi Bin Hamad Collection, I want to order:%0A';
        cart.forEach(item => {
            message += `- ${item.name} (${item.size}) x ${item.qty} = Rs. ${(item.price * item.qty).toLocaleString()}%0A`;
        });
        message += `%0ATotal: Rs. ${subtotal.toLocaleString()}%0A%0ADelivery Address: [Your Address Here]%0APhone: [Your Phone Here]`;
        whatsappBtn.href = `https://wa.me/923001234567?text=${message}`;
    }
}

// ============================================
// HAMBURGER MENU
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('open');
        });
    }

    // ============================================
    // CONTACT FORM
    // ============================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            const whatsappMsg = `Hi Bin Hamad Collection,%0AMy name is: ${name}%0AMy email: ${email}%0AMessage: ${message}`;
            window.open(`https://wa.me/923001234567?text=${whatsappMsg}`, '_blank');
            
            showToast('Message sent via WhatsApp!');
            this.reset();
        });
    }

    // ============================================
    // SOCIAL MEDIA LINKS - CONFIGURE HERE
    // ============================================
    // Replace the '#' with your actual social media URLs
    const socialLinks = {
        facebook: 'https://facebook.com/yourpage',
        instagram: 'https://instagram.com/yourpage',
        youtube: 'https://youtube.com/yourchannel',
        tiktok: 'https://tiktok.com/@yourpage'
    };

    // Update Facebook link
    const fbLinks = document.querySelectorAll('#fbLink, .footer-socials a:first-child');
    fbLinks.forEach(el => {
        if (el) el.href = socialLinks.facebook;
    });

    // Update Instagram link
    const igLinks = document.querySelectorAll('#igLink, .footer-socials a:nth-child(2)');
    igLinks.forEach(el => {
        if (el) el.href = socialLinks.instagram;
    });

    // Update YouTube link
    const ytLinks = document.querySelectorAll('#ytLink, .footer-socials a:nth-child(3)');
    ytLinks.forEach(el => {
        if (el) el.href = socialLinks.youtube;
    });

    // Update TikTok link
    const ttLinks = document.querySelectorAll('#ttLink, .footer-socials a:nth-child(4)');
    ttLinks.forEach(el => {
        if (el) el.href = socialLinks.tiktok;
    });

    // ============================================
    // INIT
    // ============================================
    loadCart();
    renderProducts();
    renderAllProducts();
    renderCartItems();
});

// ============================================
// WHATSAPP NUMBER - UPDATE THIS
// ============================================
const WHATSAPP_NUMBER = '923001234567'; // Change to your number

// Update all WhatsApp links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
        el.href = el.href.replace('923001234567', WHATSAPP_NUMBER);
    });
});

// ============================================
// PRODUCT PAGE RENDER (for products.html)
// ============================================
// This is already handled by renderAllProducts()
// Just make sure products.html has <div id="allProductsGrid"></div>