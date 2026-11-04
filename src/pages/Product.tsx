import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "@/cart/CartContext";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { OptionPicker } from "@/components/OptionPicker";
import { QuantityStepper } from "@/components/QuantityStepper";
import { Rating } from "@/components/Rating";
import { lineFromProduct } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import { categories, defaultSelection, getProduct, imageFor, reviewsFor, type Product as ProductType } from "@/lib/products";

export function Product() {
  const { id = "" } = useParams();
  const product = getProduct(id);
  if (!product) {
    return (
      <div className="container page">
        <h1 className="page-title">We couldn't find that product</h1>
        <Link to="/shop" className="link not-found-link">
          Back to the shop
        </Link>
      </div>
    );
  }
  return <ProductDetail key={product.id} product={product} />;
}

function ProductDetail({ product }: { product: ProductType }) {
  const [selection, setSelection] = useState(() => defaultSelection(product));
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  const navigate = useNavigate();
  const category = categories.find((c) => c.id === product.category);
  const imageOption = product.options.find((o) => o.values.some((v) => v.image));

  return (
    <div className="container page">
      <div className="crumbs">
        <Link to="/shop">Shop</Link>/<Link to={`/shop/${product.category}`}>{category?.name}</Link>/<span>{product.name}</span>
      </div>
      <div className="pdp">
        <div>
          <div className="pdp-media">
            <img src={imageFor(product, selection)} alt={product.name} />
          </div>
          {imageOption && (
            <div className="pdp-thumbs">
              {imageOption.values.map((v) => (
                <button
                  key={v.name}
                  type="button"
                  className="pdp-thumb"
                  aria-label={v.name}
                  aria-pressed={selection[imageOption.name] === v.name}
                  onClick={() => setSelection({ ...selection, [imageOption.name]: v.name })}
                >
                  <img src={imageFor(product, { [imageOption.name]: v.name })} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="pdp-info">
          <div className="pdp-heading">
            <span className="eyebrow">{category?.name}</span>
            <h1 className="pdp-title">{product.name}</h1>
            <Rating value={product.rating} count={product.reviewCount} />
          </div>
          <span className="pdp-price">{formatPrice(product.price)}</span>
          <p className="pdp-desc">{product.description}</p>
          {product.options.map((o) => (
            <OptionPicker key={o.name} option={o} value={selection[o.name] ?? ""} onChange={(v) => setSelection({ ...selection, [o.name]: v })} />
          ))}
          {product.soldOut ? (
            <>
              <span className="stock-note">Sold out. Back in early December.</span>
              <Button block disabled>
                Sold out
              </Button>
            </>
          ) : (
            <div className="pdp-buy">
              <QuantityStepper large value={qty} onChange={setQty} />
              <Button
                onClick={() => {
                  add(lineFromProduct(product, selection, qty));
                  navigate("/cart");
                }}
              >
                Add to cart · {formatPrice(product.price * qty)}
              </Button>
            </div>
          )}
          <div className="pdp-perks">
            <div>
              <Icon name="truck" size={18} /> Ships in 1 to 2 days from our studio
            </div>
            <div>
              <Icon name="shield" size={18} /> 2-year warranty
            </div>
            <div>
              <Icon name="refresh" size={18} /> 30-day returns
            </div>
          </div>
        </div>
      </div>
      <div className="specs">
        <section>
          <div className="section-head">
            <h2>Specifications</h2>
          </div>
          <div className="card specs-table">
            {product.specs.map(([k, v]) => (
              <div key={k} className="specs-row">
                <span>{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="section-head">
            <h2>Reviews</h2>
            <Rating value={product.rating} count={product.reviewCount} />
          </div>
          <div className="card">
            {reviewsFor(product).map((r) => (
              <div key={r.name} className="review">
                <div className="review-head">
                  <span>{r.name}</span>
                  <span className="review-date">{r.date}</span>
                </div>
                <Rating value={r.rating} />
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
