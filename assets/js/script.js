// ESTRUTURA PARA FECHAR E ABIR A LOJA //
function verificaHorarioDeFuncionamento() {
  const agora = new Date();
  const diaDaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda-feira, ..., 6 = Sábado
  const horaAtual = agora.getHours();
  const minutoAtual = agora.getMinutes();

  let horaDeAbertura;
  let minutoDeAbertura;
  let horaDeFechamento;
  let minutoDeFechamento;

  // Defina os horários de abertura e fechamento para cada dia da semana
  switch(diaDaSemana) {
      case 0: // Domingo
          horaDeAbertura = 10;
          minutoDeAbertura = 0;
          horaDeFechamento = 21;
          minutoDeFechamento = 0;
          break;
      case 1: // Segunda-feira
          horaDeAbertura = 14;
          minutoDeAbertura = 30; // Abre às 9:30
          horaDeFechamento = 22;
          minutoDeFechamento = 0;
          break;
      case 2: // Terça-feira
          horaDeAbertura = 14;
          minutoDeAbertura = 30; // Abre às 9:30
          horaDeFechamento = 22;
          minutoDeFechamento = 0;
          break;
      case 3: // Quarta-feira
          horaDeAbertura = 7;
          minutoDeAbertura = 30; // Abre às 9:30
          horaDeFechamento = 22;
          minutoDeFechamento = 0;
          break;
      case 4: // Quinta-feira
          horaDeAbertura = 1;
          minutoDeAbertura = 30; // Abre às 9:30
          horaDeFechamento = 22;
          minutoDeFechamento = 0;
          break;
      case 5: // Sexta-feira
          horaDeAbertura = 14;
          minutoDeAbertura = 30; 
          horaDeFechamento = 18;
          minutoDeFechamento = 0;
          break;
      case 6: // Sábado
          horaDeAbertura = 18;
          minutoDeAbertura = 0;
          horaDeFechamento = 23;
          minutoDeFechamento = 0;
          break;
      default:
          horaDeAbertura = 14;
          minutoDeAbertura = 30;
          horaDeFechamento = 22;
          minutoDeFechamento = 0;
  }

  const overlay = document.getElementById('loja-fechada');
  const siteContent = document.getElementById('site-content');

  if (horaAtual < horaDeAbertura || (horaAtual === horaDeAbertura && minutoAtual < minutoDeAbertura) ||
      horaAtual > horaDeFechamento || (horaAtual === horaDeFechamento && minutoAtual >= minutoDeFechamento)) {
      overlay.style.display = 'flex';
      siteContent.style.display = 'none';
  } else {
      overlay.style.display = 'none';
      siteContent.style.display = 'block';
  }
}

// Verifica o horário a cada minuto (60000 milissegundos)
setInterval(verificaHorarioDeFuncionamento, 60000);

// Verifica o horário ao carregar a página
verificaHorarioDeFuncionamento();

///////////////////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA PRELOADER //
const preloader = document.getElementById('preloader');

document.body.classList.add('loading');

let allResourcesLoaded = false;
let saudacaoLoaded = false;

window.addEventListener('load', () => {
  allResourcesLoaded = true;
  checkIfAllResourcesLoaded();
});

