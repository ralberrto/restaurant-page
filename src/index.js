import "./style.css";
import * as home from "./home.js";

const container = document.querySelector("div#container");
const homeBtn = document.querySelector("button#home");
container.append(home.genContent());

homeBtn.classList.add("active")