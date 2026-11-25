// Íconos de línea fina dibujados a medida (heredan el color con currentColor).
type P = { size?: number; className?: string };

const svg = (size: number, className: string | undefined, children: React.ReactNode) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.25}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    {children}
  </svg>
);

/* ---------- Servicios a terceros ---------- */

/** Microscopio: estudios citogenéticos. */
export const IconMicroscope = ({ size = 48, className }: P) =>
  svg(size, className, <>
    <path d="M10 43h28" />
    <path d="M17 43v-4.5h14V43" />
    <path d="M13 32.5h17" />
    <path d="M30.5 38.5c4.8-2 7.5-6.4 7.5-11.5 0-5.6-3.8-9.8-8.8-11" />
    <rect x="19" y="7" width="7" height="16" rx="1.6" transform="rotate(-20 22.5 15)" />
    <rect x="16.6" y="3.2" width="9.6" height="3.2" rx="1" transform="rotate(-20 21.4 4.8)" />
    <path d="M25.4 23.4l1.4 4" />
    <path d="M24.4 28.2h4.4" />
  </>);

/** Placa de Petri con células: caracterización de líneas celulares. */
export const IconCells = ({ size = 48, className }: P) =>
  svg(size, className, <>
    <ellipse cx="24" cy="26" rx="18" ry="12" />
    <path d="M6 26v3c0 6.6 8 12 18 12s18-5.4 18-12v-3" />
    <circle cx="17" cy="24" r="4" />
    <circle cx="17" cy="24" r="1.2" />
    <circle cx="28" cy="21" r="3" />
    <circle cx="28.4" cy="21.2" r=".9" />
    <circle cx="29" cy="30" r="3.6" />
    <circle cx="28.6" cy="30.3" r="1.1" />
    <circle cx="21" cy="31.5" r="1.6" />
  </>);

/** Tubos de ensayo con pipeta: preparación de muestras. */
export const IconTubes = ({ size = 48, className }: P) =>
  svg(size, className, <>
    <path d="M8 40h32" />
    <path d="M10 34h28" />
    <path d="M14 10v22a3 3 0 0 0 6 0V10" />
    <path d="M28 10v22a3 3 0 0 0 6 0V10" />
    <path d="M12.5 10h9M26.5 10h9" />
    <path d="M14 24h6M28 20h6" />
    <path d="M24 4v14" />
    <path d="M22.5 4h3" />
    <path d="M24 18l-.0 2" />
  </>);

/* ---------- Estudios ---------- */

const Chromosome = ({ x }: { x: number }) => (
  <g transform={`translate(${x} 0)`}>
    <path d="M0 8c0-2 1.2-3 2.5-3S5 6 5 8v11c0 1-.6 1.8-1.2 2.4.6.6 1.2 1.4 1.2 2.4v15.2c0 2-1.2 3-2.5 3S0 41 0 39V23.8c0-1 .6-1.8 1.2-2.4C.6 20.8 0 20 0 19z" />
    <path d="M0 11.5h5M0 15.5h5M0 27h5M0 31h5M0 35h5" />
  </g>
);

/** Par de cromosomas: citogenética clínica. */
export const IconChromosomes = ({ size = 48, className }: P) =>
  svg(size, className, <>
    <Chromosome x={16} />
    <Chromosome x={27} />
  </>);

/** Cromosoma con ruptura: estudio de rupturas cromosómicas. */
export const IconBreak = ({ size = 48, className }: P) =>
  svg(size, className, <>
    <path d="M21.5 7c0-2 1.2-3 2.5-3s2.5 1 2.5 3v10l-1.4 1.6 1.4 1.4-1.6 1.2" />
    <path d="M21.5 7v10.2l1.2 1.3-1.2 1.5" />
    <path d="M21.5 10.5h5M21.5 14h5" />
    <path d="M22.5 26.5l1.4-1.2 1.2 1.3 1.4-1.4" />
    <path d="M21.5 27.8v12.2c0 2 1.2 3 2.5 3s2.5-1 2.5-3V27.8" />
    <path d="M21.5 31.5h5M21.5 35.5h5" />
    <path d="M15 22h3M30 22h3M16.5 18l2 1.5M31.5 18l-2 1.5M16.5 26l2-1.5M31.5 26l-2-1.5" />
  </>);

/** Embrión en el saco: citogenética prenatal. */
export const IconPrenatal = ({ size = 48, className }: P) =>
  svg(size, className, <>
    <circle cx="24" cy="24" r="18" />
    <circle cx="26.5" cy="17" r="5" />
    <path d="M22 20.5c-4 2-6 5.5-5.5 9.5.6 4.4 4.5 7 8.6 6.4 3.8-.5 6.4-3.6 6.2-7.2" />
    <path d="M31.3 29.2c-.3-2.6-2.3-4.4-4.8-4.4-2.2 0-3.7 1.6-3.7 3.5 0 1.6 1.2 2.8 2.7 2.8" />
    <path d="M16.5 32c-1.5 1-3 1.2-4.5.8" />
  </>);

/** Gota de sangre con células: citogenética oncohematológica. */
export const IconBlood = ({ size = 48, className }: P) =>
  svg(size, className, <>
    <path d="M24 4c6 8.5 13 15.6 13 24a13 13 0 0 1-26 0C11 19.6 18 12.5 24 4z" />
    <ellipse cx="19.5" cy="29" rx="3.6" ry="2.4" />
    <ellipse cx="28" cy="25" rx="3" ry="2" />
    <ellipse cx="27" cy="33.5" rx="3.4" ry="2.2" />
    <path d="M16.5 20c1-2 2.2-3.8 3.5-5.5" />
  </>);

export const iconosServicios = [IconMicroscope, IconCells, IconTubes];
export const iconosEstudios = [IconChromosomes, IconBreak, IconPrenatal, IconBlood];
