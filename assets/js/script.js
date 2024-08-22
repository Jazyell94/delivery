// MUADR A SECTION NO MENU //

// Seleciona os botões
const homeIcon = document.getElementById("home-icon");
const favoritiesIcon = document.getElementById("favorities-icon");
const cartIcon = document.getElementById("cart-icon");
const profileIcon = document.getElementById("profile-icon");

// Seleciona as sections
const homeSection = document.getElementById("home-section");
const favoritiesSection = document.getElementById("favorities-section");
const cartSection = document.getElementById("cart-section");
const profileSection = document.getElementById("profile-section");

homeIcon.classList.add("active");

// Adiciona evento de clique aos botões
homeIcon.addEventListener("click", () => {
  homeSection.style.display = "block";
  favoritiesSection.style.display = "none";
  cartSection.style.display = "none";
  profileSection.style.display = "none";

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
  favoritiesIcon.classList.remove("active");
  cartIcon.classList.remove("active");
  profileIcon.classList.remove("active");
});

// Adiciona evento de clique aos botões
favoritiesIcon.addEventListener("click", () => {
  homeSection.style.display = "none";
  favoritiesSection.style.display = "block";
  cartSection.style.display = "none";
  profileSection.style.display = "none";
  
  // Adiciona classe para mudar a cor do ícone
  homeIcon.classList.remove("active");
  favoritiesIcon.classList.add("active");
  cartIcon.classList.remove("active");
  profileIcon.classList.remove("active");
});

// Adiciona evento de clique aos botões
cartIcon.addEventListener("click", () => {
  homeSection.style.display = "none";
  favoritiesSection.style.display = "none";
  cartSection.style.display = "block";
  profileSection.style.display = "none";
  
  // Adiciona classe para mudar a cor do ícone
  homeIcon.classList.remove("active");
  favoritiesIcon.classList.remove("active");
  cartIcon.classList.add("active");
  profileIcon.classList.remove("active");
});

// Adiciona evento de clique aos botões
profileIcon.addEventListener("click", () => {
  homeSection.style.display = "none";
  favoritiesSection.style.display = "none";
  cartSection.style.display = "none";
  profileSection.style.display = "block";
  
  // Adiciona classe para mudar a cor do ícone
  homeIcon.classList.remove("active");
  favoritiesIcon.classList.remove("active");
  cartIcon.classList.remove("active");
  profileIcon.classList.add("active");
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
              <i class="fa-solid fa-plus add-to-cart"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    bebidasContainer.insertAdjacentHTML('beforeend', productHTML);
  });
}
////////////////////////////////////////

const profilePictureInput = document.getElementById('profile-picture-input');
const profilePictureImg = document.getElementById('profile-picture');
const profileNameInput = document.getElementById('profile-name-input');
const profileNameDisplay = document.getElementById('profile-name-display');
const saveProfileBtn = document.getElementById('save-profile-btn');

let isEditing = false;

// Recuperar a imagem e o nome do localStorage quando a página for carregada
const storedProfilePicture = localStorage.getItem('profilePicture');
const storedProfileName = localStorage.getItem('profileName');
if (storedProfilePicture) {
  profilePictureImg.src = storedProfilePicture;
}
if (storedProfileName) {
  profileNameDisplay.textContent = storedProfileName;
  profileNameInput.style.display = 'none';
  saveProfileBtn.textContent = 'Editar perfil';
  isEditing = true;
}

profilePictureInput.addEventListener('change', () => {
  const file = profilePictureInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const imageData = reader.result;
    profilePictureImg.src = imageData;
    // Atualizar o valor do profileNameDisplay aqui
    profileNameDisplay.textContent = profileNameInput.value;
  };
  reader.readAsDataURL(file);
});

const usernameDisplay = document.getElementById('username-display');

saveProfileBtn.addEventListener('click', () => {
  if (isEditing) {
    // Modo de edição
    profileNameInput.style.display = 'block';
    profileNameDisplay.style.display = 'none';
    saveProfileBtn.textContent = 'Salvar perfil';
    isEditing = false;
  } else {
    // Modo de salvar
    const profilePicture = profilePictureImg.src;
    const profileName = profileNameInput.value;
    console.log(`Profile name: ${profileName}`); // Add this line to check the value of profileName
    localStorage.setItem('profilePicture', profilePicture);
    localStorage.setItem('profileName', profileName);
    const event = new Event('input', { bubbles: true });
    profileNameInput.dispatchEvent(event);
    profileNameDisplay.textContent = profileName; // Atualizar o texto imediatamente
    localStorage.setItem('profileName', profileName);
    usernameDisplay.innerHTML = `${localStorage.getItem('profileName')}`;
    profileNameInput.style.display = 'none';
    saveProfileBtn.textContent = 'Editar perfil';
    isEditing = true;
    alert('Perfil salvo com sucesso!');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const storedProfileName = localStorage.getItem('profileName');
  if (storedProfileName) {
    usernameDisplay.innerHTML = `${storedProfileName}`;
  }
});