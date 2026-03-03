// Product Data
const PRODUCTS = [
    // ========== BIRD ITEMS ==========
    {
        id: '1',
        name: 'Premium Bird Seed Mix',
        price: 19.99,
        category: 'Bird Items',
        description: 'Nutritious blend of seeds specially formulated for parrots, canaries, and finches. Contains sunflower seeds, millet, and essential vitamins.',
        images: [
            'https://images.unsplash.com/photo-1667350520416-71d4ce60ecc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJpcmQlMjBwYXJyb3R8ZW58MXx8fHwxNzcyNTMwNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },
    {
        id: '2',
        name: 'Deluxe Bird Cage',
        price: 89.99,
        category: 'Bird Items',
        description: 'Spacious and elegant bird cage with multiple perches and feeding stations. Perfect for small to medium-sized birds. Easy to clean with removable tray.',
        images: [
            'https://images.unsplash.com/photo-1733453909018-3f1448c389c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkJTIwY2FnZSUyMHBldHxlbnwxfHx8fDE3NzI1NjY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },
    {
        id: '3',
        name: 'Bird Toy Set - 5 Pieces',
        price: 24.99,
        category: 'Bird Items',
        description: 'Colorful assortment of toys to keep your bird entertained. Includes bells, mirrors, and chewable toys. Promotes mental stimulation and exercise.',
        images: [
            'https://images.unsplash.com/photo-1667350520416-71d4ce60ecc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJpcmQlMjBwYXJyb3R8ZW58MXx8fHwxNzcyNTMwNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },
    {
        id: '4',
        name: 'Mineral Block for Birds',
        price: 8.99,
        category: 'Bird Items',
        description: 'Essential mineral supplement for healthy beak and bones. Contains calcium and trace minerals. Long-lasting and clips easily to cage.',
        images: [
            'https://images.unsplash.com/photo-1667350520416-71d4ce60ecc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJpcmQlMjBwYXJyb3R8ZW58MXx8fHwxNzcyNTMwNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },

    // ========== FISH ITEMS ==========
    {
        id: '5',
        name: 'Tropical Fish Food Flakes',
        price: 12.99,
        category: 'Fish Items',
        description: 'Premium quality flakes for all tropical fish. Enhanced with vitamins and minerals for vibrant colors. Highly digestible formula.',
        images: [
            'https://images.unsplash.com/photo-1631300692372-d96d2d13c20c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZpc2glMjBhcXVhcml1bXxlbnwxfHx8fDE3NzI1MzcwODd8MA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },
    {
        id: '6',
        name: 'Aquarium Filter System',
        price: 45.99,
        category: 'Fish Items',
        description: 'Efficient 3-stage filtration system for crystal clear water. Suitable for tanks up to 50 gallons. Quiet operation and easy to maintain.',
        images: [
            'https://images.unsplash.com/photo-1642375143840-0c7e9db07b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwdGFuayUyMGFxdWFyaXVtfGVufDF8fHx8MTc3MjUzMDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },
    {
        id: '7',
        name: 'Aquarium Decorations Set',
        price: 29.99,
        category: 'Fish Items',
        description: 'Beautiful set of aquarium decorations including plants, rocks, and ornaments. Creates a natural habitat for your fish. Safe and non-toxic.',
        images: [
            'https://images.unsplash.com/photo-1631300692372-d96d2d13c20c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZpc2glMjBhcXVhcml1bXxlbnwxfHx8fDE3NzI1MzcwODd8MA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },
    {
        id: '8',
        name: 'LED Aquarium Light',
        price: 34.99,
        category: 'Fish Items',
        description: 'Energy-efficient LED lighting with adjustable brightness. Promotes plant growth and enhances fish colors. Timer function included.',
        images: [
            'https://images.unsplash.com/photo-1642375143840-0c7e9db07b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwdGFuayUyMGFxdWFyaXVtfGVufDF8fHx8MTc3MjUzMDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },

    // ========== CAT ITEMS ==========
    {
        id: '9',
        name: 'Premium Cat Food - Salmon',
        price: 39.99,
        category: 'Cat Items',
        description: 'Gourmet cat food with real salmon. Rich in omega-3 fatty acids for a healthy coat and skin. Your cat will love this delicious meal!',
        images: [
            'https://images.unsplash.com/photo-1769256130388-9fb59d103671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBraXR0ZW4lMjBwZXR8ZW58MXx8fHwxNzcyNTQ5MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },
    {
        id: '10',
        name: 'Cat Scratching Post',
        price: 32.99,
        category: 'Cat Items',
        description: 'Durable sisal scratching post to keep your cat\'s claws healthy. Saves your furniture! Stable base and attractive design.',
        images: [
            'https://images.unsplash.com/photo-1769256130388-9fb59d103671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBraXR0ZW4lMjBwZXR8ZW58MXx8fHwxNzcyNTQ5MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },
    {
        id: '11',
        name: 'Interactive Cat Toy Bundle',
        price: 18.99,
        category: 'Cat Items',
        description: 'Set of engaging toys including feather wand, mice, and balls. Keeps your cat active and entertained. Perfect for solo or interactive play.',
        images: [
            'https://images.unsplash.com/photo-1769256130388-9fb59d103671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBraXR0ZW4lMjBwZXR8ZW58MXx8fHwxNzcyNTQ5MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },
    {
        id: '12',
        name: 'Cat Litter Box with Hood',
        price: 42.99,
        category: 'Cat Items',
        description: 'Large covered litter box for privacy and odor control. Easy-to-clean design with removable hood. Includes carbon filter.',
        images: [
            'https://images.unsplash.com/photo-1769256130388-9fb59d103671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBraXR0ZW4lMjBwZXR8ZW58MXx8fHwxNzcyNTQ5MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },

    // ========== ACCESSORIES ==========
    {
        id: '13',
        name: 'Pet Collar - Adjustable',
        price: 14.99,
        category: 'Accessories',
        description: 'Stylish and comfortable collar for cats and small dogs. Adjustable sizing with secure buckle. Available in baby pink color!',
        images: [
            'https://images.unsplash.com/photo-1596822316110-288c7b8f24f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBhY2Nlc3NvcmllcyUyMGNvbGxhcnxlbnwxfHx8fDE3NzI1MjEwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },
    {
        id: '14',
        name: 'Stainless Steel Pet Bowls Set',
        price: 22.99,
        category: 'Accessories',
        description: 'Set of 2 durable stainless steel bowls for food and water. Non-slip rubber base. Easy to clean and dishwasher safe.',
        images: [
            'https://images.unsplash.com/photo-1596822316110-288c7b8f24f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBhY2Nlc3NvcmllcyUyMGNvbGxhcnxlbnwxfHx8fDE3NzI1MjEwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },
    {
        id: '15',
        name: 'Pet Grooming Kit',
        price: 28.99,
        category: 'Accessories',
        description: 'Complete grooming set including brush, comb, nail clippers, and scissors. Professional quality tools for home grooming. Suitable for all pets.',
        images: [
            'https://images.unsplash.com/photo-1760596687390-8fbc1d53d3cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZyUyMHN1cHBsaWVzfGVufDF8fHx8MTc3MjUzNzA4OXww&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    },
    {
        id: '16',
        name: 'Pet ID Tags - Personalized',
        price: 9.99,
        category: 'Accessories',
        description: 'Custom engraved ID tags for your pet\'s safety. Durable stainless steel. Includes split ring for easy attachment to collar.',
        images: [
            'https://images.unsplash.com/photo-1596822316110-288c7b8f24f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBhY2Nlc3NvcmllcyUyMGNvbGxhcnxlbnwxfHx8fDE3NzI1MjEwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
    }

    // ========== HOW TO ADD MORE PRODUCTS ==========
    /*
    To add a new product, copy the format below and paste it above this comment block.
    Make sure to add a comma after the previous product!

    Example:
    ,
    {
        id: '17',                           // Give it a unique ID number
        name: 'Your Product Name',          // The product name
        price: 29.99,                       // The price (number only, no $ sign)
        category: 'Bird Items',             // Must match one of: 'Bird Items', 'Fish Items', 'Cat Items', 'Accessories'
        description: 'Your product description here. Make it detailed and appealing!',
        images: [
            'https://your-image-url-1.jpg',  // First image (required)
            'https://your-image-url-2.jpg'   // Second image (optional - add more if needed)
        ]
    }

    IMPORTANT NOTES:
    1. Each product must have a unique 'id'
    2. The 'category' must exactly match one of the 4 categories: 'Bird Items', 'Fish Items', 'Cat Items', 'Accessories'
    3. Price should be a number (don't include the $ symbol)
    4. You can add multiple images in the images array
    5. Don't forget the comma between products!
    6. Keep the last product WITHOUT a comma after it
    */
];

// Define your categories here
const CATEGORIES = ['Bird Items', 'Fish Items', 'Cat Items', 'Accessories'];

// State Management
let cart = [];
let selectedProduct = null;
let currentImageIndex = 0;
let orderType = null; // 'single' or 'cart'

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderCategories();
    initializeEventListeners();
    updateCartCount();
});

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('petoholicCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('petoholicCart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count display
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    cartCountEl.textContent = count;
    if (count > 0) {
        cartCountEl.style.display = 'flex';
    } else {
        cartCountEl.style.display = 'none';
    }
}

// Render categories and products
function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    container.innerHTML = '';

    CATEGORIES.forEach(category => {
        const categoryProducts = PRODUCTS.filter(p => p.category === category);
        if (categoryProducts.length > 0) {
            const section = createCategorySection(category, categoryProducts);
            container.appendChild(section);
        }
    });
}

// Create category section
function createCategorySection(categoryName, products) {
    const section = document.createElement('section');
    section.className = 'category-section';

    const title = document.createElement('h2');
    title.className = 'category-title';
    title.textContent = categoryName;

    const grid = document.createElement('div');
    grid.className = 'products-grid';

    products.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });

    section.appendChild(title);
    section.appendChild(grid);
    return section;
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductModal(product);

    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.images[0]}" alt="${product.name}" class="product-image">
        </div>
        <div class="product-content">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
        </div>
    `;

    return card;
}

// Open product modal
function openProductModal(product) {
    selectedProduct = product;
    currentImageIndex = 0;

    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductCategory').textContent = `Category: ${product.category}`;
    document.getElementById('modalProductPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modalProductDescription').textContent = product.description;

    updateProductImages();
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Update product images
function updateProductImages() {
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = selectedProduct.images[currentImageIndex];
    mainImage.alt = `${selectedProduct.name} - Image ${currentImageIndex + 1}`;

    // Update thumbnails
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = '';

    if (selectedProduct.images.length > 1) {
        selectedProduct.images.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
            thumbnail.onclick = () => {
                currentImageIndex = index;
                updateProductImages();
            };

            const img = document.createElement('img');
            img.src = image;
            img.alt = `Thumbnail ${index + 1}`;

            thumbnail.appendChild(img);
            thumbnailContainer.appendChild(thumbnail);
        });
    }

    // Update navigation buttons
    const prevBtn = document.getElementById('prevImageBtn');
    const nextBtn = document.getElementById('nextImageBtn');

    if (selectedProduct.images.length <= 1) {
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }
}

// Navigate images
function navigateImage(direction) {
    if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length;
    } else {
        currentImageIndex = (currentImageIndex + 1) % selectedProduct.images.length;
    }
    updateProductImages();
}

// Add to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    closeModal('productModal');
}

// Open cart modal
function openCartModal() {
    renderCart();
    document.getElementById('cartModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Render cart
function renderCart() {
    const container = document.getElementById('cartItemsContainer');
    const footer = document.getElementById('cartFooter');

    if (cart.length === 0) {
        container.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        footer.style.display = 'none';
    } else {
        container.innerHTML = '';
        cart.forEach(item => {
            const cartItem = createCartItem(item);
            container.appendChild(cartItem);
        });

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        document.getElementById('totalAmount').textContent = `$${total.toFixed(2)}`;
        footer.style.display = 'block';
    }
}

// Create cart item
function createCartItem(item) {
    const div = document.createElement('div');
    div.className = 'cart-item';

    div.innerHTML = `
        <div class="cart-item-image">
            <img src="${item.images[0]}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
            <h3 class="cart-item-name">${item.name}</h3>
            <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})" aria-label="Decrease quantity">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})" aria-label="Increase quantity">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>
        </div>
        <div class="cart-item-actions">
            <button class="remove-btn" onclick="removeFromCart('${item.id}')" aria-label="Remove item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </button>
            <p class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</p>
        </div>
    `;

    return div;
}

// Update quantity
function updateQuantity(productId, quantity) {
    if (quantity < 1) return;
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        saveCart();
        renderCart();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

// Open order modal for single product
function openOrderModalForProduct(product) {
    orderType = 'single';
    const totalDisplay = document.getElementById('orderTotalDisplay');
    totalDisplay.innerHTML = `
        <span>Total Amount:</span>
        <span>$${product.price.toFixed(2)}</span>
    `;
    totalDisplay.style.display = 'flex';
    
    closeModal('productModal');
    document.getElementById('orderModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Open order modal for cart checkout
function openOrderModalForCart() {
    orderType = 'cart';
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalDisplay = document.getElementById('orderTotalDisplay');
    totalDisplay.innerHTML = `
        <span>Total Amount:</span>
        <span>$${total.toFixed(2)}</span>
    `;
    totalDisplay.style.display = 'flex';
    
    closeModal('cartModal');
    document.getElementById('orderModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Handle order form submission
function handleOrderSubmit(e) {
    e.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        address: document.getElementById('address').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        email: document.getElementById('email').value
    };

    let message = `Order placed successfully!\n\nName: ${formData.fullName}\nAddress: ${formData.address}\nPhone: ${formData.phoneNumber}\nEmail: ${formData.email}\n\nThank you for shopping at Petoholic! 🐾`;

    alert(message);

    // Clear cart if it was a cart checkout
    if (orderType === 'cart') {
        cart = [];
        saveCart();
    }

    // Reset form and close modal
    document.getElementById('orderForm').reset();
    closeModal('orderModal');
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize event listeners
function initializeEventListeners() {
    // Cart button
    document.getElementById('cartBtn').addEventListener('click', openCartModal);

    // Product modal
    document.getElementById('closeProductModal').addEventListener('click', () => closeModal('productModal'));
    document.getElementById('prevImageBtn').addEventListener('click', () => navigateImage('prev'));
    document.getElementById('nextImageBtn').addEventListener('click', () => navigateImage('next'));
    document.getElementById('addToCartBtn').addEventListener('click', () => addToCart(selectedProduct));
    document.getElementById('orderNowBtn').addEventListener('click', () => openOrderModalForProduct(selectedProduct));

    // Cart modal
    document.getElementById('closeCartModal').addEventListener('click', () => closeModal('cartModal'));
    document.getElementById('checkoutBtn').addEventListener('click', openOrderModalForCart);

    // Order modal
    document.getElementById('closeOrderModal').addEventListener('click', () => closeModal('orderModal'));
    document.getElementById('orderForm').addEventListener('submit', handleOrderSubmit);

    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
}
