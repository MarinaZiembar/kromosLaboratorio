import Link from "next/link";
import { CountUp } from "@/components/Motion";
import { Arrow } from "@/components/Ui";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Clientes } from "@/components/Clientes";
import { equipo, frases, intro, nav, nosotros, ofrecemos, ofrecemosTitulo, slides, turnos } from "@/data/content";
import { fotos } from "@/data/fotos";
import { iniciales } from "@/data/derivados";

const s2 = slides[1];
const fondosBricks: (string | null)[] = [null, fotos.masonry2.src, fotos.masonry3.src, null];
const label = (href: string) => nav.find((n) => n.href === href)!.label;

export default function Home() {
  return (
    <>
      {/* ===== Hero: carrusel con fundido ===== */}
      <HeroCarousel
        slides={slides.map((s, n) => ({ ...s, ...[fotos.slide1, fotos.slide2, fotos.slide3][n] }))}
        cta={{ label: turnos.link, href: "/contacto/" }}
      />

      {/* ===== Presentación + paneles ===== */}
      <section className="wrap intro">
        <div className="intro-head">
          <div data-reveal>
            <p className="eyebrow-dot">{ofrecemosTitulo}</p>
            <h2 className="intro-text">
              {intro[0]} con más de{" "}
              <span className="intro-num">
                <CountUp to={50000} />
              </span>{" "}
              estudios realizados hasta el momento.
            </h2>
          </div>
          <div className="intro-actions" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
            <Link href="/estudios/" className="btn btn-dark">
              {label("/estudios/")}
            </Link>
            <ArrowLinkInline href="/nosotros/" label={label("/nosotros/")} />
          </div>
        </div>
        <div className="bricks">
          {ofrecemos.map((o, n) => {
            const foto = fondosBricks[n];
            return (
              <div
                key={o.icono}
                className={`brick brick-${n + 1}${foto ? " brick-photo" : n === 0 ? " brick-white" : " brick-soft"}`}
                data-reveal
                style={{ "--d": `${n * 80}ms`, ...(foto ? { backgroundImage: `url(${foto})` } : {}) } as React.CSSProperties}
              >
                <span className="brick-num">{n + 1}</span>
                <p className="brick-title">
                  {o.lineas[0]} {o.lineas[1]}
                </p>
              </div>
            );
          })}
          <Link href="/contacto/" className="brick brick-photo brick-turno" data-reveal style={{ "--d": "320ms", backgroundImage: `url(${fotos.turnoHome.src})` } as React.CSSProperties}>
            <span className="brick-title brick-title-lg">{turnos.titulo}</span>
            <span className="btn btn-light">
              {turnos.link}
              <Arrow dir="e" />
            </span>
          </Link>
        </div>
      </section>

      {/* ===== Calidad y seguridad + tarjetas ===== */}
      <section className="band">
        <div className="wrap">
          <div className="calidad-title" data-reveal>
            <h2>{s2.titulo}</h2>
            <p>{s2.texto}</p>
          </div>
        </div>
        <div className="wrap bento">
          <Link href="/estudios/" className="bento-card bento-big" data-reveal>
            <span className="tag">{label("/estudios/")}</span>
            <p className="bento-phrase">{frases.estudios}</p>
            <span className="arrow-btn light">
              <Arrow />
            </span>
          </Link>
          <Link href="/servicios-a-terceros/" className="bento-card bento-photo" data-reveal style={{ "--d": "100ms", backgroundImage: `url(${fotos.servicios.src})` } as React.CSSProperties}>
            <span className="tag">{label("/servicios-a-terceros/")}</span>
            <p className="bento-phrase small">{frases.terceros}</p>
            <span className="arrow-btn light">
              <Arrow />
            </span>
          </Link>
          <Link href="/nosotros/" className="bento-card bento-soft" data-reveal style={{ "--d": "200ms" } as React.CSSProperties}>
            <span className="tag tag-dark">{nosotros.equipoTitulo}</span>
            <span className="monos" aria-hidden="true">
              {equipo.slice(0, 5).map((m) => (
                <span key={m.nombre} className="mono">
                  {iniciales(m.nombre)}
                </span>
              ))}
            </span>
            <span className="bento-title">{label("/nosotros/")}</span>
            <span className="arrow-btn">
              <Arrow />
            </span>
          </Link>
        </div>
      </section>

      <Clientes />
    </>
  );
}

function ArrowLinkInline({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-link">
      {label}
      <span className="arrow-btn">
        <Arrow />
      </span>
    </Link>
  );
}

