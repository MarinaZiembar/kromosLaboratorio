// Textos del sitio actual (kromoslab.com.ar), copiados tal cual.

export const contacto = {
  telefono: "7538-5549",
  telefonoHref: "tel:75385549",
  whatsapp: "1144788834",
  whatsappHref: "https://wa.me/5491144788834",
  email: "citogeneticakromos@gmail.com",
  horario: "Lunes a viernes de 10:00 a 17:00",
  direccion: 'Av. Corrientes 5535, PB "A", Villa Crespo, CABA',
  mapaLink: "https://maps.app.goo.gl/ttSdUHSSLRwHvth37",
  mapaEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.288935673245!2d-58.444405823503786!3d-34.59685455713702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca0ae6591951%3A0xe9155b3205dfc40a!2sAv.%20Corrientes%205535%2C%20C1414%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1768176991042!5m2!1ses!2sar",
};

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros/", label: "Sobre Nosotros" },
  { href: "/estudios/", label: "Estudios" },
  { href: "/servicios-a-terceros/", label: "Servicios a terceros" },
  { href: "/contacto/", label: "Contacto" },
];

/* ---------- Inicio ---------- */
export const slides = [
  { titulo: "45 años de experiencia", texto: "prestando servicios de citogenética" },
  { titulo: "Calidad y seguridad", texto: "En cada paso del procesamiento y el análisis" },
  { titulo: "Resultados confiables", texto: "para tu tranquilidad y la de tu familia" },
];

export const intro = [
  "Somos una empresa especializada en citogenética,",
  "con más de 50.000 estudios realizados hasta el momento.",
];

export const ofrecemosTitulo = "En Kromos te ofrecemos:";
export const ofrecemos = [
  { icono: "ofrecemos1.png", alt: "Microscopio", lineas: ["Excelencia", "técnica"] },
  { icono: "ofrecemos2.png", alt: "Probetas", lineas: ["Altos estándares", "de calidad"] },
  { icono: "ofrecemos3.png", alt: "Precisión", lineas: ["Precisión en", "los resultados"] },
  { icono: "ofrecemos4.png", alt: "Notepad", lineas: ["Asesoramiento", "personalizado"] },
];

export const turnos = {
  titulo: "¿Necesitás un turno?",
  link: "Ver horarios de atención",
};

// Frases de las tarjetas de la Home (textos nuevos, editables).
export const frases = {
  estudios: "Descubrí todo lo que podemos analizar por vos",
  terceros: "Soluciones a la medida de tu institución",
};

/* ---------- Nosotros ---------- */
export const nosotros = {
  titulo: "Sobre Nosotros",
  quienesTitulo: "Quiénes somos?",
  quienes:
    "En nuestro laboratorio de citogenética, aspiramos a ser un referente en la investigación y diagnóstico genético, comprometidos con la excelencia científica y la innovación.",
  visionTitulo: "Visión",
  vision:
    "Nuestra visión es contribuir al avance de la salud humana a través de la comprensión profunda de la genética, facilitando diagnósticos precisos y tratamientos personalizados que mejoren la calidad de vida de nuestros pacientes.",
  misionTitulo: "Misión",
  mision:
    "En Kromos Laboratorio, nuestra misión es proporcionar soluciones innovadoras y de alta calidad que mejoren la vida de nuestros clientes y contribuyan al bienestar de la comunidad. Nos comprometemos a escuchar y entender las necesidades de nuestros usuarios, ofreciendo productos y servicios que no solo cumplan con sus expectativas, sino que las superen.",
  equipoTitulo: "Nuestro equipo",
};

export type Miembro = { nombre: string; cargo: string; formacion: string[]; linkedin?: string };

export const equipo: Miembro[] = [
  { nombre: "María Isabel Ziembar", cargo: "Directora General", formacion: ["Lic. en Genética", "Citogenetista"], linkedin: "https://www.linkedin.com/in/mariaziembar/" },
  { nombre: "Anabella Solari", cargo: "Citogenetista", formacion: ["Lic. en Genética"] },
  { nombre: "Marcelo Mermoz", cargo: "Citogenetista", formacion: ["Lic. en Ciencias Biológicas"], linkedin: "https://www.linkedin.com/in/marcelo-mermoz-a4172992/" },
  { nombre: "Sandra Mahuad", cargo: "Citogenetista", formacion: ["Lic. en Ciencias Biológicas"] },
  { nombre: "Walter Correa", cargo: "Citogenetista", formacion: ["Bioquímico"], linkedin: "https://www.linkedin.com/in/walter-correa-095bbaa4/" },
  { nombre: "Lilian Franzi", cargo: "Citogenetista", formacion: ["Lic. en Ciencias Biológicas"], linkedin: "https://www.linkedin.com/in/lilian-franzi-95061b30/" },
  { nombre: "María Petrucci", cargo: "Técnica de Laboratorio", formacion: ["Técnica de Laboratorio"] },
];

