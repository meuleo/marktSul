// JavaScript Atualizado
const menuButton = document.querySelector(".btn-menu-categoria");
const menuContent = document.querySelector(".categoria-content");
const arrow = document.querySelector(".arrow-loja");

// Abrir/fechar menu principal
menuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  menuContent.classList.toggle('categoria-content-active');
  arrow.classList.toggle('arrow-active'); // Adiciona/remove classe da seta
});

// Fechar ao clicar fora
document.addEventListener('click', (e) => {
  if (!menuButton.contains(e.target) && !menuContent.contains(e.target)) {
    menuContent.classList.remove('categoria-content-active');
    // arrow.classList.toggle('arrow-active'); 
  }
});

// Controle dos submenus (mantido igual)
document.querySelectorAll('.categoria-menu li').forEach(item => {
  const submenu = item.querySelector('.submenu-container');
  
  if(submenu) {
    let timeout;
    
    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      document.querySelectorAll('.submenu-container').forEach(s => s.style.display = 'none');
      submenu.style.display = 'block';
    });
    
    item.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        submenu.style.display = 'none';
      }, 200);
    });
    
    submenu.addEventListener('mouseenter', () => clearTimeout(timeout));
    submenu.addEventListener('mouseleave', () => submenu.style.display = 'none');
  }
});

// Menu Local
const btnMenu = document.querySelector(".btn-menu-local");
const menu = document.querySelector(".menu-meulocal");

// Abrir/fechar menu ao clicar no botão
btnMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // evita que o clique feche imediatamente
  menu.classList.toggle("categoria-content-active");
});

// Impedir que clique dentro do menu feche ele
menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Fechar o menu ao clicar fora
document.addEventListener("click", () => {
  menu.classList.remove("categoria-content-active");
});

/** */
//** */ Script Menu Local Mobile
/** */
const btnMenuMobile = document.querySelector(".btn-menu-local-mobile");
const menuMobile = document.querySelector(".menu-meulocal-mobile");

// Abrir/fechar menu ao clicar no botão
btnMenuMobile.addEventListener("click", (e) => {
  e.stopPropagation(); // evita que o clique feche imediatamente
  menuMobile.classList.toggle("categoria-content-active");
});

// Impedir que clique dentro do menu feche ele
menuMobile.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Fechar o menu ao clicar fora
document.addEventListener("click", () => {
  menuMobile.classList.remove("categoria-content-active");
});
