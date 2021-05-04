// import Pic from "./kebab-photo.jpeg";
// import { createHomeCopy } from "./page-home.js";

function loadPage() {
  console.log("it's working now!");
  console.log("it's working nw!");

  const content = document.getElementById("content");
  // createBackgroundImage();
  createHeader();

  // function createBackgroundImage() {
  //   const element = document.createElement("div");
  //   const myPic = new Image();
  //   myPic.src = Pic;
  //   element.appendChild(myPic); //attached to body, no div shows though
  // }

  function createHeader() {
    const headerNode = document.createElement("header");
    content.appendChild(headerNode);
    const h1Node = document.createElement("h1");
    headerNode.appendChild(h1Node);
    const h1Text = document.createTextNode("KRAZY KABOBS");
    h1Node.appendChild(h1Text);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    li1.setAttribute("id", "main-tab");
    li2.setAttribute("id", "menu-tab");
    li3.setAttribute("id", "about-tab");

    const li1Text = document.createTextNode("Main");
    const li2Text = document.createTextNode("Menu");
    const li3Text = document.createTextNode("About");

    li1.appendChild(li1Text);
    li2.appendChild(li2Text);
    li3.appendChild(li3Text);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    nav.appendChild(ul);
    headerNode.appendChild(nav);

    li1.classList.add("tab-selected");
  }

  const copyContainer = document.createElement("div");
  copyContainer.setAttribute("id", "copy-container");
  content.appendChild(copyContainer);
  // content.appendChild(myPic);
  // content.appendChild(element);
}

export { loadPage };
