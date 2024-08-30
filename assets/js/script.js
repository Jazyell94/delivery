function verificaHorarioDeFuncionamento() {
  const agora = new Date();
  const diaDaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda-feira, ..., 6 = Sábado
  const horaAtual = agora.getHours();

  let horaDeAbertura;
  let horaDeFechamento;

  // Defina os horários de abertura e fechamento para cada dia da semana
  switch(diaDaSemana) {
      case 0: // Domingo
          horaDeAbertura = 10; // 10:00 AM
          horaDeFechamento = 16; // 16:00 PM
          break;
      case 1: // Segunda-feira
          horaDeAbertura = 9; // 09:00 AM
          horaDeFechamento = 18; // 18:00 PM
          break;
      case 2: // Terça-feira
          horaDeAbertura = 9;  // 09:00 AM
          horaDeFechamento = 18; // 18:00 PM
          break;
      case 3: // Quarta-feira
          horaDeAbertura = 9;  // 09:00 AM
          horaDeFechamento = 18; // 18:00 PM
          break;
      case 4: // Quinta-feira
          horaDeAbertura = 9; // 09:00 AM
          horaDeFechamento = 18; // 18:00 PM
          break;
      case 5: // Sexta-feira
          horaDeAbertura = 89; // 09:00 AM
          horaDeFechamento = 20; // 18:00 PM
          break;
      case 6: // Sábado
          horaDeAbertura = 10; // 10:00 AM
          horaDeFechamento = 16; // 16:00 PM
          break;
      default:
          horaDeAbertura = 9;
          horaDeFechamento = 18;
  }

  const overlay = document.getElementById('loja-fechada');
  const siteContent = document.getElementById('site-content');

  if (horaAtual < horaDeAbertura || horaAtual >= horaDeFechamento) {
      overlay.style.display = 'flex';
      siteContent.style.display = 'none';
  } else {
      overlay.style.display = 'none';
      siteContent.style.display = 'block';
  }
}

// Chame a função ao carregar a página
verificaHorarioDeFuncionamento();

///////////////////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA PRELOADER //

// preloader.js
const preloader = document.getElementById('preloader');

document.body.classList.add('loading');

let allResourcesLoaded = false;
let saudacaoLoaded = false;

window.addEventListener('load', () => {
  allResourcesLoaded = true;
  checkIfAllResourcesLoaded();
});

function checkIfAllResourcesLoaded() {
  if (allResourcesLoaded && defaultContainer.innerHTML !== '') {
    document.body.classList.remove('loading');
    preloader.classList.add('hide');
    preloader.addEventListener('transitionend', () => {
      preloader.classList.remove('preloader');
      // Adicione os eventos de clique após o preloader ser removido do DOM
      const plusIcons = defaultContainer.querySelectorAll('.fa-plus');
      plusIcons.forEach(icon => {
        icon.addEventListener('click', () => {
          const product = products[icon.dataset.index];
          adicionarAoCarrinho(product);
        });
      });
    });
  }
}
/////////////////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA MUDAR ENTRE BOA TARDE E BOA NOITE //
function saudacao(horaTransicao = 18) {
  const agora = new Date();
  const hora = agora.getHours();
  if (hora < horaTransicao) {
    return "Boa tarde! 🌞";
  } else {
    return "Boa noite! 🌚";
  }
}

window.onload = function() {
  const saudacaoElement = document.getElementById("saudacao");
  if (saudacaoElement) {
    saudacaoElement.innerHTML = saudacao(); // Exibe a saudação inicial
    setInterval(function() {
      saudacaoElement.innerHTML = saudacao();
    }, 1000); // Atualiza a saudação a cada 1 segundo
    
    saudacaoLoaded = true; // Marca que a saudação foi carregada
    checkIfAllResourcesLoaded(); // Verifica se todos os recursos foram carregados
    changePlaceholder();
  }
};

//////////////////////////////////////////////////////////////////////////////////



function changePlaceholder() {
  const placeholderElement = document.getElementById("search-input"); // Replace with your input field ID
  if (placeholderElement) { // Add this check
    const phrases = [
      "Bomba de presunto",
      "Coxinha",
      "Pastel de queijo",
      "Pizza de frango"
    ];
    let currentPhraseIndex = 0;

    setInterval(function() {
      placeholderElement.placeholder = phrases[currentPhraseIndex];
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }, 3000); // Change placeholder every 2 seconds
  } else {
    console.log("Error: search-input element not found.");
  }
}


////////////////////////////////////////////////////////////////////////////////////

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

  // Notifica o preloader que os recursos foram carregados
  checkIfAllResourcesLoaded();


  const plusIcons = defaultContainer.querySelectorAll('.fa-plus');
  plusIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const product = products[icon.dataset.index];
    adicionarAoCarrinho(product);
    mostrarNotificacao('Produto adicionado ao carrinho!');
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

function adicionarAoCarrinho(product) {
  if (product) {
    updateCart(product, 'add');
  } else {
    console.error("Produto não encontrado");
  }
}

