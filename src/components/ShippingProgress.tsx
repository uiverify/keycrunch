import { formatTotal } from "@/lib/format";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/shipping";
import { Icon } from "./Icon";

export function ShippingProgress({ subtotal }: { subtotal: number }) {
  const done = subtotal >= FREE_SHIPPING_THRESHOLD;
  const pct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  return (
    <div className={done ? "card ship-progress done" : "card ship-progress"}>
      <div className="ship-progress-label">
        <Icon name="truck" size={18} />
        {done ? "Free shipping unlocked" : `Add ${formatTotal(FREE_SHIPPING_THRESHOLD - subtotal)} more for free shipping`}
      </div>
      <div className="ship-progress-track">
        <div className="ship-progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
