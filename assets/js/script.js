// ESTRUTURA PARA LOJA FECHADA //
const horarioAberto = {
  
  terca: [[8, 18]], // 8h às 18h
  quarta: [[8, 18]], // 8h às 18h
  quinta: [[8, 18]], // 8h às 18h
  sexta: [[8, 18]] // 8h às 18h
};

function verificarHorario() {
  const agora = new Date();
  const diaSem = agora.getDay(); // 0 = Domingo, 1 = Segunda-feira, ..., 6 = Sábado
  const hora = agora.getHours();
  const minuto = agora.getMinutes();

  let dia = '';
  switch (diaSem) {

      case 2:
          dia = 'terca';
          break;
      case 3:
          dia = 'quarta';
          break;
      case 4:
          dia = 'quinta';
          break;
      case 5:
          dia = 'sexta';
          break;
      default:
          document.getElementById('site-content').style.display = 'none';
          document.getElementById('loja-fechada').style.display = 'block';
          return;
  }

  let horaAbertura = 9; // 9:00h
  let horaFechamento = 23; // 18:00h

  if (dia === 'sexta') {
      horaFechamento = 18; // 18:00h na sexta-feira
  }

  if (hora >= horaAbertura && hora < horaFechamento) {
      document.getElementById('site-content').style.display = 'block';
      document.getElementById('loja-fechada').style.display = 'none';
  } else {
      document.getElementById('site-content').style.display = 'none';
      document.getElementById('loja-fechada').style.display = 'block';
  }
}

// Executa a função ao carregar a página
window.onload = verificarHorario;

///////////////////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA MUDAR A SECTION NO MENU //

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
////////////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA OCUTAR TODAS AS CATEGORIAS NO CONTEUDO PADRAO //
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
//////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA DEFAULT CONTAINER //
let defaultContainer = document.getElementById('default-content');
let products = [];

fetch('data/default.json')
  .then(response => response.json())
  .then(data => {
    products = data;
    renderDefaultProducts();
  });

function renderDefaultProducts() {
  defaultContainer.innerHTML = '';
  products.forEach((product, index) => {
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
              <i class="fa-solid fa-plus add-to-cart" data-index="${index}"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    defaultContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  const plusIcons = defaultContainer.querySelectorAll('.fa-plus');
  plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const product = products[icon.dataset.index];
      adicionarAoCarrinho(product);
    });
  });
}

function adicionarAoCarrinho(product) {
  if (product) {
    updateCart(product, 'add');
  } else {
    console.error("Produto não encontrado");
  }
}
//////////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA PASTEL CONTAINER //
let pastelContainer = document.getElementById('pastel-content');
let pastel = [];

fetch('data/pastel.json')
  .then(response => response.json())
  .then(data => {
    pastel = data;
    renderPastelProducts();
  });

function renderPastelProducts() {
  pastelContainer.innerHTML = '';
  pastel.forEach((product, index) => {
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
              <i class="fa-solid fa-plus add-to-cart" data-index="${index}"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    pastelContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  const plusIcons = pastelContainer.querySelectorAll('.fa-plus');
  plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const product = pastel[icon.dataset.index];
      adicionarAoCarrinho(product);
    });
  });
}

function adicionarAoCarrinho(product) {
  if (product) {
    updateCart(product, 'add');
  } else {
    console.error("Produto não encontrado");
  }
}
//////////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA BOMBA CONTAINER //
let bombaContainer = document.getElementById('bomba-content');
let bomba = [];

fetch('data/bomba.json')
  .then(response => response.json())
  .then(data => {
    bomba = data;
    renderBombaProducts();
  });

function renderBombaProducts() {
  bombaContainer.innerHTML = '';
  bomba.forEach((product, index) => {
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
              <i class="fa-solid fa-plus add-to-cart" data-index="${index}"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    bombaContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  const plusIcons = bombaContainer.querySelectorAll('.fa-plus');
  plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const product = bomba[icon.dataset.index];
      adicionarAoCarrinho(product);
    });
  });
}

function adicionarAoCarrinho(product) {
  if (product) {
    updateCart(product, 'add');
  } else {
    console.error("Produto não encontrado");
  }
}
///////////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA COXINHA CONTAINER //
let coxinhaContainer = document.getElementById('coxinha-content');
let coxinha = [];

