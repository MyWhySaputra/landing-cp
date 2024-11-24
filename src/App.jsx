import Navbar from "./components/Navbar";
import FeaturedServices from "./components/FeaturedServices";
import Hero from "./components/Hero";
import About from "./components/About";
import Clients from "./components/Clients";
import Features from "./components/Features";
import FeatureDetail from "./components/FeaturesDetails";
import ServicesSection from "./components/ServicesSection";
import MoreFeaturesSection from "./components/MoreFeaturesSection";
// import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, offset: 250, duration: 1000 });
  }, []);
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
      {/* <Pricing /> */}
      <Faq />
      <ContactSection />
      <Footer />
    </>
  );
}
