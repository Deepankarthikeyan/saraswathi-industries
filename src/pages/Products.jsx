import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { PageHero, ProductGrid } from "../components/Shared.jsx";
import { products } from "../data/products.js";

export default function Products() {
  const [category, setCategory] = useState("All products");
  const [query, setQuery] = useState("");
  const categories = ["All products", ...new Set(products.map((product) => product.category))];
  const visible = useMemo(() => products.filter((product) => (category === "All products" || product.category === category) && `${product.name} ${product.description}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return (
    <>
      <PageHero eyebrow="Our products" title={<>Tin, meter boxes &<br />stainless steel products.</>} description="Explore a varied range of industrial products and find the right starting point for your enquiry." image="/images/eb-meter%20alumi.jpeg" />
      <section className="section-pad"><div className="container">
        <div className="catalog-tools"><div className="catalog-heading"><span className="eyebrow">Browse our range</span><p>{visible.length} product categories</p></div><label className="search-field"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products..." aria-label="Search products" /></label></div>
        <div className="filter-row"><span><SlidersHorizontal size={15} /> Filter by</span>{categories.map((item) => <button key={item} className={category === item ? "filter-chip selected" : "filter-chip"} onClick={() => setCategory(item)}>{item}</button>)}</div>
        {visible.length > 0 ? <ProductGrid items={visible} /> : <div className="empty-state"><h3>No matching products found</h3><p>Try a different search or product category.</p><button className="text-link" onClick={() => { setCategory("All products"); setQuery(""); }}>Clear filters</button></div>}
      </div></section>
    </>
  );
}
