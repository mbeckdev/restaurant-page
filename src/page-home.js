"use strict";
import Pic from "./kabob_640_428.jpg";
// import Pic from "./kebab-photo.jpeg";
// import { createHomeCopy } from "./page-home.js";

function loadHomeTab() {
  const copyContainer = document.getElementById("copy-container");
  const content = document.getElementById("content");
  content.appendChild(copyContainer);
  const p1 = document.createElement("p");
  p1.setAttribute("id", "headline");
  copyContainer.appendChild(p1);
  const p1Text = document.createTextNode("IT'S KRAZY DELICIOUS.");
  p1.appendChild(p1Text);

  const divHype = document.createElement("div");
  divHype.setAttribute("id", "hype-container");
  copyContainer.appendChild(divHype);

  const pHype1 = document.createElement("p");
  const pHype2 = document.createElement("p");
  const pHype1Text = document.createTextNode("The best kabobs in the city.");
  const pHype2Text = document.createTextNode(
    "Voted 'The Tastiest' four years in a row."
  );
  pHype1.appendChild(pHype1Text);
  pHype2.appendChild(pHype2Text);
  divHype.appendChild(pHype1);
  divHype.appendChild(pHype2);

  const kebabPic = document.createElement("img");
  // kebabPic.setAttribute("src", "/kabob_640_428.jpg");
  kebabPic.src = Pic;
  kebabPic.setAttribute("alt", "Three tasty looking kebabs on a grill");
  kebabPic.setAttribute("width", 640);
  kebabPic.setAttribute("height", 428);
  copyContainer.appendChild(kebabPic);

  // loadPic();
}

const copyContainer = document.getElementById("copy-container");

// function loadPic() {
//   const element = document.createElement("div");
//   const myPic = new Image();
//   myPic.src = Pic;
//   element.appendChild(myPic); //attached to body, no div shows though
// }

export { loadHomeTab };
