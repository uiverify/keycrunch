const files = import.meta.glob<string>("../assets/products/*.webp", { eager: true, query: "?url", import: "default" });

export const imageSlugs = [
  "keycrunch-75-graphite",
  "keycrunch-75-silver",
  "keycrunch-65-low-profile",
  "keycrunch-tkl-pro",
  "wrist-rest-walnut",
  "wrist-rest-oak",
  "keycaps-graphite",
  "keycaps-sand",
  "keycaps-signal-orange",
  "desk-mat-felt",
  "desk-mat-leather",
  "cable-coiled-orange",
  "cable-coiled-graphite",
  "hero-desk",
] as const;

export type ImageSlug = (typeof imageSlugs)[number];

export function imageUrl(slug: ImageSlug): string {
  const url = files[`../assets/products/${slug}.webp`];
  if (!url) throw new Error(`missing product image ${slug}`);
  return url;
}
