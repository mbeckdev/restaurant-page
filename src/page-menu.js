"use strict";

function loadMenuTab() {
  console.log("menu tab loaded");
  const copyContainer = document.getElementById("copy-container");

  // const menuItems = {
  //   item: {
  //     desc: "EGG AND KABOB",
  //     price: "5.49",
  //   },
  // };

  const allDescriptions = [
    "EGG AND KABOB",
    "EGG, BACON AND KABOB",
    "EGG, BACON, SAUSAGE AND KABOB",
    "KABOB, BACON, SAUSAGE AND KABOB",
    "KABOB, EGG, KABOB, KABOB, BACON AND KABOB",
    "KABOB, KABOB, KABOB, EGG AND KABOB",
    "KABOB, KABOB, KABOB, KABOB, KABOB, KABOB,  BAKED BEANS, KABOB, KABOB, KABOB AND KABOB",
    "LOBSTER THERMIDOR AUX CREVETTES WITH A MORNAY SAUCE GARNISHED WITH TRUFFLE PATE BRANDY AND A FRIED EGG ON TOP AND KABOB",
  ];
  const allPrices = [
    "5.49",
    "7.95",
    "10.12",
    "12.90",
    "15.45",
    "18.99",
    "35.49",
    "55.95",
  ];

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  copyContainer.appendChild(menuContainer);

  allDescriptions.forEach((thisDescription) => {
    const menuRow = document.createElement("div");
    menuRow.classList.add("menu-row");
    menuContainer.appendChild(menuRow);

    const aDescription = document.createElement("div");
    const aPrice = document.createElement("div");

    aDescription.classList.add("menu-item");
    aPrice.classList.add("price");

    const aDescriptionText = document.createTextNode(thisDescription);
    // which place are we at in the description array? make sure it matches the prices
    const aPriceText = document.createTextNode(
      allPrices[allDescriptions.indexOf(thisDescription)]
    );

    aDescription.appendChild(aDescriptionText);
    aPrice.appendChild(aPriceText);

    menuRow.appendChild(aDescription);
    menuRow.appendChild(aPrice);
  });
}

export { loadMenuTab };
