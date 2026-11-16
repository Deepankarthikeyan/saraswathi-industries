import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { products } from "../data/products.js";
import { business, whatsappUrl } from "../utils/contact.js";

const emptyForm = { name: "", company: "", phone: "", email: "", product: "", quantity: "", message: "" };

export default function EnquiryForm({ eyebrow = "Product enquiry", title = "How can we help?", description = "Share a few details and we’ll help you with your enquiry.", compact = false }) {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const product = searchParams.get("product");
    if (product) setForm((current) => ({ ...current, product }));
  }, [searchParams]);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const submit = (event) => {
    event.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company || "Not provided"}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Product interested in: ${form.product || "Not specified"}`,
      `Quantity: ${form.quantity || "Not specified"}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(`Product enquiry from ${form.name}`)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const whatsAppMessage = `Hello Saraswathi Industries, I would like to enquire about ${form.product || "your products"}.\nName: ${form.name}\nCompany: ${form.company || "Not provided"}\nPhone: ${form.phone}\nQuantity: ${form.quantity || "Not specified"}\nMessage: ${form.message}`;

  return (
    <div className={`contact-form-panel${compact ? " contact-form-panel-compact" : ""}`}>
      <div className="form-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{description}</p></div>
      <form onSubmit={submit}>
        <div className="form-grid">
          <label className="form-field">Your name <span>*</span><input name="name" value={form.name} onChange={update} placeholder="Enter your name" required autoComplete="name" /></label>
          <label className="form-field">Company name<input name="company" value={form.company} onChange={update} placeholder="Company (optional)" autoComplete="organization" /></label>
          <label className="form-field">Phone number <span>*</span><input name="phone" type="tel" value={form.phone} onChange={update} placeholder="Your contact number" required autoComplete="tel" /></label>
          <label className="form-field">Email address <span>*</span><input name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com" required autoComplete="email" /></label>
          <label className="form-field">Product interested in<select name="product" value={form.product} onChange={update}><option value="">Select a product</option>{products.map((item) => <option key={item.slug} value={item.name}>{item.name}</option>)}<option value="Other">Other / not sure yet</option></select></label>
          <label className="form-field">Quantity<input name="quantity" value={form.quantity} onChange={update} placeholder="If known (optional)" /></label>
          <label className="form-field form-full">Message <span>*</span><textarea name="message" rows="5" value={form.message} onChange={update} placeholder="Tell us a little about your requirement..." required /></label>
        </div>
        <div className="form-submit-row"><button type="submit" className="button button-primary">Send enquiry <Send size={16} /></button><a className="button button-whatsapp" href={whatsappUrl(whatsAppMessage)} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Send via WhatsApp</a></div>
        {submitted && <p className="form-feedback"><CheckCircle2 size={17} /> Your email app should open with your enquiry details. If it doesn’t, contact us directly.</p>}
        <p className="form-privacy">Your details are used only to respond to your enquiry.</p>
      </form>
    </div>
  );
}
