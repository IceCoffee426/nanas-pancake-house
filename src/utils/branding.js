import { createElement, fadeAnimation } from "./helpers";
import Leaf from "../images/leaf.png";

export function showBranding(element) {
  const branding = createElement("div", "", "branding");

  const logo = createElement("div", "", "logo");
  const logoImg = document.createElement("img");
  logoImg.src = Leaf;
  logoImg.classList.add("logo-img");
  logo.appendChild(logoImg);
  const h1 = createElement("div", "Nana's Pancake House", "logo-text");
  logo.appendChild(h1);
  branding.appendChild(logo);

  const navigation = createElement("div", "", "navigation");
  navigation.innerHTML = `<button id="about-btn" type="button">About Us</button
                          ><button id="menu-btn" type="button">Menu</button
                          ><button id="form-btn" type="button">Sign Up</button>`;
  branding.appendChild(navigation);

  const acknowledgements = createElement("div", "", "acknowledgements");
  acknowledgements.innerHTML = `<ul>
                                  <li>
                                    Photo by
                                    <a
                                      href="https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                                      >Mae Mu</a
                                    >
                                    on
                                    <a
                                      href="https://unsplash.com/photos/TkzdkVn1AyA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                                      >Unsplash</a
                                    >
                                  </li>
                                  <li>
                                    Icon by
                                    <a
                                      href="https://www.flaticon.com/free-icons/maple-leaf"
                                      title="maple leaf icons"
                                      >iconixar</a
                                    >
                                    on <a href="https://www.flaticon.com">Flaticon</a>
                                  </li>
                                </ul>`;
  branding.appendChild(acknowledgements);

  element.appendChild(branding);
}
