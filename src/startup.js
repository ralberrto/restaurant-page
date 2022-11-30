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
    card.appendChild(body);
    return card;
};

const makeHomeSection = function() {
    const section = document.createElement("section");

    const descriptionCrd = makeCard(
        "Acerca de nosotros",
        "Con mas de 15 años de experiencia, nuestra selección de mariscos cuidadosa y nuestros platillos exquisitos\
        hacen de nosotros los mejores mariscos de la región."
        );
    section.appendChild(descriptionCrd);

    const hoursCrd = makeCard(
        "Horario",
        "De martes a sábado de 12 p.m. a 6 p.m.<br />\
        Domingo de 10 a.m. a 22 p.m."
    );
    section.appendChild(hoursCrd);

    const locationCard = makeCard(
        "Dirección",
        "Avenida del Sol #44, frente al puente de Santa Elena."
    )
    section.appendChild(locationCard);

    return section;
};

const includeContent = function(container) {
    container.appendChild(makeHeader());
    container.appendChild(makeHomeSection());
};

export default includeContent;