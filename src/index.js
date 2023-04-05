import "./style.scss";
import * as about from "./utils/about";
import * as menu from "./utils/menu";
import * as form from "./utils/form";

const content = document.getElementById("content");

const aboutBtn = document.getElementById("about-btn");
const menuBtn = document.getElementById("menu-btn");
const formBtn = document.getElementById("form-btn");

about.showAbout(content);

aboutBtn.onclick = function () {
  about.showAbout(content);
};
menuBtn.onclick = function () {
  menu.showMenu(content);
};
formBtn.onclick = function () {
  form.showForm(content);
};
