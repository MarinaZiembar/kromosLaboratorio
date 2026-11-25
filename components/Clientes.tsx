"use client";

import { useEffect, useRef, useState } from "react";
import { clientes } from "@/data/clientes";

/** Logo con respaldo: si el archivo todavía no está en /public/img/clientes, muestra el nombre. */
function LogoCliente({ nombre, src, alto }: { nombre: string; src: string; alto: number }) {
  const [ok, setOk] = useState(true);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setOk(false);
  }, []);
  return ok ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={ref} src={src} alt={nombre} loading="lazy" style={{ height: alto }} onError={() => setOk(false)} />
  ) : (
    <span className="cliente-nombre">{nombre}</span>
  );
}

export function Clientes() {
  const lista = (copia?: boolean) => (
    <ul className="marquee-list clientes-list" aria-hidden={copia || undefined}>
      {clientes.map((c) => (
        <li key={c.nombre} className="cliente">
          <LogoCliente {...c} />
        </li>
      ))}
    </ul>
  );

  return (
    <section className="clientes" aria-labelledby="clientes-titulo">
      <div className="wrap">
        <h2 id="clientes-titulo" className="clientes-titulo" data-reveal>
          Confían en nosotros
        </h2>
      </div>
      <div className="marquee clientes-marquee" data-reveal>
        <div className="marquee-track">
          {lista()}
          {lista(true)}
          {lista(true)}
          {lista(true)}
        </div>
      </div>
    </section>
  );
}
