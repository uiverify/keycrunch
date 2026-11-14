import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "@/cart/CartContext";
import { categories } from "@/lib/products";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Announce() {
  return (
    <div className="announce">
      Every board ships in 1 to 2 days
      <span className="announce-extra"> · 2-year warranty · 30-day returns</span>
    </div>
  );
}

export function Header() {
  const { totals } = useCart();
  return (
    <header className="header">
      <div className="container header-inner">
        <button type="button" className="icon-button menu-button" aria-label="Menu">
          <Icon name="menu" />
        </button>
        <Logo />
        <nav className="nav" aria-label="Categories">
          {categories.map((c) => (
            <NavLink key={c.id} to={`/shop/${c.id}`}>
              {c.name}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button type="button" className="icon-button header-search" aria-label="Search">
            <Icon name="search" />
          </button>
          <Link to="/cart" className="icon-button" aria-label={`Cart, ${totals.count} items`}>
            <Icon name="bag" />
            {totals.count > 0 && <span className="badge-count">{totals.count}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo small />
        <span>© 2026 Keycrunch Inc.</span>
        <nav className="footer-links">
          <a href="#shipping">Shipping</a>
          <a href="#returns">Returns</a>
          <a href="#privacy">Privacy</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Announce />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
