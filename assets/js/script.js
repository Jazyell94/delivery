// MUADR A SECTION NO MENU //

// Seleciona os botões
const homeIcon = document.getElementById("home-icon");
const cartIcon = document.getElementById("cart-icon");

// Seleciona as sections
const homeSection = document.getElementById("home-section");
const cartSection = document.getElementById("cart-section");

homeIcon.classList.add("active");

// Adiciona evento de clique aos botões
homeIcon.addEventListener("click", () => {
  homeSection.style.display = "block";
  cartSection.style.display = "none";

  // Mostra a div default-content
  const defaultContent = document.getElementById("default-content");
  defaultContent.classList.add("show");

  // Oculta todos os conteúdos da div de categorias
  const categoryElements = contentSection.children;
  for (let i = 0; i < categoryElements.length; i++) {
    if (categoryElements[i].id !== "default-content") { 
      categoryElements[i].classList.remove("show");
    }
  }
  
  // Adiciona classe para mudar a cor do ícone
  homeIcon.classList.add("active");
  cartIcon.classList.remove("active");
});

// Adiciona evento de clique aos botões
cartIcon.addEventListener("click", () => {
  homeSection.style.display = "none";
  cartSection.style.display = "block";
  
  // Adiciona classe para mudar a cor do ícone
  homeIcon.classList.remove("active");
  cartIcon.classList.add("active");
});


const contentSection = document.getElementById('content-section');
const items = document.querySelectorAll('.item');

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    const category = item.dataset.category;

    contentSection.querySelectorAll('div').forEach((element) => {
      element.style.display = 'none';
    });

    const contentElement = contentSection.querySelector(`#${category}-content`);
    contentElement.style.display = 'grid';

    // Adicione isso para mostrar todos os elementos dentro do conteúdo
    contentElement.querySelectorAll('*').forEach((element) => {
      element.style.display = '';
    });
  });
});
///////////////////////////////////////////////

// OCUTA TODOS AS CATEGORIAS NO CONTEUDO PADRAO //
const categories = document.querySelectorAll('.hidden');
const defaultContent = document.getElementById('default-content');

  categories.forEach((category) => {
    category.style.display = 'none';
  });

  defaultContent.style.display = 'grid';

  // Add event listener to category links
  const categoryLinks = document.querySelectorAll('.category-link');
  categoryLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const categoryId = e.target.dataset.category;
      const categoryContent = document.getElementById(`${categoryId}-content`);

      categories.forEach((category) => {
        category.style.display = 'none';
      });

      categoryContent.style.display = 'block';
    });
  });
//////////////////////////////////////////////////

// ESTRUTURA PARA DEFAULT CONTAINER //
let defaultContainer = document.getElementById('default-content');
let products = [];

fetch('/data/default.json')
  .then(response => response.json())
  .then(data => {
    products = data;
    renderDefaultProducts();
  });

function renderDefaultProducts() {
  defaultContainer.innerHTML = '';
  products.forEach(product => {
    const productHTML = `
      <div class="product-container">
        <div class="content">
          <div class="product-img">
            <img src="${product.image}" alt="">
          </div>
          <div class="product-desc">
            <span>${product.name}</span>
            <div class="price">
              <span>${product.price}</span>
              <i class="fa-solid fa-plus add-to-cart"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    defaultContainer.insertAdjacentHTML('beforeend', productHTML);
  });
}
///////////////////////////////////////

// ESTRUTURA PARA PASTEL CONTAINER //
let pastelContainer = document.getElementById('pastel-content');
let pastel = [];

fetch('/data/pastel.json')
  .then(response => response.json())
  .then(data => {
    pastel = data;
    renderPastelProducts();
  });

function renderPastelProducts() {
  pastelContainer.innerHTML = '';
  pastel.forEach(product => {
    const productHTML = `
      <div class="product-container">
        <div class="content">
          <div class="product-img">
            <img src="${product.image}" alt="">
          </div>
          <div class="product-desc">
            <span>${product.name}</span>
            <div class="price">
              <span>${product.price}</span>
              <i class="fa-solid fa-plus add-to-cart"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    pastelContainer.insertAdjacentHTML('beforeend', productHTML);
  });
}
////////////////////////////////////////

// ESTRUTURA PARA BOMBA CONTAINER //
let bombaContainer = document.getElementById('bomba-content');
let bomba = [];

fetch('/data/bomba.json')
  .then(response => response.json())
  .then(data => {
    bomba = data;
    renderBombaProducts();
  });

