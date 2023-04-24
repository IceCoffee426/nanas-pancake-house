import "./style.css";
import * as branding from "./utils/branding";
import * as about from "./utils/about";
import * as menu from "./utils/menu";
import * as form from "./utils/form";
import { createElement } from "./utils/helpers";

const root = document.getElementById("root");
branding.showBranding(root);

const content = createElement("div", "", "content");
root.appendChild(content);
about.showAbout(content);

const aboutBtn = document.getElementById("about-btn");
const menuBtn = document.getElementById("menu-btn");
const formBtn = document.getElementById("form-btn");

aboutBtn.onclick = function () {
  about.showAbout(content);
};
menuBtn.onclick = function () {
  menu.showMenu(content);
};
formBtn.onclick = function () {
  form.showForm(content);
};
