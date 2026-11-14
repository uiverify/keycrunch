import { Link } from "react-router-dom";
import { Icon, type IconName } from "@/components/Icon";
import { ProductCard } from "@/components/ProductCard";
import { formatPrice } from "@/lib/format";
import { imageUrl } from "@/lib/images";
import { categories, requireProduct } from "@/lib/products";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/shipping";

const bestsellers = ["keycrunch-75", "keycrunch-wrist-rest", "keycrunch-keycaps", "keycrunch-felt-mat"].map(requireProduct);

const promises: { icon: IconName; title: string; text: string }[] = [
  { icon: "truck", title: "Free shipping", text: `On orders over ${formatPrice(FREE_SHIPPING_THRESHOLD)}, dispatched in 1 to 2 days.` },
  { icon: "shield", title: "2-year warranty", text: "Every Keycrunch board is covered, parts and labour." },
  { icon: "refresh", title: "30-day returns", text: "Not the right feel? Send it back, we pay the postage." },
];

export function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">New · Keycrunch 75</span>
          <h1>Quiet, precise, built to last.</h1>
          <p>A machined aluminium keyboard with a soft gasket mount and a sound you'll actually like. Designed to stay on your desk for the next ten years.</p>
          <div className="hero-actions">
            <Link to="/product/keycrunch-75" className="button primary">
              Shop Keycrunch 75
            </Link>
            <Link to="/shop/keyboards" className="button outline">
              All keyboards
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <img src={imageUrl("hero-desk")} alt="A Keycrunch 75 keyboard on a felt desk mat with a walnut wrist rest" />
        </div>
      </section>

      <section className="categories" aria-label="Categories">
        {categories.map((c) => (
          <Link key={c.id} to={`/shop/${c.id}`} className="card category-tile">
            <img src={imageUrl(c.image)} alt="" />
            <span>
              {c.name}
              <Icon name="chevronRight" size={16} />
            </span>
          </Link>
        ))}
      </section>

      <section className="bestsellers">
        <div className="section-head">
          <h2>Bestsellers</h2>
          <Link to="/shop" className="link">
            Shop all <Icon name="arrowRight" size={16} />
          </Link>
        </div>
        <div className="product-grid">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="promises">
        {promises.map((p) => (
          <div key={p.title} className="card promise">
            <span className="promise-icon">
              <Icon name={p.icon} />
            </span>
            <div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
