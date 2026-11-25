import type { Metadata } from "next";
import { Clientes } from "@/components/Clientes";
import Link from "next/link";
import { Rich } from "@/components/Rich";
import { Arrow, PageHero } from "@/components/Ui";
import { iconosServicios } from "@/components/LineIcons";
import { serviciosTerceros, terceros } from "@/data/content";
import { fotos } from "@/data/fotos";

export const metadata: Metadata = { title: "Servicios a terceros" };

const fondos = ["svc-1", "svc-2", "svc-3"];

export default function ServiciosATerceros() {
  return (
    <>
      <PageHero titulo={terceros.titulo} foto={fotos.terceros}>
        <p className="lead">{terceros.intro}</p>
      </PageHero>

      <section className="band">
        <div className="wrap svc-grid">
          {serviciosTerceros.map((s, n) => (
            <article key={s.titulo} className={`svc ${fondos[n]}`} data-reveal style={{ "--d": `${n * 100}ms` } as React.CSSProperties}>
              <div className="svc-top">{(() => { const Icono = iconosServicios[n]; return <Icono size={112} className="line-icon" />; })()}</div>
              <div className="svc-body">
                <h2>{s.titulo}</h2>
                {s.parrafos.map((p, k) => (
                  <p key={k}>
                    <Rich item={p} />
                  </p>
                ))}
                {s.lista && (
                  <ul>
                    {s.lista.map((l, k) => (
                      <li key={k}>
                        <Rich item={l} />
                      </li>
                    ))}
                  </ul>
                )}
                {s.boton && (
                  <Link className="pill-btn" href={s.boton.href}>
                    {s.boton.label}
                    <Arrow dir="e" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="wrap">
          <div className="duda" data-reveal>
            <h2>{terceros.duda}</h2>
            <Link className="btn btn-dark" href="/contacto/">
              {terceros.cta}
            </Link>
          </div>
        </div>
      </section>

      <Clientes />
    </>
  );
}