function checkIfAllResourcesLoaded() {
  if (allResourcesLoaded && pastelContainer.innerHTML !== '') {
    document.body.classList.remove('loading');
    preloader.classList.add('hide');
    preloader.addEventListener('transitionend', () => {
      preloader.classList.remove('preloader');
    });
  }
}
/////////////////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA MUDAR ENTRE BOA TARDE E BOA NOITE //
function saudacao(horaTransicao = 18) {
  const agora = new Date();
  const hora = agora.getHours();
  if (hora < horaTransicao) {
    return "Boa tarde!";
  } else {
    return "Boa noite!";
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

// ESTRUTURA PARA O PLACEHOLDER MUDAR SOZINHO //
function changePlaceholder() {
  const placeholderElement = document.getElementById("search-input"); // Replace with your input field ID
  if (placeholderElement) { // Add this check
    const phrases = [
      "Bomba de presunto",
      "Coxinha",
      "Pastel de queijo",
      "Esfiha de frango",
      "Coca-cola 2l"
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
  const defaultContent = document.getElementById("pastel-content");
  defaultContent.classList.add("show");

 
  
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


// MUDAR A COR DA CATEGORIA ATIVA //
// Selecione a seção de conteúdo e os itens
// Selecione a seção de conteúdo e os itens
const contentSection = document.getElementById('content-section');
const items = document.querySelectorAll('.item');

// Adicione a classe active ao item que deve ser exibido inicialmente
items[0].classList.add('active');
// Mude a cor do span para a cor desejada
items[0].querySelector('span').style.color = 'white'; // Troque 'blue' pela cor desejada

// Adicione um evento de clique a cada item
items.forEach((item) => {
  item.addEventListener('click', (e) => {
    // Obtenha a categoria do item clicado
    const category = item.dataset.category;

    // Remova a classe active de todos os itens
    items.forEach((i) => {
      i.classList.remove('active');
      // Mude a cor do span para a cor original
      i.querySelector('span').style.color = 'initial';
    });

    // Adicione a classe active ao item clicado
    item.classList.add('active');
    // Mude a cor do span para a cor desejada
    item.querySelector('span').style.color = 'white'; // Troque 'blue' pela cor desejada
  

  

    // Oculte todos os elementos dentro da seção de conteúdo
    contentSection.querySelectorAll('div').forEach((element) => {
      element.style.display = 'none';
    });

    // Selecione o elemento de conteúdo correspondente à categoria
    const contentElement = contentSection.querySelector(`#${category}-content`);

    // Exiba o elemento de conteúdo
    contentElement.style.display = 'grid';

    // Exiba todos os elementos dentro do conteúdo
    contentElement.querySelectorAll('*').forEach((element) => {
      element.style.display = '';
    });
  });
});
////////////////////////////////////////////////////////////////////////////

// ESTRUTURA PARA OCUTAR TODAS AS CATEGORIAS NO CONTEUDO PADRAO //
const categories = document.querySelectorAll('.hidden');
const defaultContent = document.getElementById('pastel-content');

  categories.forEach((category) => {
    category.style.display = 'none';
  });

  defaultContent.style.display = 'grid';

//////////////////////////////////////////////////////////////////////



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
            <span class="product-name">${product.name}</span>
            <div class="price">
              <span>R$${product.price}</span>
              <div class="add-to-cart">
                <i class="fa-solid fa-plus " data-index="${index}"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    pastelContainer.insertAdjacentHTML('beforeend', productHTML);
  });

    // Notifica o preloader que os recursos foram carregados
    checkIfAllResourcesLoaded();

    // Adicionar o evento de clique apenas uma vez
    addClickEventListeners();
  }
  
  function addClickEventListeners() {
    const plusIcons = pastelContainer.querySelectorAll('.fa-plus');
    plusIcons.forEach(icon => {
      icon.removeEventListener('click', handleAddToCartClick); // Remove antes de adicionar para evitar múltiplas adições
      icon.addEventListener('click', handleAddToCartClick);
    });
  }
  
  function handleAddToCartClick(event) {
    const icon = event.currentTarget;
    const product = pastel[icon.dataset.index];
    adicionarAoCarrinho(product);
    mostrarNotificacao('Produto adicionado ao carrinho!');
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
    const images = pastelContainer.querySelectorAll('img');
    const allImagesLoaded = Array.prototype.every.call(images, function(image) {
      return image.complete && image.naturalHeight !== 0;
    });
  
    if (allImagesLoaded) {
      // Notifica o preloader que as imagens foram carregadas
      checkIfAllResourcesLoaded();
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
            <span class="product-name">${product.name}</span>
            <div class="price">
              <span>R$${product.price}</span>
              <div class="add-to-cart">
                <i class="fa-solid fa-plus " data-index="${index}"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    bombaContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  checkIfAllResourcesLoaded();

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
            <span class="product-name">${product.name}</span>
            <div class="price">
              <span>R$${product.price}</span>
              <div class="add-to-cart">
                <i class="fa-solid fa-plus " data-index="${index}"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    coxinhaContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  checkIfAllResourcesLoaded();

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

// ESTRUTURA PARA ESFIHA CONTAINER //
let esfihaContainer = document.getElementById('esfiha-content');
let esfiha = [];

fetch('data/esfiha.json')
  .then(response => response.json())
  .then(data => {
    esfiha = data;
    renderEsfihaProducts();
});

// Adicione um evento de escuta ao campo de busca
const searchInputEsfiha = document.getElementById('search-input');
searchInputEsfiha.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredEsfiha = esfiha.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm);
  });
  renderEsfihaProducts(filteredEsfiha);
});

