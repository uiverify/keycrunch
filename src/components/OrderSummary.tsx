import type { ReactNode } from "react";
import type { Totals } from "@/lib/cart";
import { formatTotal } from "@/lib/format";

type Props = { totals: Totals; title?: string; lines?: ReactNode; children?: ReactNode };

export function OrderSummary({ totals, title = "Order summary", lines, children }: Props) {
  return (
    <section className="card summary" aria-label={title}>
      <h2>{title}</h2>
      {lines && <div className="summary-lines">{lines}</div>}
      <div className="summary-row">
        <span>Subtotal</span>
        <span>{formatTotal(totals.subtotal)}</span>
      </div>
      <div className={totals.shipping === 0 ? "summary-row free" : "summary-row"}>
        <span>Shipping</span>
        <span>{totals.shipping === 0 ? "Free" : formatTotal(totals.shipping)}</span>
      </div>
      <div className="summary-row">
        <span>Tax</span>
        <span>{formatTotal(totals.tax)}</span>
      </div>
      <div className="summary-total">
        <span>Total</span>
        <span>{formatTotal(totals.total)}</span>
      </div>
      {children}
    </section>
  );
}
