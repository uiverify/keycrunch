import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/cart/CartContext";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { OrderSummary } from "@/components/OrderSummary";
import { formatTotal } from "@/lib/format";
import { EXPRESS_SHIPPING } from "@/lib/shipping";

function Field({ label, placeholder, defaultValue, autoComplete }: { label: string; placeholder?: string; defaultValue?: string; autoComplete?: string }) {
  return (
    <label className="field">
      {label}
      <input placeholder={placeholder} defaultValue={defaultValue} autoComplete={autoComplete} />
    </label>
  );
}

export function Checkout() {
  const { items, totals, clear } = useCart();
  const [express, setExpress] = useState(false);
  const navigate = useNavigate();
  const shipping = express ? EXPRESS_SHIPPING : totals.shipping;
  const withShipping = { ...totals, shipping, total: totals.subtotal + shipping + totals.tax };

  return (
    <div className="container page">
      <div className="crumbs">
        <Link to="/cart">Cart</Link>/<span>Checkout</span>
      </div>
      <h1 className="page-title checkout-title">
        Checkout
      </h1>
      <div className="checkout">
        <form
          className="checkout-form"
          onSubmit={(e) => {
            e.preventDefault();
            clear();
            navigate("/order/confirmed");
          }}
        >
          <section className="card form-section">
            <h2>Contact</h2>
            <Field label="Email" placeholder="you@example.com" defaultValue="maya.reed@example.com" autoComplete="email" />
          </section>
          <section className="card form-section">
            <h2>Shipping address</h2>
            <div className="field-row">
              <Field label="First name" defaultValue="Maya" />
              <Field label="Last name" defaultValue="Reed" />
            </div>
            <Field label="Address" defaultValue="214 Larkin Street, Apt 3" />
            <div className="field-row">
              <Field label="City" defaultValue="San Francisco" />
              <Field label="ZIP" defaultValue="94102" />
            </div>
          </section>
          <section className="card form-section">
            <h2>Delivery</h2>
            {[
              { id: false, title: "Standard", note: "1 to 2 business days", price: totals.shipping === 0 ? "Free" : formatTotal(totals.shipping) },
              { id: true, title: "Express", note: "Next business day", price: formatTotal(EXPRESS_SHIPPING) },
            ].map((o) => (
              <label key={o.title} className={express === o.id ? "radio-card selected" : "radio-card"}>
                <input type="radio" name="delivery" checked={express === o.id} onChange={() => setExpress(o.id)} hidden />
                <span className="radio-dot" />
                <span>
                  <strong>{o.title}</strong>
                  <span className="muted"> · {o.note}</span>
                </span>
                <span className="radio-price">{o.price}</span>
              </label>
            ))}
          </section>
          <section className="card form-section">
            <h2>Payment</h2>
            <Field label="Card number" placeholder="1234 1234 1234 1234" autoComplete="cc-number" />
            <div className="field-row">
              <Field label="Expiry" placeholder="MM / YY" autoComplete="cc-exp" />
              <Field label="CVC" placeholder="123" autoComplete="cc-csc" />
            </div>
          </section>
          <Button type="submit" block disabled={items.length === 0}>
            <Icon name="lock" size={16} /> Pay {formatTotal(withShipping.total)}
          </Button>
        </form>
        <OrderSummary
          totals={withShipping}
          title="Your order"
          lines={items.map((i) => (
            <div key={i.key} className="mini-line">
              <img src={i.image} alt="" />
              <div>
                <div className="mini-line-name">{i.name}</div>
                <div className="cart-line-variant">
                  {i.variant} · Qty {i.qty}
                </div>
              </div>
              <span>{formatTotal(i.price * i.qty)}</span>
            </div>
          ))}
        />
      </div>
    </div>
  );
}
