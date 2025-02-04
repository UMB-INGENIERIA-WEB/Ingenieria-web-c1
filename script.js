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
        text: "El pez dragón es un depredador de aguas profundas con un cuerpo alargado, bioluminiscencia y dientes afilados. Habita en océanos oscuros y caza con señuelos luminosos.",
        alt: "Pez dragón"
    },
    {
        image: "img/Cangrejogigante.webp",
        title: "Cangrejo gigante",
        text: "El cangrejo gigante, como el cangrejo araña japonés (Macrocheira kaempferi), es el artrópodo más grande del mundo, con patas que pueden alcanzar 4 metros de envergadura. Habita en aguas profundas del Pacífico.",
        alt: "Cangrejo gigante"
    },
    {
        image: "img/Mantarraya.webp",
        title: "Mantarraya",
        text: "La mantarraya (Manta birostris) es un pez cartilaginoso de gran tamaño que puede medir hasta 7 metros de envergadura. Nada en aguas cálidas y se alimenta filtrando plancton.",
        alt: "Mantarraya"
    },
    {
        image: "img/Tortugamarina.webp",
        title: "Tortuga marina",
        text: "La tortuga marina es un reptil que pasa la mayor parte de su vida en el agua. Hay varias especies, como la tortuga verde, la carey y la laúd. Se alimentan de plantas marinas, medusas y otros invertebrados, y suelen regresar a las playas donde nacieron para poner sus huevos.",
        alt: "Tortuga marina"
    },
    {
        image: "img/Estrellademar.webp",
        title: "Estrella de mar",
        text: "La estrella de mar es un equinodermo marino con un cuerpo central del que se extienden generalmente cinco brazos. Se alimenta de moluscos y otros invertebrados, utilizando sus pies ambulacrales para moverse y capturar presas.",
        alt: "Estrella de mar"
    },
    {
        image: "img/Tiburonmartillo.webp",
        title: "Tiburón martillo",
        text: "El tiburón martillo (Sphyrna) es una especie de tiburón conocida por su cabeza en forma de martillo. Esta característica le ayuda a mejorar su visión y a localizar presas, como peces y crustáceos. Habita en aguas cálidas y tropicales.",
        alt: "Tiburón martillo"
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