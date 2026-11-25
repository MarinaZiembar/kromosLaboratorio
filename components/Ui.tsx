import Link from "next/link";

export const Arrow = ({ dir = "ne" }: { dir?: "ne" | "e" | "se" | "s" }) => {
  const rot = { ne: -45, e: 0, se: 45, s: 90 }[dir];
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ transform: `rotate(${rot}deg)` }}>
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

/** Botón circular con flecha. */
export function ArrowLink({ href, label, dir = "ne", light }: { href: string; label: string; dir?: "ne" | "e" | "se" | "s"; light?: boolean }) {
  const cls = `arrow-btn${light ? " light" : ""}`;
  return href.startsWith("#") ? (
    <a href={href} className={cls} aria-label={label}>
      <Arrow dir={dir} />
    </a>
  ) : (
    <Link href={href} className={cls} aria-label={label}>
      <Arrow dir={dir} />
    </Link>
  );
}

/** Encabezado de página interna: bloque claro con texto a la izquierda y foto a la derecha. */
export function PageHero({
  titulo,
  children,
  foto,
  overlay,
}: {
  titulo: string;
  children?: React.ReactNode;
  foto: { src: string; alt: string };
  overlay?: React.ReactNode;
}) {
  return (
    <section className="shell page-hero">
      <div className="page-hero-copy" data-reveal>
        <h1>{titulo}</h1>
        {children}
      </div>
      <div className="page-hero-photo" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={foto.src} alt={foto.alt} />
        {overlay}
      </div>
    </section>
  );
}
