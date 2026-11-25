// Se vuelve a montar en cada navegación: da la transición de entrada a cada página.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page">{children}</div>;
}
