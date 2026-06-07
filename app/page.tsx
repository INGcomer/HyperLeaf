import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Confianza from "@/components/Confianza";
import QuienesSomos from "@/components/QuienesSomos";
import Condiciones from "@/components/Condiciones";
import Proceso from "@/components/Proceso";
import Productos from "@/components/Productos";
import Beneficios from "@/components/Beneficios";
import Testimonios from "@/components/Testimonios";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Confianza />
        <QuienesSomos />
        <Condiciones />
        <Proceso />
        <Productos />
        <Beneficios />
        <Testimonios />
        <FAQ />
        <Contacto />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
