import { Star } from "./Icon";

export function Rating({ value, count }: { value: number; count?: number }) {
  return (
    <span className="rating" aria-label={`Rated ${value} out of 5`}>
      <span className="stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star key={n} filled={n <= Math.round(value)} />
        ))}
      </span>
      {value.toFixed(1)}
      {count !== undefined && <span>({count})</span>}
    </span>
  );
}
