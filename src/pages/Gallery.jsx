import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "../components/Shared.jsx";
import { products } from "../data/products.js";

const categories = ["All", "Stainless Steel", "Industrial Covers", "Safety Products", "Ventilation", "Utility Products", "Metal Fabrication", "Industrial Products"];

export default function Gallery() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const items = category === "All" ? products : products.filter((item) => item.category === category);
  return (
    <>
      <PageHero eyebrow="Gallery" title={<>A look at our<br />product range.</>} description="Explore product photographs from the Saraswathi Industry portfolio. Need additional product images? Get in touch." image="/images/teaboiler.jpg" />
      <section className="section-pad"><div className="container">
        <div className="gallery-intro"><div><span className="eyebrow">Product gallery</span><h2>Products up close</h2></div><p>Browse by category. Product-specific variations and details are available on enquiry.</p></div>
        <div className="filter-row gallery-filters">{categories.map((item) => <button key={item} className={category === item ? "filter-chip selected" : "filter-chip"} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <div className="gallery-grid">{items.map((item) => <button className="gallery-item" key={item.slug} onClick={() => setSelected(item)} aria-label={`View ${item.name} image`}><img src={item.image} alt={item.alt} loading="lazy" decoding="async" /><span className="gallery-shade" /><span className="gallery-label"><small>{item.category}</small><strong>{item.name}</strong></span><span className="gallery-zoom"><ZoomIn size={19} /></span></button>)}</div>
      </div></section>
      <AnimatePresence>{selected && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} role="presentation"><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close image"><X size={22} /></button><motion.figure initial={{ scale: .96 }} animate={{ scale: 1 }} onClick={(event) => event.stopPropagation()}><img src={selected.image} alt={selected.alt} decoding="async" /><figcaption><span>{selected.category}</span><strong>{selected.name}</strong></figcaption></motion.figure></motion.div>}</AnimatePresence>
    </>
  );
}
