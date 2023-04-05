import { createElement, fadeAnimation } from "./helpers";

export function showAbout(element) {
  element.innerHTML = "";
  element.appendChild(createElement("h1", "About Us", "page-heading"));
  element.appendChild(
    createElement(
      "p",
      "Here at Nana's, we only use the freshest ingredients to make our pancakes. Just like your nana! Tootsie roll cake gingerbread lollipop apple pie cake. Cotton candy oat cake tootsie roll tiramisu sweet roll pie. Soufflé cupcake shortbread, icing caramels powder apple pie.",
      "about-text"
    )
  );
  element.appendChild(createElement("h2", "Where to find us"));
  element.appendChild(
    createElement(
      "p",
      "We are based in the heart of Surrey. Come and see us at our homely location and take a walk in the surrounding greenery or by the river while you're here.",
      "about-text"
    )
  );
  const map = createElement("iframe", "", "");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d38067.796887035176!2d-0.28870056022111923!3d51.3935491421826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps!5e0!3m2!1sen!2suk!4v1680161768760!5m2!1sen!2suk"
  );
  element.appendChild(map);
  element.appendChild(createElement("p", "7365 Cherry Hill Court", "address"));
  element.appendChild(createElement("p", "Kingston, KT12 L61", "address"));

  const attribution = createElement("p", "", "attribution");
  attribution.innerHTML = `Website by <a href="https://github.com/IceCoffee426">IceCoffee426</a>`;
  element.appendChild(attribution);

  fadeAnimation(element);
}
