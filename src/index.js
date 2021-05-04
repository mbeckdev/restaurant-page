import "./styles.css";
// import Pic from "./kebab-photo.jpeg";

import { loadPage } from "./pageload.js";
import { loadHomeTab } from "./page-home.js";
import { loadMenuTab } from "./page-menu.js";
import { loadAboutTab } from "./page-about.js";

loadPage();
// loadHomeTab();
loadMenuTab();
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

  let theId = tab.id;
  switch (theId) {
    case "main-tab":
      loadHomeTab();
      break;
    case "menu-tab":
      loadMenuTab();
      break;
    case "about-tab":
      loadAboutTab();
      break;
  }
}