fetch('data/coxinha.json')
  .then(response => response.json())
  .then(data => {
    coxinha = data;
    renderCoxinhaProducts();
  });

function renderCoxinhaProducts() {
  coxinhaContainer.innerHTML = '';
  coxinha.forEach((product, index) => {
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
              <i class="fa-solid fa-plus add-to-cart" data-index="${index}"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    coxinhaContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  const plusIcons = coxinhaContainer.querySelectorAll('.fa-plus');
  plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const product = coxinha[icon.dataset.index];
      adicionarAoCarrinho(product);
    });
  });
}

function adicionarAoCarrinho(product) {
  if (product) {
    updateCart(product, 'add');
  } else {
    console.error("Produto não encontrado");
  }
}
/////////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA PIZZA CONTAINER //
let pizzaContainer = document.getElementById('pizza-content');
let pizza = [];

fetch('data/pizza.json')
  .then(response => response.json())
  .then(data => {
    pizza = data;
    renderPizzaProducts();
  });

function renderPizzaProducts() {
  pizzaContainer.innerHTML = '';
  pizza.forEach((product, index) => {
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
              <i class="fa-solid fa-plus add-to-cart" data-index="${index}"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    pizzaContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  const plusIcons = pizzaContainer.querySelectorAll('.fa-plus');
  plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const product = pizza[icon.dataset.index];
      adicionarAoCarrinho(product);
    });
  });
}

function adicionarAoCarrinho(product) {
  if (product) {
    updateCart(product, 'add');
  } else {
    console.error("Produto não encontrado");
  }
}
///////////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA BEBIDAS CONTAINER //
let bebidasContainer = document.getElementById('bebidas-content');
let bebidas = [];

fetch('data/bebidas.json')
  .then(response => response.json())
  .then(data => {
    bebidas = data;
    renderBebidasProducts();
  });

function renderBebidasProducts() {
  bebidasContainer.innerHTML = '';
  bebidas.forEach((product, index) => {
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
              <i class="fa-solid fa-plus add-to-cart" data-index="${index}"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    bebidasContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  const plusIcons = bebidasContainer.querySelectorAll('.fa-plus');
  plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const product = bebidas[icon.dataset.index];
      adicionarAoCarrinho(product);
    });
  });
}

function adicionarAoCarrinho(product) {
  if (product) {
    updateCart(product, 'add');
  } else {
    console.error("Produto não encontrado");
  }
}
///////////////////////////////////////////////////////////////////////////////

let cart = {
  products: [],
  totalPrice: 0,
};

function adicionarAoCarrinho(product) {
  if (product) {
    updateCart(product, 'add');
  } else {
    console.error("Produto não encontrado");
  }
}

function updateCart(product, action) {
  if (action === 'add') {
    const existingProduct = cart.products.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.products.push({ ...product, quantity: 1 });
    }
  } else if (action === 'remove') {
    const index = cart.products.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cart.products.splice(index, 1);
    }
  }

  cart.totalPrice = cart.products.reduce((acc, p) => acc + p.price * p.quantity, 0);

  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById('cart-container');
  while (cartContainer.firstChild) cartContainer.removeChild(cartContainer.firstChild);

  let totalPrice = 0;
  cart.products.forEach(product => {
    const priceValue = product.price.replace('R$ ', '').replace(',', '.'); // extract numeric value from price string
    const priceNumber = parseFloat(priceValue); // convert to number

    const cartItemHTML = `
      <div class="cart-item">
        <span>${product.name} x ${product.quantity}</span>
        <span>R$ ${priceNumber * product.quantity}</span>
        <i class="fa-solid fa-trash" data-product-id="${product.id}"></i>
      </div>
    `;
    cartContainer.insertAdjacentHTML('beforeend', cartItemHTML);
    totalPrice += priceNumber * product.quantity;
  });

  const totalPriceHTML = `
    <div class="cart-total">
      Total: R$ ${totalPrice.toFixed(2)}
    </div>
  `;
  cartContainer.insertAdjacentHTML('beforeend', totalPriceHTML);



  // Adiciona evento de clique nos ícones de lixeira
  const removeIcons = cartContainer.querySelectorAll('.fa-trash');
  removeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const productId = icon.getAttribute('data-product-id');
      const product = cart.products.find(p => p.id === productId);
      updateCart(product, 'remove');
    });
  });
}
