import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Contexto from "@/components/Contexto";
import Segmentos from "@/components/Segmentos";
import PropuestaDeValor from "@/components/PropuestaDeValor";
import Canales from "@/components/Canales";
import Comunidad from "@/components/Comunidad";
import Socios from "@/components/Socios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Contexto />
        <Segmentos />
        <PropuestaDeValor />
        <Canales />
        <Comunidad />
        <Socios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
