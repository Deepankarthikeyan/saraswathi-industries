import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "../components/Shared.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";
import { business, whatsappUrl } from "../utils/contact.js";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact us" title={<>Let’s talk about<br />what you need.</>} description="Tell us what you’re looking for. Our team is ready to help with product information and your enquiry." image="/images/eb-meter%20alumi.jpeg" />
      <section className="section-pad"><div className="container contact-layout">
        <aside className="contact-sidebar"><span className="eyebrow">Get in touch</span><h2>We’re here to help.</h2><p>Reach us directly or send a message using the enquiry form. We’ll be glad to hear from you.</p>
          <div className="contact-methods">
            {business.phones.map((phone) => <a key={phone.number} href={`tel:${phone.tel}`} className="contact-method"><span><Phone size={19} /></span><div><small>Call us</small><strong>{phone.number}</strong></div><ArrowUpRight size={16} /></a>)}
            <a href={`mailto:${business.email}`} className="contact-method"><span><Mail size={19} /></span><div><small>Email us</small><strong>{business.email}</strong></div><ArrowUpRight size={16} /></a>
            <a href={whatsappUrl("Hello Saraswathi Industry, I have a product enquiry.")} target="_blank" rel="noreferrer" className="contact-method"><span><MessageCircle size={19} /></span><div><small>WhatsApp</small><strong>Message our team</strong></div><ArrowUpRight size={16} /></a>
            <div className="contact-method address-method"><span><MapPin size={19} /></span><div><small>Business address</small><strong>{business.address}</strong></div></div>
          </div>
          {business.mapEmbedUrl ? <div className="map-frame"><iframe title="Saraswathi Industry location" src={business.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div> : <div className="map-placeholder"><MapPin size={21} /><span>Google Maps location<br /><small>Add your business map embed URL to src/utils/contact.js</small></span></div>}
          <p className="contact-edit-note">Contact details can be updated in src/utils/contact.js.</p>
        </aside>
        <EnquiryForm />
      </div></section>
    </>
  );
}
