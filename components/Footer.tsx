import Link from "next/link";
import { contacto, intro, nav } from "@/data/content";
import { IconClock, IconMail, IconPhone, IconPin, IconWhatsapp } from "./Icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Kromos Laboratorio, ir al inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo.png" alt="Kromos Laboratorio de Citogenética" width={186} height={62} />
          </Link>
          <p>
            {intro[0]} {intro[1]}
          </p>
        </div>

        <nav className="footer-col" aria-label="Secciones">
          <h2>Secciones</h2>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2>Contacto</h2>
          <ul className="footer-contact-list">
            <li>
              <IconPhone />
              <a href={contacto.telefonoHref}>{contacto.telefono}</a>
            </li>
            <li>
              <IconWhatsapp />
              <a href={contacto.whatsappHref} target="_blank" rel="noopener noreferrer">
                {contacto.whatsapp}
              </a>
            </li>
            <li>
              <IconMail />
              <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h2>Dónde estamos</h2>
          <ul className="footer-contact-list">
            <li>
              <IconPin />
              <span>{contacto.direccion}</span>
            </li>
            <li>
              <IconClock />
              <span>{contacto.horario}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="wrap footer-bottom-inner">
          <p>© {new Date().getFullYear()} Kromos Laboratorio de Citogenética</p>
          <p>
            Web design &amp; development by{" "}
            <a href="https://www.linkedin.com/in/marina-ziembar/" target="_blank" rel="noopener noreferrer">
              Mar!na
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