function renderEsfihaProducts( products = esfiha) {
  esfihaContainer.innerHTML = '';
  products.forEach((product, index) => {
    const productHTML = `
      <div class="product-container">
        <div class="content">
          <div class="product-img">
            <img src="${product.image}" alt="">
          </div>
          <div class="product-desc">
            <span class="product-name">${product.name}</span>
            <div class="price">
              <span>R$${product.price}</span>
              <div class="add-to-cart">
                <i class="fa-solid fa-plus " data-index="${index}"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    esfihaContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  checkIfAllResourcesLoaded();

  const plusIcons = esfihaContainer.querySelectorAll('.fa-plus');
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
            <span class="product-name">${product.name}</span>
            <div class="price">
              <span>R$${product.price}</span>
              <div class="add-to-cart">
                <i class="fa-solid fa-plus " data-index="${index}"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    bebidasContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  checkIfAllResourcesLoaded();


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
        renderCart(); // Atualiza o carrinho com a nova quantidade
      } else {
        // Cria o overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        console.log('Overlay criado:', overlay);
  
        // Cria a div de confirmação
        const confirmRemodal = document.createElement('div');
        confirmRemodal.className = 'confirm-remodal';
  
        // Cria a div interna para o texto
        const confirmContentText = document.createElement('div');
        confirmContentText.className = 'confirm-content-text';
  
        // Adiciona o texto à div interna
        const message = document.createElement('p');
        message.textContent = 'Remover produto do carrinho?';
        confirmContentText.appendChild(message);
  
        // Cria a div interna para os botões
        const confirmContentButtons = document.createElement('div');
        confirmContentButtons.className = 'confirm-content-buttons';
  
        // Cria o botão "Sim"
        const yesButton = document.createElement('button');
        yesButton.textContent = 'Sim';
        yesButton.className = 'yes-button';
        yesButton.addEventListener('click', () => {
          // Remove o produto do carrinho se o usuário confirmar
          cart.products = cart.products.filter(p => p.id !== productId);
          renderCart(); // Atualiza o carrinho após remoção
  
          // Cria e exibe a notificação
          const notification = document.createElement('div');
          notification.textContent = 'Produto removido do carrinho!';
          notification.className = 'notificacao';
  
          // Cria e adiciona o botão "X" à notificação
          const closeButton = document.createElement('button');
          closeButton.textContent = 'X'; // Caracter para o "X"
          closeButton.className = 'fechar-notificacao';
          closeButton.addEventListener('click', () => {
            notification.remove(); // Remove a notificação quando o botão "X" é clicado
          });
  
          notification.appendChild(closeButton);
          document.body.appendChild(notification);
  
          // Remove a notificação após 3 segundos, se não for fechada pelo usuário
          setTimeout(() => {
            if (notification) { // Verifica se a notificação ainda está presente
              notification.remove();
            }
          }, 3000);
  
          // Remove o modal de confirmação e o overlay
          confirmRemodal.remove();
          overlay.remove();
        });
  
        // Cria o botão "Não"
        const noButton = document.createElement('button');
        noButton.textContent = 'Não';
        noButton.className = 'no-button'; // Adiciona a classe para estilo
        noButton.addEventListener('click', () => {
          // Remove o modal de confirmação e o overlay
          confirmRemodal.remove();
          overlay.remove();
        });
  
        confirmContentButtons.appendChild(yesButton);
        confirmContentButtons.appendChild(noButton);
  
        confirmRemodal.appendChild(confirmContentText);
        confirmRemodal.appendChild(confirmContentButtons);
  
        // Adiciona o modal de confirmação à página
        document.body.appendChild(confirmRemodal);
  
        // Adiciona o overlay ao DOM e verifica se foi adicionado
        document.body.appendChild(overlay);
        console.log('Overlay adicionado ao DOM');
        overlay.classList.add('show'); // Garante que o overlay será exibido
      }
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
    <p>Forma de pagamento:</p>
    <select id="payment-method">
      <option value="Cartão">Cartão</option>
      <option value="Pix">Pix</option>
      <option value="Dinheiro">Dinheiro</option>
    </select>
    <div id="" >
      <input id="cash-detailss" type="text" placeholder="Valor em dinheiro">
    </div>
    <button id="send-to-whatsapp">Enviar</button>
    <i id="close-overlay" class="fa-solid fa-xmark"></i>
  `;

  overlay.appendChild(overlayContent);
  document.body.appendChild(overlay);

  overlay.classList.add('show');


  overlayContent.innerHTML = `
  <h2>Nome e Endereço</h2>
  <input id="customer-name" type="text" placeholder="Nome">
  <input id="customer-address" type="text" placeholder="Endereço">
  <p>Forma de pagamento:</p>
  <select id="payment-method">
    <option value="Cartão">Cartão</option>
    <option value="Pix">Pix</option>
    <option value="Dinheiro">Dinheiro</option>
  </select>
  <div id="cash-details" style="display: none;">
      <input id="cash-amount" type="text" placeholder="Precisa de troco?">
  </div>
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

  
// Now that the overlay content is appended, we can add the event listener to the paymentMethodSelect element
const paymentMethodSelect = overlayContent.querySelector('#payment-method');
console.log(paymentMethodSelect); // Should find the element now

const cashDetailsDiv = overlayContent.querySelector('#cash-details');

// Função para mostrar/ocultar o campo de dinheiro com base na seleção
const updateCashDetailsVisibility = () => {
  console.log('updateCashDetailsVisibility chamado');
  console.log('Valor selecionado:', paymentMethodSelect.value);
  if (paymentMethodSelect.value === 'Dinheiro') {
    console.log('Mostrando cashDetailsDiv');
    cashDetailsDiv.style.display = 'block';
  } else {
    console.log('Ocultando cashDetailsDiv');
    cashDetailsDiv.style.display = 'none';
  }
};

paymentMethodSelect.addEventListener('change', updateCashDetailsVisibility);

}

function sendCartToWhatsApp(totalPrice) {
  const customerNameInput = document.getElementById('customer-name');
  const customerAddressInput = document.getElementById('customer-address');
  const paymentMethodSelect = document.getElementById('payment-method');
  const trocoEmDinheiroInput = document.getElementById('cash-amount');

  const customerName = encodeURIComponent(customerNameInput.value);
  const customerAddress = encodeURIComponent(customerAddressInput.value);
  const paymentMethod = paymentMethodSelect.value;
  const trocoEmDinheiro = encodeURIComponent(trocoEmDinheiroInput.value);

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
  message += `*Pagamento:* ${paymentMethod}\n`;
  message += `*Troco para:* ${trocoEmDinheiro}`;
 

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