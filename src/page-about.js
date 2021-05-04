"use strict";

function loadAboutTab() {
  const copyContainer = document.getElementById("copy-container");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");

  const p1Text = document.createTextNode(
    "Forged from the fires of flavor, we've been making kabobs since 1924."
  );
  // const p2Text = document.createTextNode(
  //   "It all started when Klaus Kabob was sitting at his forge and became hungry. He wondered, 'What if I could put food on a stick and forge food over a fire?'"
  // );
  const p2Text = document.createTextNode(
    "It all started when Klaus Kabob was sitting at his forge and became hungry. He wondered, 'Instead of using this fire to forge metal, what if I use it to forge food?'"
  );
  const p3Text = document.createTextNode("The rest is history.");

  p1.classList.add("about-p");
  p2.classList.add("about-p");
  p3.classList.add("about-p");
  p1.appendChild(p1Text);
  p2.appendChild(p2Text);
  p3.appendChild(p3Text);

  const pContainer = document.createElement("div");
  pContainer.classList.add("about-p-container");

  pContainer.appendChild(p1);
  pContainer.appendChild(p2);
  pContainer.appendChild(p3);
  copyContainer.appendChild(pContainer);
}

export { loadAboutTab };
