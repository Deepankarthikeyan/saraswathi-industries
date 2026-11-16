import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import EnquiryForm from "./EnquiryForm.jsx";
import { business, whatsappUrl } from "../utils/contact.js";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Manufacturing", "/manufacturing"],
  ["Gallery", "/gallery"],
  ["Contact Us", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <header className="site-header">
      <div className="topline">
        <div className="container topline-inner">
          <span className="topline-tagline">Quality Products. Trusted Engineering.</span>
          <div className="topline-right">
            <a href={`tel:${business.phones[0].tel}`}>Call: {business.phones[0].number}</a>
            <span className="topline-divider" />
            <span>Serving industrial & utility needs</span>
          </div>
        </div>
      </div>
      <div className="nav-wrap">
        <nav className="container navbar" aria-label="Main navigation">
          <Link className="brand" to="/" aria-label="Saraswathi Industries home">
            <img src="/logo.svg?v=6" alt="Saraswathi Industries" />
          </Link>
          <div className="desktop-nav">
            {links.map(([label, path]) => (
              <NavLink key={path} to={path} end={path === "/"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                {label}
              </NavLink>
            ))}
          </div>
          <Link className="button button-primary nav-quote" to="/contact">
            Get a Quote <ArrowUpRight size={16} />
          </Link>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              className="mobile-menu"
              initial={reduceMotion ? false : { opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 36 }}
              transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              {links.map(([label, path]) => (
                <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "mobile-link active" : "mobile-link"}>{label}</NavLink>
              ))}
              <Link to="/contact" className="button button-primary mobile-quote" onClick={() => setOpen(false)}>Get a Quote <ArrowUpRight size={16} /></Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {location.pathname !== "/" && <div className="nav-shadow" />}
    </header>
  );
}

function FooterContact() {
  return (
    <section className="footer-contact section-pad" aria-labelledby="footer-contact-title">
      <div className="container footer-contact-layout">
        <div className="footer-contact-info">
          <span className="eyebrow">Get in touch</span>
          <h2 id="footer-contact-title">Have a requirement?<br />Let’s find the right solution.</h2>
          <p>Talk to our team or send your product details using the enquiry form.</p>
          <div className="footer-contact-methods">
            {business.phones.map((phone) => (
              <a className="footer-contact-method" key={phone.number} href={`tel:${phone.tel}`}>
                <Phone size={18} /><span><small>Call us</small><strong>{phone.number}</strong></span>
              </a>
            ))}
            <a className="footer-contact-method" href={`mailto:${business.email}`}>
              <Mail size={18} /><span><small>Email us</small><strong>{business.email}</strong></span>
            </a>
            <a className="footer-contact-method" href={whatsappUrl("Hello Saraswathi Industries, I have a product enquiry.")} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /><span><small>WhatsApp</small><strong>Message our team</strong></span>
            </a>
            <div className="footer-contact-method footer-contact-address">
              <MapPin size={18} /><span><small>Business address</small><strong>{business.address}</strong></span>
            </div>
          </div>
          <Link to="/contact" className="text-link">Send an enquiry <ArrowUpRight size={16} /></Link>
        </div>
        <EnquiryForm compact eyebrow="Product enquiry" title="Tell us what you need" description="Share your details and our team will follow up." />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Link to="/" className="footer-logo"><img src="/logo.svg?v=6" alt="Saraswathi Industries" /></Link>
          <p>Quality products and practical industrial solutions for everyday performance.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/about">About Us</Link><Link to="/products">Our Products</Link><Link to="/manufacturing">Manufacturing</Link><Link to="/gallery">Gallery</Link>
        </div>
        <div className="footer-column footer-contact-column">
          <h3>Get in touch</h3>
          {business.phones.map((phone) => (
            <a className="footer-contact-link" key={phone.number} href={`tel:${phone.tel}`}><Phone size={15} />{phone.number}</a>
          ))}
          <a className="footer-contact-link" href={`mailto:${business.email}`}><Mail size={15} />{business.email}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner"><span>© {new Date().getFullYear()} Saraswathi Industry. All rights reserved.</span><span>Industrial products, made for everyday work.</span></div>
      </div>
    </footer>
  );
}

function ScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") return undefined;

    const elements = document.querySelectorAll("main section, footer.footer");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

    elements.forEach((element) => {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("scroll-reveal", "is-visible"));
    };
  }, [location.pathname]);

  return null;
}

export function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href={whatsappUrl("Hello Saraswathi Industry, I would like to know more about your products.")} target="_blank" rel="noreferrer" aria-label="Chat with Saraswathi Industry on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3.2a12.2 12.2 0 0 0-10.4 18.6L4 28l6.4-1.6A12.2 12.2 0 1 0 16 3.2Zm0 22.2c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4A10 10 0 1 1 16 25.4Z"/><path fill="currentColor" d="M22 18.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1.1-1.1 2.6 1.1 3 1.3 3.2c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.8-.8 2-1.5.2-.7.2-1.3.1-1.5-.1-.2-.3-.3-.6-.4Z"/></svg>
    </a>
  );
}

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <ScrollAnimations />
      <Header />
      <main>
        <Outlet />
        {location.pathname !== "/contact" && <FooterContact />}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
