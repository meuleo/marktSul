// --------------------------
// Category Menu (Desktop)
// --------------------------
const categoryMenuButton = document.querySelector(".btn-menu-categoria");
const categoryMenuContent = document.querySelector(".categoria-content");
const storeArrow = document.querySelector(".arrow-loja");

const handleCategoryMenuEnter = () => {
  categoryMenuContent.classList.add('categoria-content-active');
  storeArrow.classList.add('arrow-active');
};

const handleCategoryMenuLeave = () => {
  setTimeout(() => {
    if (!categoryMenuContent.matches(':hover')) {
      categoryMenuContent.classList.remove('categoria-content-active');
      storeArrow.classList.remove('arrow-active');
    }
  }, 200);
};

categoryMenuButton.addEventListener('mouseenter', handleCategoryMenuEnter);
categoryMenuButton.addEventListener('mouseleave', handleCategoryMenuLeave);

categoryMenuContent.addEventListener('mouseleave', () => {
  categoryMenuContent.classList.remove('categoria-content-active');
  storeArrow.classList.remove('arrow-active');
});

categoryMenuContent.addEventListener('mouseenter', handleCategoryMenuEnter);

// --------------------------
// Submenu Control
// --------------------------
document.querySelectorAll('.categoria-menu li').forEach(menuItem => {
  const submenu = menuItem.querySelector('.submenu-container');
  
  if(submenu) {
    let submenuTimeout;
    
    const showSubmenu = () => {
      clearTimeout(submenuTimeout);
      document.querySelectorAll('.submenu-container').forEach(s => s.style.display = 'none');
      submenu.style.display = 'block';
    };
    
    const hideSubmenu = () => {
      submenuTimeout = setTimeout(() => {
        submenu.style.display = 'none';
      }, 200);
    };
    
    menuItem.addEventListener('mouseenter', showSubmenu);
    menuItem.addEventListener('mouseleave', hideSubmenu);
    submenu.addEventListener('mouseenter', () => clearTimeout(submenuTimeout));
    submenu.addEventListener('mouseleave', () => submenu.style.display = 'none');
  }
});

// --------------------------
// Account Menu (Desktop & Mobile)
// --------------------------
const accountMenuHandlers = (buttonClass, menuClass) => {
  const menuButton = document.querySelector(buttonClass);
  const menu = document.querySelector(menuClass);

  const handleMenuEnter = () => menu.classList.add("categoria-content-active");
  const handleMenuLeave = (menuElement) => {
    setTimeout(() => {
      if (!menuElement.matches(":hover")) {
        menuElement.classList.remove("categoria-content-active");
      }
    }, 200);
  };

  if (menuButton && menu) {
    menuButton.addEventListener("mouseenter", handleMenuEnter);
    menu.addEventListener("mouseenter", handleMenuEnter);
    menuButton.addEventListener("mouseleave", () => handleMenuLeave(menu));
    menu.addEventListener("mouseleave", () => menu.classList.remove("categoria-content-active"));
  }
};

// Initialize account menus
accountMenuHandlers(".btn-menu-conta", ".menu-meuconta");
accountMenuHandlers(".btn-menu-conta-mobile", ".menu-meuconta-mobile");

// --------------------------
// Location Menu (Desktop & Mobile)
// --------------------------
const locationMenuHandlers = (buttonClass, menuClass) => {
  const menuButton = document.querySelector(buttonClass);
  const menu = document.querySelector(menuClass);

  const handleMenuEnter = () => menu.classList.add("categoria-content-active");
  const handleMenuLeave = (menuElement) => {
    setTimeout(() => {
      if (!menuElement.matches(":hover")) {
        menuElement.classList.remove("categoria-content-active");
      }
    }, 200);
  };

  if (menuButton && menu) {
    menuButton.addEventListener("mouseenter", handleMenuEnter);
    menu.addEventListener("mouseenter", handleMenuEnter);
    menuButton.addEventListener("mouseleave", () => handleMenuLeave(menu));
    menu.addEventListener("mouseleave", () => menu.classList.remove("categoria-content-active"));
  }
};

// Initialize location menus
locationMenuHandlers(".btn-menu-local", ".menu-meulocal");
locationMenuHandlers(".btn-menu-local-mobile", ".menu-meulocal-mobile");

// --------------------------
// Province Selection
// --------------------------
const provincesOfAngola = [
  "Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte",
  "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte",
  "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"
];

const generateProvinceList = (container) => {
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");

  provincesOfAngola.forEach(province => {
    const listItem = document.createElement("div");
    listItem.textContent = province;
    listItem.classList.add("list-item");

    listItem.addEventListener('click', () => {
      listItem.style.backgroundColor = '#fff3e0';
      setTimeout(() => (listItem.style.backgroundColor = ''), 300);
      
      const filterInput = container.previousElementSibling?.querySelector(".filtro-provincias");
      if (filterInput) filterInput.value = province;
      console.log("Selected province:", province);
    });

    listContainer.appendChild(listItem);
  });

  container.appendChild(listContainer);
};

document.querySelectorAll(".lista-provincias").forEach(generateProvinceList);

// --------------------------
// Search Filter Utilities (Corrigido)
// --------------------------
const debounce = (func, timeout = 300) => {
  let timer;
  return function(...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), timeout);
  };
};

document.querySelectorAll(".filtro-provincias").forEach(input => {
  input.addEventListener("input", debounce(function() {
    const filterText = this.value.toLowerCase();
    const container = this.closest('.filter-container');
    
    if (container) {
      const listContainer = container.nextElementSibling;
      if (listContainer) {
        const items = listContainer.querySelectorAll('.list-item');
        items.forEach(item => {
          const text = item.textContent.toLowerCase();
          item.style.display = text.includes(filterText) ? "flex" : "none";
        });
      }
    }
  }));
});

// --------------------------
// Mobile Menu Handlers
// --------------------------
document.querySelectorAll('.expand-menu-mobile').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const menuContent = button.closest('li').querySelector('.content-menu-mobile');
    menuContent.style.maxHeight = menuContent.style.maxHeight ? null : `${menuContent.scrollHeight}px`;
  });
});

document.querySelectorAll('.content-menu-mobile ul li').forEach(item => {
  item.addEventListener('click', (e) => {
    const submenu = item.querySelector('.content-submenu-mobile');
    if (submenu) {
      e.stopPropagation();
      submenu.classList.add('active');
    }
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.content-submenu-mobile.active').forEach(submenu => {
    if (!submenu.contains(event.target)) submenu.classList.remove('active');
  });
});

document.querySelectorAll('.close-submenu-mobile').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    button.closest('.content-submenu-mobile').classList.remove('active');
  });
});