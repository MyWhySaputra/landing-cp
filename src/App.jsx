import Navbar from "./components/Navbar";
import FeaturedServices from "./components/FeaturedServices";
import Hero from "./components/Hero";
import About from "./components/About";
import Clients from "./components/Clients";
import Features from "./components/Features";
import FeatureDetail from "./components/FeaturesDetails";
import ServicesSection from "./components/ServicesSection";
import MoreFeaturesSection from "./components/MoreFeaturesSection";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonials";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedServices />
      <About />
      <Clients />
      <Features />
      <FeatureDetail />
      <ServicesSection />
      <MoreFeaturesSection />
      <Pricing />
      <Testimonial />
      <ContactSection />
      <Footer />
    </>
  );
}
