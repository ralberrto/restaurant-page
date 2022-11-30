const makeHeader = function() {
    const hdr = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Mariscos que llenan tu corazón";
    hdr.appendChild(h1);
    return hdr;
};

const makeMainSection = function() {
    const section = document.createElement("section");
    const p = document.createElement("p");
    p.textContent = "Nuestra selección de mariscos cuidadosa y nuestros exquisitos platillos\
        hacen de nosotros los mejores mariscos de la región.";
    section.appendChild(p);
    return section;
};

const includeContent = function(container) {
    container.appendChild(makeHeader());
    container.appendChild(makeMainSection());
};

export default includeContent;