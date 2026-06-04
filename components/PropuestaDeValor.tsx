const PROPUESTAS = [
  {
    segmento: "Recreativo",
    color: "#C8D400",
    textColor: "#3D3935",
    items: [
      {
        icon: "🏷️",
        title: "Precio transparente",
        desc: "Sin intermediarios ni precios inflados. Cuota de asociado fija y precios de producto claros.",
      },
      {
        icon: "🌿",
        title: "Cepas seleccionadas",
        desc: "Variedad de genéticas con perfiles de efecto conocidos. Flores, extractos y comestibles.",
      },
      {
        icon: "🛡️",
        title: "Respaldo legal total",
        desc: "Operamos bajo REPROCANN. Tus compras están amparadas por el marco legal vigente.",
      },
      {
        icon: "🎯",
        title: "Experiencia premium",
        desc: "Consultoría personalizada para elegir el producto correcto según tu experiencia.",
      },
    ],
  },
  {
    segmento: "Medicinal",
    color: "#4A5E23",
    textColor: "#ffffff",
    items: [
      {
        icon: "🔬",
        title: "Trazabilidad completa",
        desc: "Cada lote con certificado de análisis. Concentración de CBD/THC verificada en laboratorio.",
      },
      {
        icon: "👩‍⚕️",
        title: "Acompañamiento médico",
        desc: "Red de profesionales especializados en cannabis medicinal disponibles para nuestros asociados.",
      },
      {
        icon: "📋",
        title: "Gestión REPROCANN",
        desc: "Te guiamos en todo el proceso de inscripción al registro para que obtengas tu habilitación sin complicaciones.",
      },
      {
        icon: "💊",
        title: "Formatos terapéuticos",
        desc: "Aceites CBD, tinturas, cápsulas y productos cosméticos con evidencia científica respaldada.",
      },
    ],
  },
];

export default function PropuestaDeValor() {
  return (
    <section
      id="propuesta"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="propuesta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-institutional uppercase text-[#4A5E23] mb-4">
            Qué te ofrecemos
          </p>
          <h2
            id="propuesta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D3935] leading-tight"
          >
            Valor concreto para cada
            <span className="text-[#4A5E23]"> tipo de asociado.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {PROPUESTAS.map((prop) => (
            <div
              key={prop.segmento}
              className="rounded-3xl overflow-hidden"
              style={{ backgroundColor: prop.color }}
            >
              <div className="p-8 lg:p-10">
                <h3
                  className="text-xs font-black tracking-institutional uppercase mb-6"
                  style={{ color: prop.textColor, opacity: 0.6 }}
                >
                  Segmento {prop.segmento}
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  {prop.items.map((item) => (
                    <article key={item.title} className="bg-white/10 rounded-2xl p-5">
                      <span
                        className="text-2xl block mb-3"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                      <h4
                        className="text-sm font-black mb-1"
                        style={{ color: prop.textColor }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-xs font-light leading-relaxed"
                        style={{ color: prop.textColor, opacity: 0.8 }}
                      >
                        {item.desc}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA central */}
        <div className="text-center">
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#4A5E23] text-white font-black text-base tracking-institutional uppercase transition-all duration-200 hover:bg-[#C8D400] hover:text-[#3D3935] hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#4A5E23] focus-visible:ring-offset-2"
          >
            Empezá tu proceso
          </a>
        </div>
      </div>
    </section>
  );
}
