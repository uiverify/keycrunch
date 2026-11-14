import { Link } from "react-router-dom";
import { Icon } from "@/components/Icon";

export function Confirmation() {
  return (
    <div className="container page">
      <div className="confirm">
        <span className="confirm-icon">
          <Icon name="check" size={28} strokeWidth={2.4} />
        </span>
        <h1 className="page-title">Thank you, Maya</h1>
        <p className="muted">Order KC-10482 is confirmed. We'll email you a tracking link as soon as it ships.</p>
        <section className="card summary">
          <div className="summary-row">
            <span>Order number</span>
            <span>KC-10482</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>Standard, 1 to 2 business days</span>
          </div>
          <div className="summary-row">
            <span>Ships to</span>
            <span>214 Larkin Street, San Francisco</span>
          </div>
        </section>
        <Link to="/shop" className="button outline">
          Keep shopping
        </Link>
      </div>
    </div>
  );
}
