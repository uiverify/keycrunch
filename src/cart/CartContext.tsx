import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { totals, type CartItem, type Totals } from "@/lib/cart";

type CartState = {
  items: CartItem[];
  totals: Totals;
  add: (item: CartItem) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartState | null>(null);

export function CartProvider({ initialItems = [], children }: { initialItems?: CartItem[]; children: ReactNode }) {
  const [items, setItems] = useState(initialItems);
  const value = useMemo<CartState>(
    () => ({
      items,
      totals: totals(items),
      add: (item) =>
        setItems((prev) =>
          prev.some((i) => i.key === item.key)
            ? prev.map((i) => (i.key === item.key ? { ...i, qty: i.qty + item.qty } : i))
            : [...prev, item],
        ),
      setQty: (key, qty) => setItems((prev) => prev.map((i) => (i.key === key ? { ...i, qty } : i))),
      remove: (key) => setItems((prev) => prev.filter((i) => i.key !== key)),
      clear: () => setItems([]),
    }),
    [items],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartState {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart needs a CartProvider");
  return cart;
}
