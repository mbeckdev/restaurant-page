import "./styles.css";
// import Pic from "./kebab-photo.jpeg";

import { loadPage } from "./pageload.js";
import { loadHomeTab } from "./page-home.js";
import { loadMenuTab } from "./page-menu.js";
import { loadAboutTab } from "./page-about.js";

loadPage();
loadHomeTab();
// loadMenuTab();
// loadAboutTab();

const mainTab = document.getElementById("main-tab");
const menuTab = document.getElementById("menu-tab");
const aboutTab = document.getElementById("about-tab");

mainTab.addEventListener("click", function () {
  clearAndSwitchTab(mainTab);
});
menuTab.addEventListener("click", function () {
  clearAndSwitchTab(menuTab);
});
aboutTab.addEventListener("click", function () {
  clearAndSwitchTab(aboutTab);
});

const copyContainer = document.getElementById("copy-container");
function clearAndSwitchTab(tab) {
  while (copyContainer.firstChild) {
    copyContainer.removeChild(copyContainer.firstChild);
  }

  clearTabColors();
  let theId = tab.id;
  switch (theId) {
    case "main-tab":
      mainTab.classList.add("tab-selected");
      loadHomeTab();
      break;
    case "menu-tab":
      menuTab.classList.add("tab-selected");
      loadMenuTab();
      break;
    case "about-tab":
      aboutTab.classList.add("tab-selected");
      loadAboutTab();
      break;
  }
}

function clearTabColors() {
  mainTab.classList.remove("tab-selected");
  menuTab.classList.remove("tab-selected");
  aboutTab.classList.remove("tab-selected");
}
