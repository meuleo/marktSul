const menuButton = document.querySelector(".btn-menu-categoria");
const menuContent = document.querySelector(".categoria-content");
const arrow = document.querySelector(".arrow-loja");

// Mostrar menu ao passar o mouse
menuButton.addEventListener('mouseenter', () => {
  menuContent.classList.add('categoria-content-active');
  arrow.classList.add('arrow-active');
});

// Esconder menu quando sair com o mouse
menuButton.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!menuContent.matches(':hover')) {
      menuContent.classList.remove('categoria-content-active');
      arrow.classList.remove('arrow-active');
    }
  }, 200);
});

menuContent.addEventListener('mouseleave', () => {
  menuContent.classList.remove('categoria-content-active');
  arrow.classList.remove('arrow-active');
});

menuContent.addEventListener('mouseenter', () => {
  // Garante que o menu continue aberto ao passar o mouse
  menuContent.classList.add('categoria-content-active');
  arrow.classList.add('arrow-active');
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

// Menu Conta
const btnMenu = document.querySelector(".btn-menu-conta");
const menu = document.querySelector(".menu-meuconta");

btnMenu.addEventListener("mouseenter", () => {
  menu.classList.add("categoria-content-active");
});

menu.addEventListener("mouseenter", () => {
  menu.classList.add("categoria-content-active");
});

btnMenu.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!menu.matches(":hover")) {
      menu.classList.remove("categoria-content-active");
    }
  }, 200);
});

menu.addEventListener("mouseleave", () => {
  menu.classList.remove("categoria-content-active");
});

// Menu Conta Mobile
const btnMenuMobile = document.querySelector(".btn-menu-conta-mobile");
const menuMobile = document.querySelector(".menu-meuconta-mobile");

btnMenuMobile.addEventListener("mouseenter", () => {
  menuMobile.classList.add("categoria-content-active");
});

menuMobile.addEventListener("mouseenter", () => {
  menuMobile.classList.add("categoria-content-active");
});

btnMenuMobile.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!menuMobile.matches(":hover")) {
      menuMobile.classList.remove("categoria-content-active");
    }
  }, 200);
});

menuMobile.addEventListener("mouseleave", () => {
  menuMobile.classList.remove("categoria-content-active");
});


// Menu Local
const btnMenuLocal = document.querySelector(".btn-menu-local");
const menuLocal = document.querySelector(".menu-meulocal");

btnMenuLocal.addEventListener("mouseenter", () => {
  menuLocal.classList.add("categoria-content-active");
});

menuLocal.addEventListener("mouseenter", () => {
  menuLocal.classList.add("categoria-content-active");
});

btnMenuLocal.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!menuLocal.matches(":hover")) {
      menuLocal.classList.remove("categoria-content-active");
    }
  }, 200);
});

menuLocal.addEventListener("mouseleave", () => {
  menuLocal.classList.remove("categoria-content-active");
});

// Menu Local Mobile (CORRIGIDO)
const btnMenuMobileLocal = document.querySelector(".btn-menu-local-mobile");
const menuMobileLocal = document.querySelector(".menu-meulocal-mobile");

btnMenuMobileLocal.addEventListener("mouseenter", () => {
  menuMobileLocal.classList.add("categoria-content-active");
});

menuMobileLocal.addEventListener("mouseenter", () => {
  menuMobileLocal.classList.add("categoria-content-active");
});

btnMenuMobileLocal.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!menuMobileLocal.matches(":hover")) {
      menuMobileLocal.classList.remove("categoria-content-active");
    }
  }, 200);
});

menuMobileLocal.addEventListener("mouseleave", () => {
  menuMobileLocal.classList.remove("categoria-content-active");
});


// Provincias
// Provincias
const provinciasDeAngola = [
  "Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte",
  "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte",
  "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"
];

// Gerar lista
document.querySelectorAll(".lista-provincias").forEach(container => {
  const list = document.createElement("div");
  list.classList.add("list-container");

  if (typeof provinciasDeAngola !== 'undefined') {
    provinciasDeAngola.forEach(provincia => {
      const item = document.createElement("div");
      item.textContent = provincia;
      item.classList.add("list-item");

      item.addEventListener('click', () => {
        // Efeito visual
        item.style.backgroundColor = '#fff3e0';
        setTimeout(() => {
          item.style.backgroundColor = '';
        }, 300);

        // Encontrar o input relacionado (anterior ao container da lista)
        const filtroInput = container.previousElementSibling?.querySelector(".filtro-provincias");
        if (filtroInput) {
          filtroInput.value = provincia; // Define o texto no input
        }

        // Exibir no console
        console.log("Província selecionada:", provincia);
      });

      list.appendChild(item);
    });

    container.appendChild(list);
  } else {
    console.error('Variável provinciasDeAngola não está definida!');
  }
});

// Debounce corrigido
function debounce(func, timeout = 300){
  let timer;
  return function(...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, timeout);
  };
}

// Filtro corrigido
document.querySelectorAll(".filtro-provincias").forEach(input => {
  input.addEventListener("input", debounce(function() {
    const filter = this.value.toLowerCase();
    const container = this.closest('.filter-container');
    
    if (container) {
      const listContainer = container.nextElementSibling;
      const items = listContainer?.querySelectorAll('.list-item');
      
      if (items) {
        items.forEach(item => {
          const text = item.textContent.toLowerCase();
          item.style.display = text.includes(filter) ? "flex" : "none";
        });
      }
    }
  }));
});


/** */
//
/** Menu Loja Mobile */
document.querySelectorAll('.expand-menu-mobile').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    const parentLi = this.closest('li');
    const contentMenu = parentLi.querySelector('.content-menu-mobile');

    // Alterna o menu principal
    if (contentMenu.style.maxHeight) {
      contentMenu.style.maxHeight = null;
    } else {
      contentMenu.style.maxHeight = contentMenu.scrollHeight + "px";
    }
  });
});

// Submenu handler
document.querySelectorAll('.content-menu-mobile ul li').forEach(item => {
  item.addEventListener('click', function (e) {
    const submenu = this.querySelector('.content-submenu-mobile');
    if (submenu) {
      e.stopPropagation();
      submenu.classList.add('active');
    }
  });
});

// Fecha submenu ao clicar fora
document.addEventListener('click', function (e) {
  document.querySelectorAll('.content-submenu-mobile.active').forEach(el => {
    if (!el.contains(e.target)) {
      el.classList.remove('active');
    }
  });
});

document.querySelectorAll('.close-submenu-mobile').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const submenu = this.closest('.content-submenu-mobile');
    submenu.classList.remove('active');
  });
});
