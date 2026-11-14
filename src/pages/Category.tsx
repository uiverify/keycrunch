import { NavLink, useParams } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { categories, isCategoryId, productsIn } from "@/lib/products";

export function Category() {
  const { category } = useParams();
  const current = isCategoryId(category) ? categories.find((c) => c.id === category) : undefined;
  const items = productsIn(current?.id);
  return (
    <div className="container page">
      <div className="listing-head">
        <div>
          <h1 className="page-title">{current?.name ?? "Shop all"}</h1>
          <p className="muted">{current?.blurb ?? "Keyboards and the things that sit around them."}</p>
        </div>
        <select className="sort" aria-label="Sort by" defaultValue="featured">
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price, low to high</option>
          <option value="price-desc">Price, high to low</option>
        </select>
      </div>
      <nav className="chips" aria-label="Filter by category">
        <NavLink to="/shop" end className="chip">
          All
        </NavLink>
        {categories.map((c) => (
          <NavLink key={c.id} to={`/shop/${c.id}`} className="chip">
            {c.name}
          </NavLink>
        ))}
      </nav>
      <div className="product-grid">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
