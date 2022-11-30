import "./style.css";
import * as home from "./home";

const container = document.querySelector("div#container");
const btns = document.querySelectorAll("footer button");

const makeBtnsInactive = function() {
    btns.forEach(x => x.classList.remove("active"));
};

const clearContainer = function() {
    container.innerHTML = "";
};

const homeAction = function() {
    makeBtnsInactive();
    this.classList.add("active");
    clearContainer();
    container.append(home.genContent());
};

const homeBtn = document.querySelector("button#home");
homeBtn.onclick = homeAction;

const menuBtn = document.querySelector("button#menu");
menuBtn.onclick = homeAction;

const contactBtn = document.querySelector("button#contact");
contactBtn.onclick = homeAction;