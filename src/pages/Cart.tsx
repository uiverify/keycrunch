import { Link } from "react-router-dom";
import { useCart } from "@/cart/CartContext";
import { CartLine } from "@/components/CartLine";
import { Icon } from "@/components/Icon";
import { OrderSummary } from "@/components/OrderSummary";
import { itemsLabel } from "@/lib/cart";

export function Cart() {
  const { items, totals } = useCart();
  return (
    <div className="container page">
      <div className="cart">
        <div className="cart-head">
          <h1 className="page-title">Your cart</h1>
          <p className="muted">{items.length ? `${itemsLabel(totals.count)} · ships in 1–2 days` : "Nothing here yet"}</p>
        </div>
        {items.length === 0 ? (
          <div className="card cart-empty">
            <Icon name="bag" size={28} />
            <h2>Your cart is empty</h2>
            <p className="muted">Start with the board everyone asks about.</p>
            <Link to="/product/keycrunch-75" className="button primary small">
              Shop Keycrunch 75
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-lines">
              {items.map((item) => (
                <CartLine key={item.key} item={item} />
              ))}
            </div>
            <Link to="/shop" className="button outline small cart-continue">
              <Icon name="arrowLeft" size={16} /> Continue shopping
            </Link>
            <OrderSummary totals={totals}>
              <Link to="/checkout" className="button primary block summary-cta">
                <Icon name="lock" size={16} /> Checkout
              </Link>
              <span className="summary-note">Free returns within 30 days · Secure payment</span>
            </OrderSummary>
          </>
        )}
      </div>
    </div>
  );
}
