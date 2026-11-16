// ======================================
// HUELLITAS FELICES - GALERÍA MULTIESPECIE
// ======================================

const WHATSAPP_NUMBER = "5493757415396";

const mascotas = [
  {
    id: 1,
    nombre: "Max",
    tipo: "perro",
    detalle: "Cachorrito · 2 meses",
    foto: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=85",
    emoji: "🐶"
  },
  {
    id: 2,
    nombre: "Luna",
    tipo: "gato",
    detalle: "Gatita bebé · 2 meses",
    foto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=85",
    emoji: "🐱"
  },
  {
    id: 3,
    nombre: "Toby",
    tipo: "perro",
    detalle: "Cachorrito · 3 meses",
    foto: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=85",
    emoji: "🐶"
  },
  {
    id: 4,
    nombre: "Michi",
    tipo: "gato",
    detalle: "Gatito bebé · 8 semanas",
    foto: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=85",
    emoji: "🐱"
  },
  {
    id: 5,
    nombre: "Nala",
    tipo: "perro",
    detalle: "Cachorrita · 4 meses",
    foto: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=700&q=85",
    emoji: "🐶"
  },
  {
    id: 6,
    nombre: "Simba",
    tipo: "gato",
    detalle: "Gatito · 3 meses",
    foto: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=700&q=85",
    emoji: "🐱"
  },
  {
    id: 7,
    nombre: "Copito",
    tipo: "conejo",
    detalle: "Conejito · edad a consultar",
    foto: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=700&q=85",
    emoji: "🐰"
  },
  {
    id: 8,
    nombre: "Canela",
    tipo: "conejo",
    detalle: "Conejita · edad a consultar",
    foto: "https://images.unsplash.com/photo-1605591518830-9c9c7e5a3b8b?auto=format&fit=crop&w=700&q=85",
    emoji: "🐰"
  },
  {
    id: 9,
    nombre: "Pío",
    tipo: "ave",
    detalle: "Ave pequeña · especie a confirmar",
    foto: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=700&q=85",
    emoji: "🦜"
  },
  {
    id: 10,
    nombre: "Kiwi",
    tipo: "ave",
    detalle: "Pajarito · especie a confirmar",
    foto: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=700&q=85",
    emoji: "🐦"
  },
  {
    id: 11,
    nombre: "Coco",
    tipo: "perro",
    detalle: "Cachorrito · 2 meses",
    foto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=85",
    emoji: "🐶"
  },
  {
    id: 12,
    nombre: "Mora",
    tipo: "gato",
    detalle: "Gatita bebé · 3 meses",
    foto: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=700&q=85",
    emoji: "🐱"
  },
  {
    id: 13,
    nombre: "Bubu",
    tipo: "otro",
    detalle: "Hámster · edad a consultar",
    foto: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=700&q=85",
    emoji: "🐹"
  },
  {
    id: 14,
    nombre: "Manchitas",
    tipo: "otro",
    detalle: "Cobayo · edad a consultar",
    foto: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=700&q=85",
    emoji: "🐹"
  },
  {
    id: 15,
    nombre: "Rocky",
    tipo: "perro",
    detalle: "Cachorrito · 3 meses",
    foto: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=700&q=85",
    emoji: "🐶"
  },
  {
    id: 16,
    nombre: "Milo",
    tipo: "gato",
    detalle: "Gatito pequeño · 2 meses",
    foto: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=700&q=85",
    emoji: "🐱"
  }
];

const grid = document.getElementById("petGrid");
const emptyState = document.getElementById("emptyState");
const search = document.getElementById("petSearch");

let filtroActual = "todos";

const favoritos = new Set();

function crearEnlaceWhatsApp(mensaje) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

function dibujarMascotas() {
  const termino = search.value.trim().toLocaleLowerCase("es");

  const lista = mascotas.filter(m => {
    const coincideTipo =
      filtroActual === "todos" || m.tipo === filtroActual;

    const coincideNombre =
      m.nombre.toLocaleLowerCase("es").includes(termino);

    return coincideTipo && coincideNombre;
  });

  grid.innerHTML = lista.map(m => `
    <article class="pet-card">

      <div class="pet-image">

        <img
          src="${m.foto}"
          alt="${m.nombre}, ${m.tipo} en adopción"
          loading="lazy"
          onerror="this.src='https://placehold.co/700x500/211a2b/ffffff?text=Foto+de+${m.nombre}'"
        >

        <span class="pet-kind">
          ${m.emoji} ${nombreTipo(m.tipo)}
        </span>

        <button
          class="favorite ${favoritos.has(m.id) ? "saved" : ""}"
          data-favorite="${m.id}"
          aria-label="Guardar a ${m.nombre}"
          aria-pressed="${favoritos.has(m.id)}"
        >
          ${favoritos.has(m.id) ? "♥" : "♡"}
        </button>

      </div>

      <div class="pet-info">

        <h3>${m.nombre}</h3>

        <p>${m.detalle}</p>

        <label
          class="name-label"
          for="pet-name-${m.id}"
        >
          ¿Qué nombre le pondrías?
        </label>

        <input
          class="pet-name-input"
          id="pet-name-${m.id}"
          type="text"
          maxlength="35"
          placeholder="Tu nombre favorito..."
        >

        <button
          class="primary-button adopt-pet"
          type="button"
          data-pet="${m.id}"
        >
          Consultar por ${m.nombre} ❤️
        </button>

      </div>

    </article>
  `).join("");

  emptyState.hidden = lista.length !== 0;
}