function imageLoaded() {
  // Verifica se todas as imagens foram carregadas
  const images = defaultContainer.querySelectorAll('img');
  const allImagesLoaded = Array.prototype.every.call(images, function(image) {
    return image.complete && image.naturalHeight !== 0;
  });

  if (allImagesLoaded) {
    // Notifica o preloader que as imagens foram carregadas
    checkIfAllResourcesLoaded();
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

const searchInputPastel = document.getElementById('search-input');
searchInputPastel.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredPastel = pastel.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm);
  });
  renderPastelProducts(filteredPastel);
});

function renderPastelProducts( products = pastel ) {
  pastelContainer.innerHTML = '';
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
    pastelContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  const plusIcons = pastelContainer.querySelectorAll('.fa-plus');
  plusIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const product = products[icon.dataset.index];
    adicionarAoCarrinho(product);
    mostrarNotificacao('Produto adicionado ao carrinho!');
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

const searchInputBomba = document.getElementById('search-input');
searchInputBomba.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredBomba = bomba.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm);
  });
  renderBombaProducts(filteredBomba);
});

function renderBombaProducts( products = bomba ) {
  bombaContainer.innerHTML = '';
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
    bombaContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  const plusIcons = bombaContainer.querySelectorAll('.fa-plus');
  plusIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const product = products[icon.dataset.index];
    adicionarAoCarrinho(product);
    mostrarNotificacao('Produto adicionado ao carrinho!');
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

const searchInputCoxinha = document.getElementById('search-input');
searchInputCoxinha.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredCoxinha = coxinha.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm);
  });
  renderCoxinhaProducts(filteredCoxinha);
});

function renderCoxinhaProducts( products = coxinha ) {
  coxinhaContainer.innerHTML = '';
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
    coxinhaContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  const plusIcons = coxinhaContainer.querySelectorAll('.fa-plus');
  plusIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const product = products[icon.dataset.index];
    adicionarAoCarrinho(product);
    mostrarNotificacao('Produto adicionado ao carrinho!');
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

// Adicione um evento de escuta ao campo de busca
const searchInputPizza = document.getElementById('search-input');
searchInputPizza.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredPizza = pizza.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm);
  });
  renderPizzaProducts(filteredPizza);
});

function renderPizzaProducts( products = pizza) {
  pizzaContainer.innerHTML = '';
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
    pizzaContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  const plusIcons = pizzaContainer.querySelectorAll('.fa-plus');
  plusIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const product = products[icon.dataset.index];
    adicionarAoCarrinho(product);
    mostrarNotificacao('Produto adicionado ao carrinho!');
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

// Adicione um evento de escuta ao campo de busca
const searchInputBebidas = document.getElementById('search-input');
searchInputBebidas.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredBebidas = bebidas.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm);
  });
  renderBebidasProducts(filteredBebidas);
});

// Atualize a função renderBebidasProducts para aceitar um parâmetro de produtos filtrados
function renderBebidasProducts(products = bebidas) {
  bebidasContainer.innerHTML = '';
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
    bebidasContainer.insertAdjacentHTML('beforeend', productHTML);
  });


  const plusIcons = bebidasContainer.querySelectorAll('.fa-plus');
  plusIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const product = products[icon.dataset.index];
    adicionarAoCarrinho(product);
    mostrarNotificacao('Produto adicionado ao carrinho!');
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

// ESTRUTURA PARA O CARRINHO //
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

  if (cart.products.length === 0) {
    showEmptyCart();
  }
}

function showEmptyCart() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = `
    <div class="cart-vazio">
      Seu carrinho está vazio!
    </div>
  `;
}

function renderCart() {
  const cartContainer = document.getElementById('cart-container');
  while (cartContainer.firstChild) cartContainer.removeChild(cartContainer.firstChild);

  if (cart.products.length === 0) {
    // Se o carrinho estiver vazio, exibe a mensagem de carrinho vazio
    const emptyCartHTML = `
      <div class="cart-vazio">
        Seu carrinho está vazio!
      </div>
    `;
    cartContainer.insertAdjacentHTML('beforeend', emptyCartHTML);
    return; // Sai da função, pois não há mais itens para renderizar
  }

  let totalPrice = 0;
  cart.products.forEach(product => {
    const priceValue = product.price.replace('R$ ', '').replace(',', '.'); // extrai o valor numérico da string de preço
    const priceNumber = parseFloat(priceValue); // converte para número

    const cartItemHTML = `
      <div class="cart-item">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <span>${product.name}</span>
        <span>R$ ${priceNumber.toFixed(2)}</span>
        <div class="quantity-container">
          <i class="fa-solid fa-minus" data-product-id="${product.id}"></i>
          <span id="quantity-${product.id}">${product.quantity}</span>
          <i class="fa-solid fa-plus" data-product-id="${product.id}"></i>
        </div>
      </div>
    `;
    cartContainer.insertAdjacentHTML('beforeend', cartItemHTML);
    totalPrice += priceNumber * product.quantity;
  });

  const totalPriceHTML = `
    <div class="total-container">
      <div class="cart-total">
        Total: R$ ${totalPrice.toFixed(2)}
        <div class="cart-finish">
          Finalizar
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  `;
  cartContainer.insertAdjacentHTML('beforeend', totalPriceHTML);

  // Adiciona event listeners aos ícones de "+" e "-"
  const plusIcons = cartContainer.querySelectorAll('.fa-plus');
  const minusIcons = cartContainer.querySelectorAll('.fa-minus');

  plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const productId = icon.getAttribute('data-product-id');
      const product = cart.products.find(p => p.id === productId);
      product.quantity++;
      renderCart(); // Re-renderiza o carrinho
    });
  });

  minusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const productId = icon.getAttribute('data-product-id');
      const product = cart.products.find(p => p.id === productId);
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        // Confirmação antes de remover o último item
        const confirmRemoval = confirm(`Deseja realmente remover o último item de ${product.name} do carrinho?`);
        if (confirmRemoval) {
          // Remove o produto do carrinho se a quantidade for zero
          cart.products = cart.products.filter(p => p.id !== productId);
        }
      }
      renderCart(); // Re-renderiza o carrinho ou exibe a mensagem de carrinho vazio
    });
  });

  // Adiciona event listener ao botão "Finalizar"
  const finishButton = cartContainer.querySelector('.cart-finish');
  finishButton.addEventListener('click', () => showCustomerDetailsForm(totalPrice));
}



