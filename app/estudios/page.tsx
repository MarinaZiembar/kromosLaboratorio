import type { Metadata } from "next";
import { Clientes } from "@/components/Clientes";
import { Rich } from "@/components/Rich";
import { PageHero } from "@/components/Ui";
import { iconosEstudios } from "@/components/LineIcons";
import { estudios, estudiosIntro } from "@/data/content";
import { fotos } from "@/data/fotos";

export const metadata: Metadata = { title: "Estudios" };

export default function Estudios() {
  return (
    <>
      <PageHero
        titulo={estudiosIntro.titulo}
        foto={fotos.estudios}
        overlay={
          <div className="glass page-glass page-glass-sm">
            <ul className="glass-list">
              {estudios.map((e) => (
                <li key={e.titulo}>
                  <a href={`#${slug(e.titulo)}`}>{e.titulo}</a>
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <p className="lead">{estudiosIntro.texto}</p>
        <p className="lead strong">{estudiosIntro.destacado}</p>
      </PageHero>

      <section className="band">
        <div className="wrap">
          <div className="table">
            {estudios.map((e, n) => (
              <article key={e.titulo} id={slug(e.titulo)} className="table-row" data-reveal style={{ "--d": `${n * 60}ms` } as React.CSSProperties}>
                <div className="table-title">
                  <span className="table-icon">{(() => { const Icono = iconosEstudios[n]; return <Icono size={46} />; })()}</span>
                  <h2>{e.titulo}</h2>
                </div>
                <ul className="table-items">
                  {e.items.map((it, k) => (
                    <li key={k}>
                      <span>
                        <Rich item={it} />
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Clientes />
    </>
  );
}

function slug(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