function nombreTipo(tipo) {
  const nombres = {
    perro: "Perrito",
    gato: "Gatito",
    conejo: "Conejito",
    ave: "Ave",
    otro: "Pequeño animal"
  };

  return nombres[tipo] || "Mascota";
}

// FILTROS DE MASCOTAS

document.querySelectorAll(".filter").forEach(btn => {

  btn.addEventListener("click", () => {

    document.querySelectorAll(".filter").forEach(b => {
      b.classList.remove("active");
    });

    btn.classList.add("active");

    filtroActual = btn.dataset.filter;

    dibujarMascotas();

  });

});

// BUSCADOR

search.addEventListener("input", dibujarMascotas);

// FAVORITOS Y CONSULTAS DE ADOPCIÓN

grid.addEventListener("click", event => {

  const favoriteButton = event.target.closest("[data-favorite]");

  if (favoriteButton) {

    const id = Number(favoriteButton.dataset.favorite);

    favoritos.has(id)
      ? favoritos.delete(id)
      : favoritos.add(id);

    dibujarMascotas();

    return;
  }

  const adoptButton = event.target.closest("[data-pet]");

  if (adoptButton) {

    const id = Number(adoptButton.dataset.pet);

    const mascota = mascotas.find(m => m.id === id);

    const nameInput = document.getElementById(`pet-name-${id}`);

    const nombreElegido = nameInput.value.trim();

    let mensaje =
      `Hola, Huellitas Felices. Quiero consultar por ${mascota.nombre} (${nombreTipo(mascota.tipo)}).`;

    if (nombreElegido) {
      mensaje += ` Si puedo adoptarlo, me gustaría llamarlo ${nombreElegido}.`;
    }

    mensaje +=
      " ¿Me pueden contar más sobre sus cuidados, disponibilidad y proceso de adopción?";

    window.open(
      crearEnlaceWhatsApp(mensaje),
      "_blank",
      "noopener"
    );

  }

});

// FORMULARIO PARA OFRECER CAMADAS

const litterForm = document.getElementById("litterForm");

litterForm.addEventListener("submit", event => {

  event.preventDefault();

  if (!litterForm.reportValidity()) return;

  const datos = new FormData(litterForm);

  const mensaje = [
    "Hola, Huellitas Felices. Quiero ofrecer una camada para encontrar familias responsables.",
    "",
    `Mi nombre: ${datos.get("ownerName")}`,
    `Mi teléfono: ${datos.get("ownerPhone")}`,
    `Animal: ${datos.get("animalType")}`,
    `Cantidad de crías: ${datos.get("litterCount")}`,
    `Edad de las crías: ${datos.get("litterAge")}`,
    `Información adicional: ${datos.get("litterDetails") || "Sin información adicional."}`,
    "",
    "Quedo a disposición para conversar sobre los siguientes pasos."
  ].join("\n");

  window.open(
    crearEnlaceWhatsApp(mensaje),
    "_blank",
    "noopener"
  );

});

// MENÚ HAMBURGUESA

const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const backdrop = document.getElementById("menuBackdrop");

function cerrarMenu() {

  sideMenu.classList.remove("open");

  backdrop.classList.remove("open");

  menuButton.setAttribute("aria-expanded", "false");

  menuButton.setAttribute("aria-label", "Abrir menú");

}

menuButton.addEventListener("click", () => {

  const abierto =
    menuButton.getAttribute("aria-expanded") === "true";

  if (abierto) {

    cerrarMenu();

  } else {

    sideMenu.classList.add("open");

    backdrop.classList.add("open");

    menuButton.setAttribute("aria-expanded", "true");

    menuButton.setAttribute("aria-label", "Cerrar menú");

  }

});

backdrop.addEventListener("click", cerrarMenu);

sideMenu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", cerrarMenu);
});

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    cerrarMenu();
  }

});

// AÑO AUTOMÁTICO DEL FOOTER

document.getElementById("year").textContent =
  new Date().getFullYear();

// INICIAR GALERÍA

dibujarMascotas();