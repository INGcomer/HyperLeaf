const BENEFICIOS_LEALTAD = [
  { icon: "🎁", title: "Descuentos progresivos", desc: "Cuanto más tiempo llevás como asociado, más beneficios y descuentos acumulás." },
  { icon: "📅", title: "Eventos exclusivos", desc: "Talleres, catas de producto y charlas con especialistas solo para miembros." },
  { icon: "🗳️", title: "Voto en asambleas", desc: "Como asociado tenés voz y voto en las decisiones estratégicas de la organización." },
  { icon: "📢", title: "Acceso anticipado", desc: "Nuevas cepas, formatos y servicios llegan primero a nuestra comunidad activa." },
];

export default function Comunidad() {
  return (
    <section
      id="comunidad"
      className="py-24 lg:py-32 bg-[#4A5E23] relative overflow-hidden"
      aria-labelledby="comunidad-heading"
    >
      {/* Patrón decorativo */}
      <div className="absolute inset-0 leaf-pattern-light pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-institutional uppercase text-[#C8D400] mb-4">
            Más que clientes
          </p>
          <h2
            id="comunidad-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
          >
            Somos una comunidad
            <span className="text-[#C8D400]"> que se cuida.</span>
          </h2>
          <p className="text-base lg:text-lg font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
            En HyperLeaf no sos un número. Sos parte activa de una organización
            que prioriza el bienestar colectivo, la educación y el uso
            responsable del cannabis en Mendoza.
          </p>
        </div>

        {/* Programa de lealtad */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 mb-12">
          <h3 className="text-xs font-black tracking-institutional uppercase text-[#C8D400] mb-8 text-center">
            Programa de lealtad HyperLeaf
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFICIOS_LEALTAD.map((b) => (
              <div key={b.title} className="text-center">
                <span className="text-4xl block mb-4" aria-hidden="true">
                  {b.icon}
                </span>
                <h4 className="text-sm font-black text-white mb-2">{b.title}</h4>
                <p className="text-xs font-light text-white/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonio placeholder */}
        <figure className="max-w-2xl mx-auto text-center mb-12">
          <blockquote className="text-xl lg:text-2xl font-extralight text-white/90 leading-relaxed italic mb-6">
            &ldquo;Por primera vez puedo acceder a cannabis de calidad sin preocuparme
            por el aspecto legal. HyperLeaf cambió mi relación con el producto.&rdquo;
          </blockquote>
          <figcaption className="text-xs font-black tracking-institutional uppercase text-[#C8D400]">
            M.G. · Asociado recreativo · Mendoza capital
          </figcaption>
        </figure>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#C8D400] text-[#3D3935] font-black text-base tracking-institutional uppercase transition-all duration-200 hover:bg-white hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4A5E23]"
          >
            Unite a la comunidad
          </a>
        </div>
      </div>
    </section>
  );
}
