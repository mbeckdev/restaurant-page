"use strict";

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
}

export { loadHomeTab };
