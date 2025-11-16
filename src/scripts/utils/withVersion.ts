import { assetVersion } from './version';

/**
 * Devuelve la URL del asset con busting automático de caché.
 * Ejemplo: withVersion("/img/logo.png") -> "/img/logo.png?v=16738812345"
 */
export function withVersion(path: string): string {
  if (!path) return path;
  // Evita duplicar parámetros si ya trae un query string
  return path.includes("?") ? `${path}&${assetVersion}` : `${path}?${assetVersion}`;
}
