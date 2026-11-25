"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { IconMail, IconPhone, IconPin, IconWhatsapp } from "./Icons";
import { contacto } from "@/data/content";

type Slide = { titulo: string; texto: string; src: string; alt: string };

const DURACION = 6500;

export function HeroCarousel({ slides, cta }: { slides: Slide[]; cta: { label: string; href: string } }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => setReduce(matchMedia("(prefers-reduced-motion: reduce)").matches), []);
  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => go(i + 1), DURACION);
    return () => clearTimeout(t);
  }, [i, paused, reduce, go]);

  return (
    <section
      className="shell hx"
      aria-roledescription="carrusel"
      aria-label="Kromos Laboratorio"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, n) => (
        <div key={s.titulo} className={`hx-slide${n === i ? " is-active" : ""}`} aria-hidden={n !== i}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src} alt={s.alt} loading={n === 0 ? "eager" : "lazy"} />
        </div>
      ))}

      <div className="hx-content">
        <div className="hx-texts" aria-live="polite">
          {slides.map((s, n) => (
            <div key={s.titulo} className={`hx-text${n === i ? " is-active" : ""}`} aria-hidden={n !== i}>
              {n === 0 ? <h1>{s.titulo}</h1> : <p className="hx-title">{s.titulo}</p>}
              <p className="hx-sub">{s.texto}</p>
            </div>
          ))}
        </div>
        <div className="hx-actions">
          <Link href={cta.href} className="btn btn-outline-light">
            {cta.label}
          </Link>
          <div className="hx-dots" role="tablist" aria-label="Elegir imagen">
            {slides.map((s, n) => (
              <button key={s.titulo} role="tab" aria-selected={n === i} aria-label={s.titulo} className={n === i ? "is-active" : ""} onClick={() => go(n)}>
                <span style={{ animationDuration: `${DURACION}ms`, animationPlayState: paused ? "paused" : "running" }} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="hx-bottom">
        <a className="glass-dark hx-address" href={contacto.mapaLink} target="_blank" rel="noopener noreferrer">
          <IconPin />
          <span>{contacto.direccion}</span>
        </a>
        <div className="hx-social">
          <a href={contacto.telefonoHref} aria-label={`Llamar al ${contacto.telefono}`}>
            <IconPhone />
          </a>
          <a href={contacto.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <IconWhatsapp />
          </a>
          <a href={`mailto:${contacto.email}`} aria-label={`Email ${contacto.email}`}>
            <IconMail />
          </a>
        </div>
      </div>
    </section>
  );
}
