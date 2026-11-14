import { imageUrl, type ImageSlug } from "./images";

export type CategoryId = "keyboards" | "keycaps" | "wrist-rests" | "desk-mats" | "cables";

export const categories: { id: CategoryId; name: string; blurb: string; image: ImageSlug }[] = [
  { id: "keyboards", name: "Keyboards", blurb: "Machined aluminium, tuned to sound and feel right.", image: "keycrunch-75-graphite" },
  { id: "keycaps", name: "Keycaps", blurb: "Thick PBT sets that won't shine.", image: "keycaps-sand" },
  { id: "wrist-rests", name: "Wrist rests", blurb: "Solid hardwood, shaped by hand.", image: "wrist-rest-walnut" },
  { id: "desk-mats", name: "Desk mats", blurb: "Merino felt and full-grain leather.", image: "desk-mat-felt" },
  { id: "cables", name: "Cables", blurb: "Coiled USB-C with an aviator plug.", image: "cable-coiled-orange" },
];

export type OptionValue = { name: string; swatch?: string; image?: ImageSlug };
export type ProductOption = { name: string; values: OptionValue[] };

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  tagline: string;
  description: string;
  image: ImageSlug;
  options: ProductOption[];
  specs: [string, string][];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  soldOut?: boolean;
};

const graphite = "#4a4a4c";
const silver = "#d8d8d6";
const walnut = "#5b3a26";
const oak = "#d8b98a";
const orange = "#ff5a1f";
const sand = "#e2d6c2";
const charcoal = "#3a3a3a";

