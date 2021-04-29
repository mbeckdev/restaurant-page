import "./styles.css";
import Pic from "./kebab-photo.jpeg";

console.log("it's working now!");
console.log("it's working nw!");

const element = document.createElement("div");

const myPic = new Image();
myPic.src = Pic;
element.appendChild(myPic);
