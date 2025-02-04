// Datos de las cards
const cardsData = [
    {
        image: "img/Calamar.webp",
        title: "Calamar gigante",
        text: "El calamar gigante (Architeuthis dux) es un cefalópodo de aguas profundas que puede medir hasta 13 metros. Tiene ocho brazos, dos tentáculos largos y los ojos más grandes del reino animal.",
        alt: "Calamar gigante"
    },
    {
        image: "img/Tiburonballena.webp",
        title: "Tiburón ballena",
        text: "El tiburón ballena (Rhincodon typus) es el pez más grande del mundo, alcanzando hasta 18 metros. Es un filtrador que se alimenta de plancton y pequeños peces en aguas cálidas.",
        alt: "Tiburón ballena"
    },
    {
        image: "img/Narval.webp",
        title: "Narval",
        text: "El narval (Monodon monoceros) es un cetáceo ártico conocido por su largo colmillo en espiral, que puede medir hasta 3 metros. Se alimenta de peces y calamares en aguas frías.",
        alt: "Narval"
    },
    {
        image: "img/Pezdragon.webp",
        title: "Pez dragón",
        text: "Descripción de la card 4. Este es un texto de ejemplo.",
        alt: "Pez dragón"
    },
    {
        image: "img/Cangrejogigante.webp",
        title: "Cangrejo gigante",
        text: "Descripción de la card 5. Este es un texto de ejemplo.",
        alt: "Cangrejo gigante"
    },
    {
        image: "img/Mantarraya.webp",
        title: "Mantarraya",
        text: "Descripción de la card 6. Este es un texto de ejemplo.",
        alt: "Mantarraya"
    },
    {
        image: "https://via.placeholder.com/300",
        title: "Card 7",
        text: "Descripción de la card 7. Este es un texto de ejemplo.",
        alt: "Imagen de ejemplo"
    },
    {
        image: "https://via.placeholder.com/300",
        title: "Card 8",
        text: "Descripción de la card 8. Este es un texto de ejemplo.",
        alt: "Imagen de ejemplo"
    },
    {
        image: "https://via.placeholder.com/300",
        title: "Card 9",
        text: "Descripción de la card 9. Este es un texto de ejemplo.",
        alt: "Imagen de ejemplo"
    }
];

// Función para generar las cards
function generateCards() {
    const cardContainer = document.getElementById("card-container");

    cardsData.forEach(card => {
        const cardHTML = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                    <img src="${card.image}" class="card-img-top" alt="${card.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.text}</p>
                        <a href="#" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            </div>
        `;
        cardContainer.innerHTML += cardHTML;
    });
}

// Llamar a la función para generar las cards
generateCards();