export const products: Product[] = [
  {
    id: "keycrunch-75",
    name: "Keycrunch 75 Keyboard",
    category: "keyboards",
    price: 149,
    tagline: "Aluminium · Hot-swappable",
    description:
      "A 75% board machined from a single block of aluminium, with a gasket-mounted plate that softens every keystroke. Hot-swappable sockets take any 3- or 5-pin switch, and the knob controls volume out of the box.",
    image: "keycrunch-75-graphite",
    options: [
      {
        name: "Case",
        values: [
          { name: "Graphite", swatch: graphite, image: "keycrunch-75-graphite" },
          { name: "Silver", swatch: silver, image: "keycrunch-75-silver" },
        ],
      },
      { name: "Switches", values: [{ name: "Linear" }, { name: "Tactile" }, { name: "Silent" }] },
    ],
    specs: [
      ["Layout", "75%, 84 keys"],
      ["Case", "6063 aluminium, anodized"],
      ["Mount", "Gasket"],
      ["Connection", "USB-C, Bluetooth 5.1, 2.4 GHz"],
      ["Battery", "4000 mAh"],
      ["Weight", "1.6 kg"],
    ],
    rating: 4.8,
    reviewCount: 412,
  },
  {
    id: "keycrunch-65-low-profile",
    name: "Keycrunch 65 Low Profile Wireless Keyboard",
    category: "keyboards",
    price: 129,
    tagline: "Low profile · Wireless",
    description:
      "Everything you like about a mechanical board at half the height. A slim aluminium case, low-profile switches and three wireless profiles, so it travels between your laptop, desktop and tablet.",
    image: "keycrunch-65-low-profile",
    options: [{ name: "Switches", values: [{ name: "Linear" }, { name: "Tactile" }] }],
    specs: [
      ["Layout", "65%, 68 keys"],
      ["Height", "18 mm at the front"],
      ["Connection", "USB-C, Bluetooth 5.1"],
      ["Battery", "Up to 3 months"],
      ["Weight", "680 g"],
    ],
    rating: 4.6,
    reviewCount: 188,
  },
  {
    id: "keycrunch-wrist-rest",
    name: "Keycrunch Wrist Rest",
    category: "wrist-rests",
    price: 39,
    tagline: "Solid hardwood",
    description:
      "Cut from a single piece of hardwood and finished with natural oil. The gentle slope keeps your wrists level with the keys, and a rubber base keeps it where you put it.",
    image: "wrist-rest-walnut",
    options: [
      {
        name: "Wood",
        values: [
          { name: "Walnut", swatch: walnut, image: "wrist-rest-walnut" },
          { name: "Oak", swatch: oak, image: "wrist-rest-oak" },
        ],
      },
      { name: "Size", values: [{ name: "Regular" }, { name: "Large" }] },
    ],
    specs: [
      ["Material", "Solid walnut or oak"],
      ["Finish", "Natural oil"],
      ["Regular", "320 × 80 × 18 mm"],
      ["Large", "360 × 80 × 18 mm"],
    ],
    rating: 4.7,
    reviewCount: 301,
  },
  {
    id: "keycrunch-keycaps",
    name: "Keycrunch PBT Keycaps",
    category: "keycaps",
    price: 59,
    tagline: "Dye-sublimated PBT · 140 keys",
    description:
      "Thick 1.5 mm PBT caps in a low cherry profile, with dye-sublimated legends that never fade. 140 keys cover every Keycrunch board and most layouts beyond.",
    image: "keycaps-sand",
    options: [
      {
        name: "Colour",
        values: [
          { name: "Sand", swatch: sand, image: "keycaps-sand" },
          { name: "Graphite", swatch: graphite, image: "keycaps-graphite" },
        ],
      },
    ],
    specs: [
      ["Material", "PBT, 1.5 mm"],
      ["Profile", "Cherry"],
      ["Legends", "Dye-sublimated"],
      ["Keys", "140"],
    ],
    rating: 4.8,
    reviewCount: 227,
  },
  {
    id: "keycrunch-felt-mat",
    name: "Keycrunch Felt Desk Mat",
    category: "desk-mats",
    price: 45,
    tagline: "Merino wool felt",
    description:
      "Dense 4 mm merino felt that quiets your keyboard and gives your mouse a smooth, even glide. A natural rubber base keeps it flat.",
    image: "desk-mat-felt",
    options: [
      { name: "Colour", values: [{ name: "Charcoal", swatch: charcoal }] },
      { name: "Size", values: [{ name: "Medium" }, { name: "Large" }] },
    ],
    specs: [
      ["Material", "Merino wool felt"],
      ["Thickness", "4 mm"],
      ["Medium", "700 × 300 mm"],
      ["Large", "900 × 400 mm"],
    ],
    rating: 4.6,
    reviewCount: 145,
  },
  {
    id: "keycrunch-coiled-cable",
    name: "Keycrunch Coiled Cable",
    category: "cables",
    price: 35,
    tagline: "USB-C · Aviator connector",
    description:
      "A braided, double-sleeved coiled cable with a detachable aviator connector, so you can unplug your board without reaching behind the desk.",
    image: "cable-coiled-orange",
    options: [
      {
        name: "Colour",
        values: [
          { name: "Signal Orange", swatch: orange, image: "cable-coiled-orange" },
          { name: "Graphite", swatch: graphite, image: "cable-coiled-graphite" },
        ],
      },
    ],
    specs: [
      ["Length", "1.5 m, 15 cm coil"],
      ["Connectors", "USB-C to USB-C"],
      ["Sleeve", "Double braided"],
    ],
    rating: 4.7,
    reviewCount: 96,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function requireProduct(id: string): Product {
  const product = getProduct(id);
  if (!product) throw new Error(`unknown product ${id}`);
  return product;
}

export function productsIn(category: CategoryId | undefined): Product[] {
  return category ? products.filter((p) => p.category === category) : products;
}

export function isCategoryId(value: string | undefined): value is CategoryId {
  return categories.some((c) => c.id === value);
}

/** The photo for a chosen set of options: the first option value that carries its own image. */
export function imageFor(product: Product, selection: Record<string, string>): string {
  for (const option of product.options) {
    const value = option.values.find((v) => v.name === selection[option.name]);
    if (value?.image) return imageUrl(value.image);
  }
  return imageUrl(product.image);
}

export function defaultSelection(product: Product): Record<string, string> {
  return Object.fromEntries(product.options.map((o) => [o.name, o.values[0]?.name ?? ""]));
}

export type Review = { name: string; rating: number; date: string; text: string };

const reviewsByCategory: Partial<Record<CategoryId, Review[]>> = {
  keyboards: [
    { name: "Maya R.", rating: 5, date: "October 2026", text: "Heavier than I expected in the best way. It doesn't move on the desk and the sound is deep without any rattle." },
    { name: "Tom K.", rating: 5, date: "September 2026", text: "Swapped in my own switches in ten minutes. The knob is the feature I didn't know I wanted." },
    { name: "Priya S.", rating: 4, date: "September 2026", text: "Lovely build. The included keycaps are good, but I went straight for the Sand set." },
  ],
  keycaps: [
    { name: "Daniel O.", rating: 5, date: "October 2026", text: "Thick, slightly textured and no shine after two months of daily use. The legends are still crisp." },
    { name: "Aiko T.", rating: 5, date: "September 2026", text: "Every key I needed for a 75% board plus spares. They sound noticeably deeper than my old ABS set." },
    { name: "Sam W.", rating: 4, date: "August 2026", text: "Colours match the photos exactly. I wish the set came with a second spacebar colour." },
  ],
  "wrist-rests": [
    { name: "Lena M.", rating: 5, date: "October 2026", text: "Smooth, warm walnut and exactly the height of my board. My wrists stopped aching within a week." },
    { name: "Chris P.", rating: 4, date: "September 2026", text: "Beautiful grain. The rubber feet keep it put, though the large size is long for a 65% board." },
  ],
  "desk-mats": [
    { name: "Noor H.", rating: 5, date: "October 2026", text: "Thick felt that dampens the keyboard noise and stays flat. It makes the whole desk look calmer." },
    { name: "Jonas B.", rating: 4, date: "September 2026", text: "Great size for a keyboard and mouse. It picks up a bit of lint, so keep a roller nearby." },
  ],
};

const generalReviews: Review[] = [
  { name: "Ella J.", rating: 5, date: "October 2026", text: "Arrived in two days, packed beautifully, and it looks even better on the desk than in the photos." },
  { name: "Marco D.", rating: 4, date: "September 2026", text: "Solid quality for the price. Support answered my question within an hour." },
];

export function reviewsFor(product: Product): Review[] {
  return reviewsByCategory[product.category] ?? generalReviews;
}