// Update the showCustomerDetailsForm function
function showCustomerDetailsForm(totalPrice) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const overlayContent = document.createElement('div');
  overlayContent.className = 'overlay-content';

  overlayContent.innerHTML = `
    <h2>Nome e Endereço</h2>
    <input id="customer-name" type="text" placeholder="Nome">
    <input id="customer-address" type="text" placeholder="Endereço">
    <p>Forma de pagamento</p>
    <select id="payment-method">
      <option value="Dinheiro">Espécie</option>
      <option value="Pix">Pix</option>
      <option value="Cartão">Cartão</option>
    </select>
    <button id="send-to-whatsapp">Enviar</button>
    <i id="close-overlay" class="fa-solid fa-xmark"></i>
    
  `;

  overlay.appendChild(overlayContent);
  document.body.appendChild(overlay);

  overlay.classList.add('show');

  // Add event listener to the "Enviar para WhatsApp" button
  const sendToWhatsAppButton = overlayContent.querySelector('#send-to-whatsapp');
  sendToWhatsAppButton.addEventListener('click', () => sendCartToWhatsApp(totalPrice));

  // Add event listener to the "Fechar" button
  const closeOverlayButton = overlayContent.querySelector('#close-overlay');
  closeOverlayButton.addEventListener('click', () => {
    overlay.classList.remove('show');
  });
}

function sendCartToWhatsApp(totalPrice) {
  const customerNameInput = document.getElementById('customer-name');
  const customerAddressInput = document.getElementById('customer-address');
  const paymentMethodSelect = document.getElementById('payment-method');

  const customerName = encodeURIComponent(customerNameInput.value);
  const customerAddress = encodeURIComponent(customerAddressInput.value);
  const paymentMethod = paymentMethodSelect.value;

  // Create a string to send to WhatsApp
  let message = `Meu pedido 😋\n\n`;
  message += `*Nome:* ${customerName}\n`;
  message += `*Endereço:* ${customerAddress}\n`;
  message += `*Produtos:*\n`;

  // Loop through the cart items and add them to the message
  cart.products.forEach(product => {
    message += `  ${product.name} x ${product.quantity}\n`;
  });

  // Add the total price to the message
  message += `____________________________________________\n`;
  message += `*Total:* R$ ${totalPrice.toFixed(2)}\n`;
  message += `*Pagamento:* ${paymentMethod}`;
 

  // Decode the message string to replace %20 with spaces
  message = decodeURIComponent(message);

  // Open WhatsApp with the message
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5586999412880&text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');

}

////////////////////////////////////////////////////////////////////////////

// FUNÇÃO PARA MOSTRAR NOTIFICAÇÃO AO ADCIONAR AO CARRINHO //
function mostrarNotificacao(mensagem) {
  // Crie a div da notificação
  const notificacao = document.createElement('div');
  notificacao.classList.add('notificacao');
  
  // Crie o conteúdo da notificação
  const conteudo = document.createElement('span');
  conteudo.textContent = mensagem;
  
  // Crie o botão de fechar
  const botaoFechar = document.createElement('button');
  botaoFechar.textContent = 'X';
  botaoFechar.classList.add('fechar-notificacao');
  botaoFechar.addEventListener('click', () => {
    notificacao.remove();
  });
  
  // Adicione o conteúdo e o botão ao elemento de notificação
  notificacao.appendChild(conteudo);
  notificacao.appendChild(botaoFechar);
  
  // Adicione a notificação ao body (ou outro contêiner adequado)
  document.body.appendChild(notificacao);
  
  // Remova a notificação após alguns segundos
  setTimeout(() => {
    notificacao.remove();
  }, 5000); // 5000 ms = 5 segundos
}

/////////////////////////////////////////////////////////////////////////