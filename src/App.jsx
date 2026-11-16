import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Manufacturing from "./pages/Manufacturing.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";

function PageMotion({ children }) {
  const reduceMotion = useReducedMotion();
  return <motion.div initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -4 }} transition={{ duration: reduceMotion ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<PageMotion><Home /></PageMotion>} />
          <Route path="about" element={<PageMotion><About /></PageMotion>} />
          <Route path="products" element={<PageMotion><Products /></PageMotion>} />
          <Route path="products/:slug" element={<PageMotion><ProductDetail /></PageMotion>} />
          <Route path="manufacturing" element={<PageMotion><Manufacturing /></PageMotion>} />
          <Route path="gallery" element={<PageMotion><Gallery /></PageMotion>} />
          <Route path="contact" element={<PageMotion><Contact /></PageMotion>} />
          <Route path="*" element={<PageMotion><Home /></PageMotion>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return <AppRoutes />;
}
