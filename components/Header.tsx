"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/data/content";

const principales = nav.filter((n) => n.href !== "/contacto/");
const contactoLink = nav.find((n) => n.href === "/contacto/")!;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const onHero = pathname === "/" && !scrolled && !open;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !!pathname?.replace(/\/?$/, "/").startsWith(href);

  return (
    <header className={`header${open ? " is-open" : ""}${scrolled ? " is-scrolled" : ""}${onHero ? " on-hero" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Kromos Laboratorio, ir al inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-color" src="/img/logo-azul.png" alt="Kromos Laboratorio de Citogenética" width={150} height={50} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-white" src="/img/logo.png" alt="" aria-hidden="true" width={150} height={50} />
        </Link>
        <nav id="menu" className="nav" aria-label="Principal">
          {principales.map((n) => (
            <Link key={n.href} href={n.href} className={isActive(n.href) ? "is-active" : undefined} aria-current={isActive(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
          <Link href={contactoLink.href} className={`nav-cta${isActive(contactoLink.href) ? " is-active" : ""}`} aria-current={isActive(contactoLink.href) ? "page" : undefined}>
            {contactoLink.label}
          </Link>
        </nav>
        <button className="menu-btn" aria-expanded={open} aria-controls="menu" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
