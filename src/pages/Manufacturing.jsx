import { ArrowRight, Boxes, CheckCircle2, Cog, Layers3, Ruler, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero, Reveal, SectionHeading, CtaBanner } from "../components/Shared.jsx";

const work = [
  [Cog, "Metal fabrication", "Metal fabrication products and practical solutions for industrial requirements."],
  [Layers3, "Stainless steel products", "A selection of stainless steel products for utility and industrial use."],
  [Boxes, "Product range & supply", "A broad portfolio of products available to enquire about for varied requirements."],
  [Ruler, "Requirement-led enquiries", "Discuss the product you need and ask our team for relevant details and available options."],
];

export default function Manufacturing() {
  return (
    <>
      <PageHero eyebrow="Manufacturing & capabilities" title={<>Tin, meter boxes &<br />stainless steel products.</>} description="Explore the product and fabrication capabilities that Saraswathi Industry offers, and get in touch to discuss your needs." image="/images/SS%20tray%20with%20GI.jpg" />
      <section className="section-pad"><div className="container"><SectionHeading eyebrow="What we do" title="Our capabilities" description="We offer metal fabrication products and a varied product range. Contact us to discuss a specific requirement and available options." /><div className="capability-grid">{work.map(([Icon, title, text], i) => <Reveal className="capability-card" key={title} delay={i * 0.06}><span className="capability-icon"><Icon size={22} /></span><h3>{title}</h3><p>{text}</p><Link to="/contact" className="text-link">Discuss a requirement <ArrowRight size={15} /></Link></Reveal>)}</div></div></section>
      <section className="manufacturing-note"><div className="container manufacturing-note-inner"><div className="manufacturing-note-icon"><ShieldCheck size={26} /></div><div><span className="eyebrow eyebrow-light">Product-specific information</span><h2>Need to know more before you decide?</h2><p>Materials, dimensions, product options and other details can vary by product. Contact our team for information relevant to your requirement.</p></div><Link to="/contact" className="button button-accent">Ask our team <ArrowRight size={16} /></Link></div></section>
      <section className="section-pad section-light"><div className="container quality-grid"><Reveal><span className="eyebrow">A considered approach</span><h2>Clear communication. Quality-minded service.</h2><p>We aim to make the enquiry process straightforward: tell us what you need, and we’ll help clarify the product details and next steps.</p></Reveal><div className="quality-points"><div><CheckCircle2 size={19} /><span><strong>Attentive enquiries</strong><small>We take time to understand what you’re looking for.</small></span></div><div><CheckCircle2 size={19} /><span><strong>Product information</strong><small>Ask about the material, size and specifications relevant to your product.</small></span></div><div><CheckCircle2 size={19} /><span><strong>Practical coordination</strong><small>Our team can help with availability and order-related questions.</small></span></div></div></div></section>
      <CtaBanner />
    </>
  );
}
