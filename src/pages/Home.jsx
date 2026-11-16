import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Cog, PackageCheck, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { products } from "../data/products.js";
import { CtaBanner, ProductGrid, Reveal, SectionHeading } from "../components/Shared.jsx";

const heroImage = "/images/eb-meter%20alumi.jpeg";

export default function Home() {
  return (
    <>
      <section className="home-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(36,44,48,.9) 0%, rgba(48,57,62,.76) 48%, rgba(48,57,62,.3) 100%), url("${heroImage}")` }}>
        <div className="container home-hero-inner">
          <div className="hero-copy">
            <span className="hero-kicker"><span /> Industrial products & solutions</span>
            <h1>Reliable Industrial Products.<br /><span>Built for Everyday</span> Performance.</h1>
            <p>Discover quality stainless steel products, metal fabrication solutions, industrial accessories, and durable utility products from Saraswathi Industry.</p>
            <div className="hero-actions"><Link to="/products" className="button button-accent">Explore our products <ArrowUpRight size={17} /></Link><Link to="/contact" className="button button-ghost">Get a free quote <ArrowRight size={17} /></Link></div>
            <div className="hero-proof"><span><Check size={14} /> Practical product range</span><span><Check size={14} /> Customer-first service</span></div>
          </div>
          <div className="hero-index"><span>01</span><span className="hero-index-line" /><span>04</span></div>
        </div>
        <a href="#intro" className="hero-scroll"><ArrowDown size={16} /> Scroll to explore</a>
        <div className="hero-caption">ENGINEERED FOR THE EVERYDAY</div>
      </section>

      <section id="intro" className="intro-section section-pad">
        <div className="container intro-grid">
          <Reveal className="intro-visual">
            <div className="intro-photo"><img src="/images/SS%20tray%20with%20GI.jpg" alt="Metal product from Saraswathi Industry" loading="lazy" decoding="async" /></div>
            <div className="intro-photo-accent" />
            <div className="intro-note"><span className="intro-note-icon"><Cog size={23} /></span><span>Industrial know-how<br /><strong>Practical solutions</strong></span></div>
          </Reveal>
          <Reveal className="intro-copy">
            <span className="eyebrow">A dependable industry partner</span>
            <h2>Products designed around <span>real-world needs.</span></h2>
            <p className="lead">Saraswathi Industry supplies a varied range of industrial and utility products, with a focus on practical solutions and dependable service.</p>
            <p>From stainless steel meter boxes and protective covers to air ducts, fire buckets and metal fabrication products, we help customers find products suited to their requirements.</p>
            <div className="intro-benefits"><span><Check size={16} /> A diverse product range</span><span><Check size={16} /> Helpful, responsive service</span></div>
            <Link to="/about" className="button button-outline">Get to know us <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="categories-section section-pad section-light">
        <div className="container">
          <div className="section-heading-row"><SectionHeading eyebrow="Made at Saraswathi Industry" title="Tin, meter boxes & stainless steel products." description="Explore products from our own range, made for industrial and utility requirements." /><Link to="/products" className="button button-outline heading-action">View all products <ArrowRight size={16} /></Link></div>
          <ProductGrid limit={3} />
        </div>
      </section>

      <section className="strength-section section-pad">
        <div className="container strength-grid">
          <Reveal className="strength-intro">
            <span className="eyebrow">Why Saraswathi Industry</span>
            <h2>A partner you can count on.</h2>
            <p>We keep our focus on what matters: useful products, attentive communication, and a straightforward experience from enquiry to supply.</p>
            <Link to="/about" className="text-link">Discover our approach <ArrowRight size={16} /></Link>
          </Reveal>
          <div className="strength-cards">
            {[
              [ShieldCheck, "Quality-minded", "A thoughtful approach to the products we offer and the way we work."],
              [PackageCheck, "A wide product range", "A broad selection of products for industrial, utility and everyday needs."],
              [Sparkles, "Helpful service", "Friendly support to help you enquire about a product and its details."],
              [Truck, "Reliable coordination", "Clear communication to support your order and delivery requirements."],
            ].map(([Icon, title, text], i) => <Reveal className="strength-card" delay={i * 0.06} key={title}><span className="strength-icon"><Icon size={21} /></span><h3>{title}</h3><p>{text}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="application-section">
        <div className="application-photo" style={{ backgroundImage: `url("${heroImage}")` }} />
        <div className="application-content">
          <Reveal>
            <span className="eyebrow eyebrow-light">Built for varied needs</span>
            <h2>Useful across industries and everyday applications.</h2>
            <p>Our product range supports customers looking for practical options across industrial, utility, commercial and outdoor requirements.</p>
            <div className="application-tags"><span>Industrial use</span><span>Utility projects</span><span>Commercial needs</span><span>Outdoor applications</span></div>
            <Link className="button button-light" to="/products">Explore the range <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="featured-section section-pad">
        <div className="container">
          <div className="section-heading-row"><SectionHeading eyebrow="Selected products" title="A closer look at our range." description="Browse a selection from our product portfolio and tell us what you need." /><Link to="/products" className="button button-outline heading-action">Explore all products <ArrowRight size={16} /></Link></div>
          <ProductGrid items={products.slice(3, 6)} />
        </div>
      </section>
      <section className="promise-strip"><div className="container promise-inner"><div><span className="eyebrow eyebrow-light">The Saraswathi promise</span><p>Quality products. Trusted engineering. A better experience from first enquiry onward.</p></div><Link to="/contact" className="button button-accent">Let’s talk <ArrowUpRight size={16} /></Link></div></section>
      <CtaBanner />
    </>
  );
}
