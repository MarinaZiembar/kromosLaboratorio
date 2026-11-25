import type { Metadata } from "next";
import { IconLinkedin } from "@/components/Icons";
import { PageHero } from "@/components/Ui";
import { equipo, nosotros } from "@/data/content";
import { iniciales } from "@/data/derivados";
import { fotos } from "@/data/fotos";

export const metadata: Metadata = { title: "Sobre Nosotros" };

export default function Nosotros() {
  return (
    <>
      <PageHero titulo={nosotros.titulo} foto={fotos.nosotros}>
        <h2 className="kicker">{nosotros.quienesTitulo}</h2>
        <p className="lead">{nosotros.quienes}</p>
      </PageHero>

      <section className="band mv-band">
        <div className="wrap mv">
          <article className="mv-card mv-vision" data-reveal>
            <span className="tag tag-soft">{nosotros.visionTitulo}</span>
            <p>{nosotros.vision}</p>
          </article>
          <div className="mv-photo" data-reveal style={{ "--d": "100ms" } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={fotos.vision.src} alt={fotos.vision.alt} loading="lazy" />
          </div>
          <div className="mv-photo" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={fotos.mision.src} alt={fotos.mision.alt} loading="lazy" />
          </div>
          <article className="mv-card mv-mision" data-reveal style={{ "--d": "100ms" } as React.CSSProperties}>
            <span className="tag">{nosotros.misionTitulo}</span>
            <p>{nosotros.mision}</p>
          </article>
        </div>
      </section>

      <section className="band team-band">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <h2>{nosotros.equipoTitulo}</h2>
          </div>
        </div>
        {/* Carrusel continuo: la lista se repite para que el movimiento no tenga cortes. */}
        <div className="marquee" data-reveal>
          <div className="marquee-track">
            <ul className="marquee-list">
              {equipo.map((m) => (
                <Member key={m.nombre} m={m} />
              ))}
            </ul>
            <ul className="marquee-list" aria-hidden="true">
              {equipo.map((m) => (
                <Member key={m.nombre} m={m} copia />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Member({ m, copia }: { m: (typeof equipo)[number]; copia?: boolean }) {
  return (
    <li className="member">
      <span className="mono mono-lg" aria-hidden="true">
        {iniciales(m.nombre)}
      </span>
      <h3>{m.nombre}</h3>
      <p className="member-role">{m.cargo}</p>
      {m.formacion.map((f) => (
        <p key={f} className="member-edu">
          {f}
        </p>
      ))}
      {m.linkedin && (
        <a
          className="member-link"
          href={m.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${m.nombre}`}
          tabIndex={copia ? -1 : undefined}
        >
          <IconLinkedin />
        </a>
      )}
    </li>
  );
}
