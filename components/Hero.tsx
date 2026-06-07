import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Inicio"
    >
      {/* Imagen de fondo: entorno limpio, luz natural — estética de bienestar medicinal */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920&q=80"
          alt="Persona en un entorno tranquilo y luminoso, contexto de bienestar y calidad de vida"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay degradado verde institucional */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A5E23]/90 via-[#4A5E23]/75 to-[#3D3935]/85" />
        {/* Textura de hojas */}
        <div className="absolute inset-0 leaf-pattern-light" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8D400]/60 bg-[#C8D400]/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8D400] animate-pulse" />
          <span className="text-xs font-semibold tracking-institutional uppercase text-[#C8D400]">
            Asociación Civil · Mendoza, Argentina · 100% legal
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          Mejorá tu calidad de vida con el
          acompañamiento que{" "}
          <span className="text-[#C8D400]">merecés.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl lg:text-2xl font-extralight leading-relaxed max-w-3xl mx-auto mb-12 text-white/85">
          HyperLeaf es una asociación civil de cannabis medicinal en Mendoza.
          Accedé a tratamientos naturales, legales y certificados, con
          acompañamiento de profesionales especializados en cada paso — bajo
          el marco de{" "}
          <strong className="font-semibold text-white">REPROCANN</strong> y la{" "}
          <strong className="font-semibold text-white">Ley 27.350</strong>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#C8D400] text-[#3D3935] font-black text-base tracking-institutional uppercase transition-all duration-200 hover:bg-white hover:scale-105 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4A5E23]"
          >
            Quiero asociarme
          </a>
          <a
            href="#proceso"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/60 text-white font-semibold text-base tracking-institutional uppercase transition-all duration-200 hover:border-white hover:bg-white/10 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            Conocé cómo funciona
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-institutional uppercase font-semibold">
          Descubrí más
        </span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
