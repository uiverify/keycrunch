import type { ProductOption } from "@/lib/products";

export function OptionPicker({ option, value, onChange }: { option: ProductOption; value: string; onChange: (value: string) => void }) {
  return (
    <div className="option-group">
      <span className="option-label">
        {option.name}: <span>{value}</span>
      </span>
      <div className="option-list">
        {option.values.map((v) => (
          <button key={v.name} type="button" className="option" aria-pressed={v.name === value} onClick={() => onChange(v.name)}>
            {v.swatch && <span className="swatch-dot" style={{ background: v.swatch }} />}
            {v.name}
          </button>
        ))}
      </div>
    </div>
  );
}
