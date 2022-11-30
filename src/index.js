import "./style.css";
import * as home from "./home";
import * as menu from "./menu";
import * as contact from "./contact";

const container = document.querySelector("div#container");
const btns = document.querySelectorAll("footer button");

const makeBtnsInactive = function() {
    btns.forEach(x => x.classList.remove("active"));
};

const clearContainer = function() {
    container.innerHTML = "";
};

const clearAll = function() {
    makeBtnsInactive();
    clearContainer();
};

const homeAction = function() {
    clearAll();
    this.classList.add("active");
    container.append(home.genContent());
};

const menuAction = function() {
    clearAll();
    this.classList.add("active");
    container.append(menu.genContent());
};

const contactAction = function() {
    clearAll();
    this.classList.add("active");
    container.append(contact.genContent());
};

const homeBtn = document.querySelector("button#home");
homeBtn.onclick = homeAction;

const menuBtn = document.querySelector("button#menu");
menuBtn.onclick = menuAction;

const contactBtn = document.querySelector("button#contact");
contactBtn.onclick = contactAction;

homeAction.call(homeBtn);