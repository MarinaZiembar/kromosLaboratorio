import type { NextConfig } from "next";

// Export 100% estático: `npm run build` genera la carpeta /out,
// lista para subir por FTP o el administrador de archivos del hosting.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
