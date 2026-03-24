/**
 * Public folder URL (works for any page depth; avoids /en/images/... 404 when using ../).
 */
export function publicAsset(path: string): string {
  const clean = path.replace(/^\//, '');
  const base = import.meta.env.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${clean}`;
}
