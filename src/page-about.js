"use strict";

function loadAboutTab() {
  console.log("about tab loaded");
  const copyContainer = document.getElementById("copy-container");

  const p1 = document.createElement("p");

  const p1Text = document.createTextNode(
    "Forged from the fires of flavor, we've been making kabobs since 1924. We inspect each kabob for maximum tastinesss. It all started when Klaus Kabob was sitting at his forge and became hungry. He wondered, 'What if I could put food on a stick and forge food over a fire?' The rest is history."
  );

  p1.classList.add("about-p");
  p1.appendChild(p1Text);
  copyContainer.appendChild(p1);
}

export { loadAboutTab };
