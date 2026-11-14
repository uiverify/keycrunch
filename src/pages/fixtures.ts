import { lineFromProduct } from "@/lib/cart";
import { requireProduct } from "@/lib/products";

/** The cart from the design: a Keycrunch 75 and a walnut wrist rest, past the free-shipping line. */
export const filledCart = [
  lineFromProduct(requireProduct("keycrunch-75"), { Case: "Graphite", Switches: "Linear" }),
  lineFromProduct(requireProduct("keycrunch-wrist-rest"), { Wood: "Walnut", Size: "Large" }),
];

/** A cart still short of free shipping. */
export const smallCart = [lineFromProduct(requireProduct("keycrunch-keycaps"), { Colour: "Sand" })];