function renderBombaProducts() {
  bombaContainer.innerHTML = '';
  bomba.forEach(product => {
    const productHTML = `
      <div class="product-container">
        <div class="content">
          <div class="product-img">
            <img src="${product.image}" alt="">
          </div>
          <div class="product-desc">
            <span>${product.name}</span>
            <div class="price">
              <span>${product.price}</span>
              <i class="fa-solid fa-plus add-to-cart"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    bombaContainer.insertAdjacentHTML('beforeend', productHTML);
  });
}
////////////////////////////////////////

// ESTRUTURA PARA COXINHA CONTAINER //
let coxinhaContainer = document.getElementById('coxinha-content');
let coxinha = [];

fetch('/data/coxinha.json')
  .then(response => response.json())
  .then(data => {
    coxinha = data;
    renderCoxinhaProducts();
  });

function renderCoxinhaProducts() {
  coxinhaContainer.innerHTML = '';
  coxinha.forEach(product => {
    const productHTML = `
      <div class="product-container">
        <div class="content">
          <div class="product-img">
            <img src="${product.image}" alt="">
          </div>
          <div class="product-desc">
            <span>${product.name}</span>
            <div class="price">
              <span>${product.price}</span>
              <i class="fa-solid fa-plus add-to-cart"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    coxinhaContainer.insertAdjacentHTML('beforeend', productHTML);
  });
}
////////////////////////////////////////

// ESTRUTURA PARA PIZZA CONTAINER //
let pizzaContainer = document.getElementById('pizza-content');
let pizza = [];

fetch('/data/pizza.json')
  .then(response => response.json())
  .then(data => {
    pizza = data;
    renderPizzaProducts();
  });

function renderPizzaProducts() {
  pizzaContainer.innerHTML = '';
  pizza.forEach(product => {
    const productHTML = `
      <div class="product-container">
        <div class="content">
          <div class="product-img">
            <img src="${product.image}" alt="">
          </div>
          <div class="product-desc">
            <span>${product.name}</span>
            <div class="price">
              <span>${product.price}</span>
              <i class="fa-solid fa-plus add-to-cart"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    pizzaContainer.insertAdjacentHTML('beforeend', productHTML);
  });
}
////////////////////////////////////////

// ESTRUTURA PARA BEBIDAS CONTAINER //
let bebidasContainer = document.getElementById('bebidas-content');
let bebidas = [];

fetch('/data/bebidas.json')
  .then(response => response.json())
  .then(data => {
    bebidas = data;
    renderBebidasProducts();
  });

function renderBebidasProducts() {
  bebidasContainer.innerHTML = '';
  bebidas.forEach(product => {
    const productHTML = `
      <div class="product-container">
        <div class="content">
          <div class="product-img">
            <img src="${product.image}" alt="">
          </div>
          <div class="product-desc">
            <span>${product.name}</span>
            <div class="price">
              <span>${product.price}</span>
              <i class="fa-solid fa-plus add-to-cart" data-product-id="${product.id}"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    bebidasContainer.insertAdjacentHTML('beforeend', productHTML);
  });
}
////////////////////////////////////////

// Seleciona o container do carrinho

let cartContainer = document.getElementById('cart-container');

// Initialize an empty cart
let cart = {};
// Create a global variable to store all products
let allProducts = [];

// ...

// Fetch data for each product type and add to allProducts
fetch('../data/default.json')
  .then(response => response.json())
  .then(data => {
    allProducts = [...allProducts, ...data];
    renderDefaultProducts();
  });

fetch('../data/pastel.json')
  .then(response => response.json())
  .then(data => {
    allProducts = [...allProducts, ...data];
    renderPastelProducts();
  });

fetch('../data/bomba.json')
  .then(response => response.json())
  .then(data => {
    allProducts = [...allProducts, ...data];
    renderBombaProducts();
  });

fetch('../data/coxinha.json')
  .then(response => response.json())
  .then(data => {
    allProducts = [...allProducts, ...data];
    renderCoxinhaProducts();
  });

fetch('../data/pizza.json')
  .then(response => response.json())
  .then(data => {
    allProducts = [...allProducts, ...data];
    renderPizzaProducts();
  });

fetch('../data/bebidas.json')
  .then(response => response.json())
  .then(data => {
    allProducts = [...allProducts, ...data];
    renderBebidasProducts();
  });

// ...

// Add event listeners to the "Add to Cart" buttons
// ...

// Add event listeners to the "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const productId = btn.getAttribute('data-product-id');
    const product = allProducts.find(p => p.id === productId);
    console.log(`Adding product to cart: ${product.name}`);
    addProductToCart(product);
  });
});

// Function to add product to cart
function addProductToCart(product) {
  console.log(`Adding product to cart: ${product.name}`);
  // Check if the product already exists in the cart
  if (cart[product.id]) {
    // Increment the quantity of the existing product
    cart[product.id].quantity++;
  } else {
    // Add a new product to the cart
    cart[product.id] = { ...product, quantity: 1 };
  }
  console.log(`Cart updated: ${JSON.stringify(cart)}`);
  saveCart(cart);
  updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
  console.log('Updating cart UI...');
  if (cartContainer) {
    const currentCart = getCart();
    const cartHTML = Object.values(currentCart).map(product => `
      <li>
        ${product.name} x ${product.quantity}
        <span>${product.price * product.quantity}</span>
      </li>
    `).join('');
    cartContainer.innerHTML = cartHTML;
    console.log(`Cart UI updated: ${cartHTML}`);
  } else {
    console.error('Cart container element not found');
  }
}

// Initialize the cart UI
updateCartUI();