import { estudios } from "./content";

// Nombres de las áreas de estudio, tomados del contenido (sin texto nuevo).
export const areas_nombres = estudios.map((e) => e.titulo);

/** Iniciales de un nombre (para los monogramas del equipo). */
export const iniciales = (n: string) =>
  n
    .split(" ")
    .filter((w) => w.length > 2)
    .map((w) => w[0])
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .join("");
