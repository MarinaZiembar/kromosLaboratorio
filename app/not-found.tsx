import Link from "next/link";

export default function NotFound() {
  return (
    <section className="band">
      <div className="wrap" style={{ textAlign: "center" }}>
        <h1 className="section-title">Página no encontrada</h1>
        <Link className="btn" href="/">Volver al inicio</Link>
      </div>
    </section>
  );
}
