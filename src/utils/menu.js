import { createElement, fadeAnimation } from "./helpers";

export function showMenu(element) {
  element.innerHTML = "";
  element.appendChild(createElement("h1", "Menu", "page-heading"));
  element.appendChild(
    createElement(
      "p",
      "With the freshest of fruit and the batter prepared right before your eyes, you can't go wrong with any of our choices. Special options available for dietary requirements.",
      "menu-text"
    )
  );
  const menuGrid = createElement("div", "", "menu-grid");

  for (let i = 0; i < 6; i++) {
    const menuItem = createElement("div", "", "menu-item");
    switch (i) {
      case 0:
        menuItem.appendChild(
          createElement("p", "Menu item 1", "menu-item-caption")
        );
        break;
      case 1:
        menuItem.appendChild(
          createElement("p", "Menu item 2", "menu-item-caption")
        );
        break;
      case 2:
        menuItem.appendChild(
          createElement("p", "Menu item 3", "menu-item-caption")
        );
        break;
      case 3:
        menuItem.appendChild(
          createElement("p", "Menu item 4", "menu-item-caption")
        );
        break;
      case 4:
        menuItem.appendChild(
          createElement("p", "Menu item 5", "menu-item-caption")
        );
        break;
      case 5:
        menuItem.appendChild(
          createElement("p", "Menu item 6", "menu-item-caption")
        );
        break;
    }
    menuItem.dataset.index = i + 1;
    menuGrid.appendChild(menuItem);
  }
  element.appendChild(menuGrid);

  const attribution = createElement("p", "", "attribution");
  attribution.innerHTML = `Website by <a href="https://github.com/IceCoffee426">IceCoffee426</a>`;
  element.appendChild(attribution);

  fadeAnimation(element);
}
