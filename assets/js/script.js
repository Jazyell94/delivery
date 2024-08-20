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

  // Oculta todos os conteúdos da div de categorias
  const categoryElements = contentSection.children;
  for (let i = 0; i < categoryElements.length; i++) {
    categoryElements[i].style.display = "none";
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
    contentElement.style.display = 'block';

    // Adicione isso para mostrar todos os elementos dentro do conteúdo
    contentElement.querySelectorAll('*').forEach((element) => {
      element.style.display = 'block';
    });
  });
});