import fish from "./images/salmon.jpg";
import shrimp from "./images/camaron.jpg";
import aguachile from "./images/aguachile.gif";

const makeHeader = function() {
    const hdr = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Mariscos que llenan tu corazón";
    hdr.appendChild(h1);
    return hdr;
};

const makeCard = function(title, text, imgSrc) {
    const card = document.createElement("div");
    card.style.backgroundImage = `url(${imgSrc})`;
    card.style.backgroundPosition = "bottom right";
    const titleBox = document.createElement("h2");
    titleBox.textContent = title;
    const body = document.createElement("p");
    body.innerHTML = text;
    card.appendChild(titleBox);
    const line = document.createElement("hr");
    card.appendChild(line);
    card.appendChild(body);
    return card;
};

const makeMenuSection = function() {
    const section = document.createElement("section");

    const descriptionCrd = makeCard(
        "Salmón Zarandeao",
        "Nuestro rico Salmón Zarandeao, ligeramente picante y acompañado con arroz y ensalada de lechuga.",
        fish
        );
    section.appendChild(descriptionCrd);

    const hoursCrd = makeCard(
        "Camarón Zarandeao",
        "Nuestro rico Camarón Zarandeao: tostado, ligeramente picante y acompañado con arroz y ensalada de lechuga.",
        shrimp
    );
    section.appendChild(hoursCrd);

    const locationCard = makeCard(
        "Aguachile",
        "Aguachile de camarón, con chile verde y habanero, pepino, mango, piña y limón.",
        aguachile
    )
    section.appendChild(locationCard);

    return section;
};

const genContent = function() {
    const cont = document.createElement("div");
    cont.appendChild(makeHeader());
    cont.appendChild(makeMenuSection());
    return cont;
};

export {genContent};