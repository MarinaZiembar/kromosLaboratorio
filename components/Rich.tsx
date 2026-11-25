import type { Item } from "@/data/content";

/** Renderiza [normal, negrita, normal] tal como en el sitio original. */
export function Rich({ item }: { item: Item }) {
  const [a, b, c] = item;
  return (
    <>
      {a}
      {b && <strong>{b}</strong>}
      {c}
    </>
  );
}
