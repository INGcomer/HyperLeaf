const VALORES = [
  {
    icon: "⚖️",
    title: "Legalidad",
    desc: "Operamos exclusivamente dentro del marco regulatorio REPROCANN y la Ley 27.350, garantizando certeza jurídica a cada asociado.",
  },
  {
    icon: "🌿",
    title: "Calidad",
    desc: "Producto cultivado con estándares rigurosos de sanidad vegetal, trazabilidad completa y sin agroquímicos.",
  },
  {
    icon: "🤝",
    title: "Comunidad",
    desc: "Construimos vínculos genuinos con nuestros asociados. Tu voz importa en cada decisión de la organización.",
  },
  {
    icon: "📚",
    title: "Educación",
    desc: "Fomentamos el uso responsable e informado, desmitificando el cannabis con evidencia científica y acompañamiento profesional.",
  },
];

export default function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="quienes-somos-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="text-xs font-black tracking-institutional uppercase text-[#4A5E23] mb-4">
          La organización
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Textos */}
          <div>
            <h2
              id="quienes-somos-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D3935] leading-tight mb-8"
            >
              Una asociación civil construida
              <span className="text-[#4A5E23]"> para los mendocinos.</span>
            </h2>

            {/* Misión */}
            <div className="mb-8">
              <h3 className="text-xs font-black tracking-institutional uppercase text-[#C8D400] bg-[#4A5E23] inline-block px-3 py-1 rounded-full mb-3">
                Misión
              </h3>
              <p className="text-base lg:text-lg font-light text-[#3D3935] leading-relaxed">
                Garantizar el acceso legal, seguro y asequible al cannabis a
                toda persona mayor de 18 años en Mendoza, priorizando la
                salud, la libertad individual y el respeto por el marco
                normativo vigente.
              </p>
            </div>

            {/* Visión */}
            <div className="mb-8">
              <h3 className="text-xs font-black tracking-institutional uppercase text-[#C8D400] bg-[#4A5E23] inline-block px-3 py-1 rounded-full mb-3">
                Visión
              </h3>
              <p className="text-base lg:text-lg font-light text-[#3D3935] leading-relaxed">
                Ser la asociación civil cannábica de referencia en Cuyo:
                reconocida por su transparencia, su impacto comunitario y por
                elevar los estándares de la industria en Argentina.
              </p>
            </div>

            {/* Aviso legal link */}
            <a
              href="/aviso-legal"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A5E23] hover:text-[#C8D400] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Ver marco legal completo →
            </a>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALORES.map((v) => (
              <article
                key={v.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#A8C66C] hover:shadow-sm transition-all duration-200"
              >
                <span className="text-3xl mb-4 block" aria-hidden="true">
                  {v.icon}
                </span>
                <h3 className="text-base font-black text-[#3D3935] mb-2">
                  {v.title}
                </h3>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
