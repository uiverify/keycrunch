import { Link } from "react-router-dom";

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <Link to="/" className={small ? "logo small" : "logo"} aria-label="Keycrunch home">
      <span className="logo-ring" />
      keycrunch
    </Link>
  );
}
