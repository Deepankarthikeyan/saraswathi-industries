import { ArrowRight, BadgeCheck, Boxes, Handshake, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero, SectionHeading, Reveal, BulletList, CtaBanner } from "../components/Shared.jsx";

const teamImage = "/images/SS%20tray%20with%20GI.jpg";

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title={<>A practical partner for<br />industrial product needs.</>} description="Saraswathi Industry brings together a varied product range and a personal, dependable approach to serving customers." image={teamImage} />
      <section className="section-pad"><div className="container about-intro-grid">
        <Reveal><span className="eyebrow">Who we are</span><h2>Thoughtful products. <span>Dependable relationships.</span></h2></Reveal>
        <Reveal><p className="lead">Saraswathi Industry deals in stainless steel meter boxes, jet covers, motor covers, fire buckets, air ducts, metal fabrication products, plastic drums, grass and water spraying products, and more.</p><p>We work to make finding and enquiring about industrial and utility products straightforward. Our team is here to understand your requirement and help you explore suitable options.</p><Link to="/products" className="text-link">Explore our products <ArrowRight size={16} /></Link></Reveal>
      </div></section>
      <section className="section-pad section-light"><div className="container"><SectionHeading eyebrow="What guides us" title="Our mission, vision & commitment" centered /><div className="mission-grid">
        {[[Target, "Our mission", "To offer practical industrial and utility products with responsive service and a focus on customer requirements."], [Boxes, "Our vision", "To build lasting customer relationships as a trusted source for a diverse range of industrial products."], [BadgeCheck, "Our commitment", "To communicate clearly, provide useful product information and support customers through their enquiry."]].map(([Icon, title, text], i) => <Reveal className="mission-card" delay={i * 0.08} key={title}><span className="mission-icon"><Icon size={22} /></span><h3>{title}</h3><p>{text}</p></Reveal>)}
      </div></div></section>
      <section className="section-pad"><div className="container about-strength-grid">
        <Reveal className="about-image"><img src="/images/eb-meter%20alumi.jpeg" alt="Meter box product" loading="lazy" decoding="async" /><span className="about-image-label"><Handshake size={18} /> A service-first approach</span></Reveal>
        <Reveal><span className="eyebrow">Our strengths</span><h2>Built on practical experience and personal service.</h2><p>We value honest communication and a flexible approach to the products and enquiries our customers bring to us.</p><BulletList items={["A broad portfolio of industrial and utility products", "Metal fabrication products and stainless steel product range", "Product information shared on request", "Responsive support for enquiries and order coordination"]} /></Reveal>
      </div></section>
      <CtaBanner />
    </>
  );
}
