# Saraswathi Industry website

A responsive React + Vite website for Saraswathi Industry with a stainless-steel visual theme, product catalog and detail pages, About, Manufacturing, Gallery, Contact, a shared enquiry form above the footer, and scroll/page transitions.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

From the project directory:

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite (normally `http://localhost:5173`).

## Build and preview

```bash
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`. Deploy that folder to a static host such as Netlify, Vercel, or GitHub Pages. Configure the host to serve `index.html` for unknown paths so React Router routes work on refresh.

## Update product content

Edit `src/data/products.js` to update product names, descriptions, categories, images, applications, or specifications. Add product photos to `public/images/` and set their public URL in the product record. Product specifications and materials are intentionally not invented; add confirmed information only.

## Configure business contact details

Edit `src/utils/contact.js` to update the phone numbers, email, address, WhatsApp number (international digits only), and Google Maps embed URL. The contact form opens a prefilled email using the visitor's mail app. The separate WhatsApp action opens a prefilled WhatsApp chat.

## Branding and images

- `public/logo.svg` is the header and footer wordmark, featuring a metallic air-duct-shaped S with meter-box, fire-bucket, and motor-cover details; `public/favicon.svg` is the matching compact icon.
- Supplied product photographs are kept in `public/images/`.
- Website banners use the supplied product photographs. Replace or add product photos in `public/images/` as your range grows.

## Project structure

```text
public/
  favicon.svg
  logo.svg
  images/                  Supplied product photographs
src/
  components/              Shared layout, enquiry form, and reusable UI components
  data/products.js         Editable product catalog
  pages/                   Home, About, Products, detail, Manufacturing, Gallery, Contact
  utils/contact.js         Editable contact details and WhatsApp URL helper
  App.jsx                  Routes
  main.jsx                 React entry point
  styles.css               Responsive site styling
index.html                 SEO metadata and app shell
vite.config.js
```
