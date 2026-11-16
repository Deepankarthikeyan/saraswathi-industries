import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { productBySlug, products } from "../data/products.js";
import { whatsappUrl } from "../utils/contact.js";
import { PageHero, BulletList, ProductGrid } from "../components/Shared.jsx";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productBySlug(slug);
  if (!product) return <Navigate to="/products" replace />;
  const message = `Hello Saraswathi Industry, I am interested in your ${product.name}. Please share the product details and price.`;
  return (
    <>
      <PageHero eyebrow="Product details" title={product.name} description={product.description} image={product.image} compact />
      <section className="section-pad"><div className="container detail-layout">
        <div className="detail-image"><img src={product.image} alt={product.alt} decoding="async" /><span>{product.category}</span></div>
        <div className="detail-copy">
          <Link to="/products" className="back-link"><ArrowLeft size={15} /> Back to all products</Link>
          <span className="eyebrow">Product overview</span><h2>{product.name}</h2><p className="lead">{product.description}</p>
          <p>Looking for product-specific details, available options or pricing? Send us your requirement and our team will be happy to help.</p>
          <div className="detail-subsection"><h3>Applications</h3><BulletList items={product.applications} /></div>
          <div className="detail-subsection specs-note"><h3>Specifications & materials</h3><p>Product-specific material, dimensions and specifications are available on request. Please contact us with your requirements.</p></div>
          <div className="detail-actions"><Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="button button-primary">Enquire about this product <ArrowUpRight size={16} /></Link><a className="button button-whatsapp" href={whatsappUrl(message)} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp enquiry</a></div>
          <div className="detail-reassurance"><CheckCircle2 size={17} /> No obligation — just tell us what you need.</div>
        </div>
      </div></section>
      <section className="section-pad section-light"><div className="container"><div className="section-heading-row"><div><span className="eyebrow">Discover more</span><h2 className="section-heading-title">Explore other products</h2></div><Link to="/products" className="text-link">View the full range <ArrowUpRight size={16} /></Link></div><ProductGrid items={products.filter((item) => item.slug !== product.slug)} limit={3} /></div></section>
    </>
  );
}
