import Pic from "./kebab-photo.jpeg";

function loadPage() {
  console.log("it's working now!");
  console.log("it's working nw!");

  const content = document.getElementById("content");
  createBackgroundImage();
  createHeader();
  createCopy();

  function createBackgroundImage() {
    const element = document.createElement("div");
    const myPic = new Image();
    myPic.src = Pic;
    element.appendChild(myPic); //attached to body, no div shows though
  }

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
  }

  function createCopy() {
    const copyContainer = document.createElement("div");
    copyContainer.setAttribute("id", "copy-container");
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
  // content.appendChild(myPic);
  // content.appendChild(element);
}

export { loadPage };
