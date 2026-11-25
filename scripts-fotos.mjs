// Descarga las fotos de Pexels a public/img/fotos (correr una vez con internet).
import { writeFile, mkdir } from "node:fs/promises";
const ids = [6849623, 4266944, 31156739, 1170979, 27177631, 4266930, 27176986];
await mkdir("public/img/fotos", { recursive: true });
for (const id of ids) {
  const r = await fetch(`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`);
  await writeFile(`public/img/fotos/${id}.jpg`, Buffer.from(await r.arrayBuffer()));
  console.log("ok", id);
}
