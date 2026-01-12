import Navbar from "./components/Navbar";
import CursorGlow from "./components/UI/CursorGlow";
import WhatsAppFloating from "./components/WhatsappFloating";

// SEO (Schema)
import LocalBusinessSchema from "./SEO/LocalBusinessSchema";
import FaqSchema from "./SEO/FaqSchema";


// Secciones
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Results from "./components/Results";
import FieldSlider from "./components/FieldSlider";
import Clients from "./components/Clients";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import About from "./components/About";
import LeadMagnet from "./components/LeadMagnet";
import Socials from "./components/Socials";
import BookCall from "./components/BookCall";
import MapReviews from "./components/MapReviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative">
      {/* Glow premium (no bloquea clicks) */}
      <CursorGlow />

      {/* ✅ Schema: mejor arriba para SEO (no afecta layout) */}
      <LocalBusinessSchema />
      <FaqSchema />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Services />

        <Process />
        <Results />
        <FieldSlider />

        <Clients />
        <Plans />

        <Testimonials />
        <FAQ />

        <About />
        <LeadMagnet />
        <Socials />

        <BookCall />
        <MapReviews />

        <Contact />
        <Footer />
      </main>

      <WhatsAppFloating />
    </div>
  );
}
