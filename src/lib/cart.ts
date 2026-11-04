import { formatTotal } from "./format";
import { defaultSelection, imageFor, type Product } from "./products";
import { FREE_SHIPPING_THRESHOLD, STANDARD_SHIPPING, TAX_RATE } from "./shipping";

export type CartItem = {
  key: string;
  productId: string;
  name: string;
  variant: string;
  image: string;
  price: number;
  qty: number;
};

export function lineFromProduct(product: Product, selection: Record<string, string> = {}, qty = 1): CartItem {
  const chosen = { ...defaultSelection(product), ...selection };
  const variant = product.options.map((o) => chosen[o.name]).join(" · ");
  return {
    key: `${product.id}:${Object.values(chosen).join("|")}`,
    productId: product.id,
    name: product.name,
    variant,
    image: imageFor(product, chosen),
    price: product.price,
    qty,
  };
}

export type Totals = { count: number; subtotal: number; shipping: number; tax: number; total: number; toFreeShipping: number };

export function totals(items: CartItem[]): Totals {
  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((n, i) => n + i.price * i.qty, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
  const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
  return { count, subtotal, shipping, tax, total: subtotal + shipping + tax, toFreeShipping: Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal) };
}

export function itemsLabel(count: number): string {
  return `${count} ${count === 1 ? "item" : "items"}`;
}

export { formatTotal };
