const makeHeader = function() {
    const hdr = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Mariscos que llenan tu corazón";
    hdr.appendChild(h1);
    return hdr;
};

const makeCard = function(title, text) {
    const card = document.createElement("div");
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

const makeHomeSection = function() {
    const section = document.createElement("section");

    const contactPhone = makeCard(
        "Llámanos",
        "Fijo: 474 474 4741<br />\
        Móvil: 474 474 1741<br />\
        Whatsapp: 474 474 1741",
        );
    section.appendChild(contactPhone);

    const contactEmail = makeCard(
        "Escríbenos",
        "Cualquier tema: unmail@rmail.com<br />\
        Quejas y sugerencias: quejas@rmail.com"

    );
    section.appendChild(contactEmail);

    return section;
};

const genContent = function() {
    const cont = document.createElement("div");
    cont.appendChild(makeHeader());
    cont.appendChild(makeHomeSection());
    return cont;
};

export {genContent};