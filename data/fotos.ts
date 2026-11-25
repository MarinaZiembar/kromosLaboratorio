// Fotos de Pexels (licencia libre, sin atribución obligatoria).
// Para alojarlas en el propio servidor: `npm run fotos` las descarga a public/img/fotos
// y después cambiar USAR_LOCALES a true.
const USAR_LOCALES = false;

const pexels = (id: number, w = 1600) =>
  USAR_LOCALES
    ? `/img/fotos/${id}.jpg`
    : `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const fotos = {
  slide1: { src: "/img/home/hero-1.jpg", alt: "Gotas y burbujas en tonos turquesa y ocre vistas de cerca" },
  slide2: { src: "/img/home/hero-2.jpg", alt: "Profesional trabajando con una pipeta en el laboratorio" },
  slide3: { src: "/img/home/hero-3.jpg", alt: "Familia sonriente abrazada en su casa" },
  servicios: { src: "/img/home/servicios-a-terceros.jpg", alt: "" },
  turnos: { src: pexels(31156739, 1200), alt: "Padres sonrientes levantando a su bebé" },
  nosotros: { src: "/img/home/hero-nosotros.jpg", alt: "Profesional observando una muestra en el microscopio" },
  estudios: { src: "/img/home/hero-estudios.jpg", alt: "Gotas y burbujas en tonos celestes vistas al microscopio" },
  terceros: { src: "/img/home/hero-servicios.jpg", alt: "Microscopio sobre un escritorio de laboratorio" },
  masonry2: { src: "/img/home/masonry-2.jpg", alt: "" },
  masonry3: { src: "/img/home/masonry-3.jpg", alt: "" },
  turnoHome: { src: "/img/home/necesitas-turno.jpg", alt: "" },
  vision: { src: "/img/home/hero-2.jpg", alt: "Profesional trabajando con una pipeta en el laboratorio" },
  mision: { src: "/img/home/masonry-3.jpg", alt: "Objetivos de un microscopio" },
  contacto: { src: pexels(27176986), alt: "Familia sonriente abrazada en un parque" },
};

export const IDS_PEXELS = [6849623, 4266944, 31156739, 1170979, 27177631, 4266930, 27176986];
