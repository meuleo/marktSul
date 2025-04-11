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
document.querySelector(".btn-menu-local").addEventListener('click', ()=> {
  document.querySelector(".menu-meulocal").classList.toggle('categoria-content-active')
})