/* ---------- Estudios ---------- */
export const estudiosIntro = {
  titulo: "Estudios",
  texto:
    "En nuestro laboratorio realizamos estudios de alta calidad y sumamente confiables obteniendo así resultados precisos para la tranquilidad de cada paciente.",
  destacado: "Conocé más sobre los servicios que brindamos:",
};

// Cada ítem: [texto normal, texto en negrita, texto normal]
export type Item = [string, string, string?];
export const estudios: { titulo: string; icono: string; items: Item[] }[] = [
  {
    titulo: "Citogenética Clínica",
    icono: "estudios1.png",
    items: [
      ["Análisis citogenético simple (Cariotipo) en ", "linfocitos de sangre periférica", "."],
      ["Análisis citogenético simple (Cariotipo) con ", "técnica de alta resolución cromosómica", " en linfocitos de sangre periférica."],
      ["Análisis citogenético (Cariotipo) en ", "biopsia de piel", "."],
    ],
  },
  {
    titulo: "Estudio de Rupturas Cromosómicas",
    icono: "estudio2.png",
    items: [["Estudio para descartar Anemia de Fanconi a través del agregado de Diepoxibutano ", "(DEB)", "."]],
  },
  {
    titulo: "Citogenética Prenatal",
    icono: "estudios1.png",
    items: [
      ["Análisis citogenético (Cariotipo) en biopsia de ", "vellosidades coriales", "."],
      ["Análisis citogenético (Cariotipo) en cultivo de células de ", "líquido amniótico", "."],
      ["Análisis citogenético (Cariotipo) en sangre de ", "cordón umbilical", "."],
      ["Análisis citogenético (Cariotipo) en ", "material de legrado", "."],
    ],
  },
  {
    titulo: "Citogenética Oncohematológica",
    icono: "estudio2.png",
    items: [
      ["Análisis citogenético (Cariotipo) en ", "médula ósea", "."],
      ["Análisis citogenético (Cariotipo) oncológico en ", "sangre periférica", "."],
      ["Análisis citogenético (Cariotipo) en ", "ganglio linfático", "."],
    ],
  },
];

/* ---------- Servicios a terceros ---------- */
export const terceros = {
  titulo: "Servicios a terceros",
  intro:
    "Contamos con servicios no solo para individuos sino también para otros laboratorios, prepagas, centros de salud y pacientes sin cobertura.",
  duda: "Tenés alguna duda sobre nuestros servicios?",
  cta: "Contactáte con nosotros!",
};

export const serviciosTerceros: {
  titulo: string;
  icono: string;
  alt: string;
  color: string;
  parrafos: Item[];
  lista?: Item[];
  boton?: { label: string; href: string };
}[] = [
  {
    titulo: "Estudios Citogenéticos",
    icono: "serviciosATerceros1.png",
    alt: "Estudios",
    color: "var(--azul)",
    parrafos: [["Ofrecemos un amplio rango de servicios especializados en citogenética clínica, prenatal, oncohematológica, entre otros.", ""]],
    boton: { label: "IR A ESTUDIOS", href: "/estudios/" },
  },
  {
    titulo: "Caracterización de lineas celulares",
    icono: "serviciosATerceros2.png",
    alt: "Lineas-Celulares",
    color: "var(--petroleo)",
    parrafos: [["Llevamos a cabo caracterización citogenética de:", ""]],
    lista: [
      ["", "Líneas celulares modificadas", " humanas o de mamíferos."],
      ["", "Líneas celulares tumorales", " humanas o de mamíferos."],
    ],
  },
  {
    titulo: "Preparación de muestras para análisis",
    icono: "serviciosATerceros3.png",
    alt: "Cultivos",
    color: "var(--profundo)",
    parrafos: [
      ["Realizamos a pedido de profesionales de la salud, el ", "procesamiento de muestras", " para estudios de FISH y biología molecular en sangre periférica, médula ósea, vellosidades coriales o células de líquido amniótico."],
      ["Se realizan además ", "extendidos celulares listos para ser analizados."],
    ],
  },
];

/* ---------- Contacto ---------- */
export const contactoTextos = {
  intro: ["Si tenés alguna duda o necesitas más información,", "no dudes en comunicarte con nosotros:"],
  titulo: "Cómo encontrarnos",
  cierre: "Estamos para ayudarte!",
};
