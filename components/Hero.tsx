import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Inicio"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=1920&q=80"
          alt="Planta de cannabis en entorno natural limpio y luminoso"
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
            Asociación Civil · Mendoza, Argentina
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          Cannabis legal,{" "}
          <span className="text-[#C8D400]">acceso real.</span>
          <br />
          En Mendoza, con HyperLeaf.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl lg:text-2xl font-extralight leading-relaxed max-w-3xl mx-auto mb-12 text-white/85">
          La primera asociación civil enfocada en el acceso seguro, legal y
          consciente al cannabis en Cuyo. Operamos bajo{" "}
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
            href="#quienes-somos"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/60 text-white font-semibold text-base tracking-institutional uppercase transition-all duration-200 hover:border-white hover:bg-white/10 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            Conocé más
          </a>
        </div>

        {/* Stats rápidos */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/20 pt-10">
          {[
            { value: "+150.000", label: "consumidores en Mendoza" },
            { value: ">12%", label: "adultos en la provincia" },
            { value: "Ley 27.350", label: "marco legal vigente" },
            { value: "REPROCANN", label: "registro habilitante" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl lg:text-3xl font-black text-[#C8D400] leading-none">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold tracking-institutional uppercase text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
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
