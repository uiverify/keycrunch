import { useCart } from "@/cart/CartContext";
import type { CartItem } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import { QuantityStepper } from "./QuantityStepper";

export function CartLine({ item }: { item: CartItem }) {
  const { setQty, remove } = useCart();
  return (
    <div className="card cart-line">
      <div className="cart-line-media">
        <img src={item.image} alt="" />
      </div>
      <div className="cart-line-body">
        <span className="cart-line-name">{item.name}</span>
        <span className="cart-line-variant">{item.variant}</span>
        <div className="cart-line-foot">
          <span className="price">{formatPrice(item.price * item.qty)}</span>
          <QuantityStepper value={item.qty} min={0} onChange={(qty) => (qty === 0 ? remove(item.key) : setQty(item.key, qty))} />
        </div>
      </div>
    </div>
  );
}
