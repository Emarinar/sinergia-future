import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trust from "./components/Trust";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappFloating from "./components/WhatsappFloating";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <div className="relative">
      <CursorGlow />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Trust />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
        <WhatsappFloating />
      </div>
    </div>
  );
}
