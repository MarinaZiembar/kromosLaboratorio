import type { Metadata } from "next";
import { Clientes } from "@/components/Clientes";
import { IconClock, IconMail, IconPhone, IconPin, IconWhatsapp } from "@/components/Icons";
import { Arrow } from "@/components/Ui";
import { contacto, contactoTextos } from "@/data/content";
import { fotos } from "@/data/fotos";

export const metadata: Metadata = { title: "Contacto" };

export default function Contacto() {
  const datos = [
    { icon: <IconClock />, label: "Horario de Atención:", valor: contacto.horario },
    { icon: <IconPin />, label: "Dirección:", valor: contacto.direccion, href: contacto.mapaLink, ext: true },
    { icon: <IconPhone />, label: "Teléfono:", valor: contacto.telefono, href: contacto.telefonoHref },
    { icon: <IconWhatsapp />, label: "Whatsapp:", valor: contacto.whatsapp, href: contacto.whatsappHref, ext: true },
    { icon: <IconMail />, label: "Email:", valor: contacto.email, href: `mailto:${contacto.email}` },
  ];

  return (
    <>
      <section className="shell contact-shell">
        <div className="contact-copy">
          <h1 data-reveal>{contactoTextos.titulo}</h1>
          <p className="lead" data-reveal style={{ "--d": "80ms" } as React.CSSProperties}>
            {contactoTextos.intro[0]} {contactoTextos.intro[1]}
          </p>
          <ul className="rows">
            {datos.map((d, n) => (
              <li key={d.label} className="row" data-reveal style={{ "--d": `${120 + n * 60}ms` } as React.CSSProperties}>
                <span className="row-icon">{d.icon}</span>
                <span className="row-value">
                  <span className="row-label">{d.label}</span>{" "}
                  {d.href ? (
                    <a href={d.href} {...(d.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {d.valor}
                    </a>
                  ) : (
                    d.valor
                  )}
                </span>
                {d.href && (
                  <a className="arrow-btn" href={d.href} aria-hidden="true" tabIndex={-1} {...(d.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    <Arrow />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-map" data-reveal style={{ "--d": "150ms" } as React.CSSProperties}>
          <iframe title="Mapa: Av. Corrientes 5535, CABA" src={contacto.mapaEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </section>

      <section className="band cierre-band">
        <div className="wrap cierre-wrap" data-reveal>
          <span className="orb orb-1" aria-hidden="true" />
          <span className="orb orb-2" aria-hidden="true" />
          <span className="orb orb-3" aria-hidden="true" />
          <span className="orb orb-4" aria-hidden="true" />
          <p className="cierre">{contactoTextos.cierre}</p>
        </div>
      </section>

      <Clientes />
    </>
  );
}
