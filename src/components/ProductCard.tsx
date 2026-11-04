import { Link } from "react-router-dom";
import { formatPrice } from "@/lib/format";
import { imageUrl } from "@/lib/images";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const swatches = product.options.find((o) => o.values.some((v) => v.swatch))?.values ?? [];
  return (
    <Link to={`/product/${product.id}`} className={product.soldOut ? "product-card sold-out" : "product-card"}>
      <div className="product-card-media">
        <img src={imageUrl(product.image)} alt={product.name} />
        {product.soldOut ? <span className="tag">Sold out</span> : product.isNew ? <span className="tag new">New</span> : null}
      </div>
      <div className="product-card-body">
        <span className="product-card-name">{product.name}</span>
        <span className="product-card-tagline">{product.tagline}</span>
        <div className="product-card-foot">
          <span className="price">{formatPrice(product.price)}</span>
          {swatches.length > 1 && (
            <span className="swatches" aria-label={`${swatches.length} colours`}>
              {swatches.map((s) => (
                <span key={s.name} className="swatch-dot" style={{ background: s.swatch }} />
              ))}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
