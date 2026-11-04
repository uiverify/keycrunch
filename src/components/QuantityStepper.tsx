import { Icon } from "./Icon";

export function QuantityStepper({ value, onChange, min = 1, max = 9, large = false }: { value: number; onChange: (qty: number) => void; min?: number; max?: number; large?: boolean }) {
  return (
    <span className={large ? "stepper large" : "stepper"}>
      <button type="button" aria-label="Decrease quantity" disabled={value <= min} onClick={() => onChange(value - 1)}>
        <Icon name="minus" size={14} strokeWidth={2.2} />
      </button>
      <output aria-label="Quantity">{value}</output>
      <button type="button" aria-label="Increase quantity" disabled={value >= max} onClick={() => onChange(value + 1)}>
        <Icon name="plus" size={14} strokeWidth={2.2} />
      </button>
    </span>
  );
}
