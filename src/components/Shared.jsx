import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { products } from "../data/products.js";

export function PageHero({ eyebrow, title, description, image, compact = false }) {
  return (
    <section className={`page-hero ${compact ? "page-hero-compact" : ""}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(36,44,48,.92), rgba(48,57,62,.54)), url("${image}")` }}>
      <div className="container page-hero-content">
        <div className="breadcrumbs"><Link to="/">Home</Link><ChevronRight size={14} /><span>{eyebrow}</span></div>
        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, light = false, centered = false }) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""} ${centered ? "section-heading-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function ProductCard({ product, index = 0 }) {
  return (
    <Reveal className="product-card" delay={index % 3 * 0.06}>
      <Link to={`/products/${product.slug}`} className="product-image-wrap" aria-label={`View ${product.name}`}>
        <img src={product.image} alt={product.alt} loading="lazy" decoding="async" />
        <span className="product-category">{product.category}</span>
        <span className="product-image-arrow"><ArrowUpRight size={17} /></span>
      </Link>
      <div className="product-info">
        <h3><Link to={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.description}</p>
        <div className="product-actions">
          <Link className="text-link" to={`/products/${product.slug}`}>View details <ArrowRight size={15} /></Link>
          <Link className="text-link text-link-orange" to={`/contact?product=${encodeURIComponent(product.name)}`}>Enquire now <ArrowUpRight size={15} /></Link>
        </div>
      </div>
    </Reveal>
  );
}

export function ProductGrid({ items = products, limit }) {
  const shown = limit ? items.slice(0, limit) : items;
  return <div className="product-grid">{shown.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>;
}

export function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner-inner">
        <div><span className="eyebrow eyebrow-light">Let’s work together</span><h2>Have an industrial product requirement?</h2><p>Tell us what you’re looking for. Our team is ready to help with your enquiry.</p></div>
        <Link className="button button-accent" to="/contact">Request a quote <ArrowUpRight size={17} /></Link>
      </div>
    </section>
  );
}

export function BulletList({ items }) {
  return <ul className="bullet-list">{items.map((item) => <li key={item}><span className="bullet-check"><Check size={14} /></span>{item}</li>)}</ul>;
}
