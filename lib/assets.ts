import { existsSync } from "node:fs";
import path from "node:path";

// Las imágenes se agregan después: si todavía no existen, los componentes muestran un fallback.
export const publicFileExists = (src: string) =>
  existsSync(path.join(process.cwd(), "public", src));
