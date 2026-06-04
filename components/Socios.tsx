const SOCIOS = [
  {
    nombre: "Bufete Jurídico Especializado",
    descripcion: "Asesoramiento legal en derecho cannábico y habilitaciones REPROCANN.",
    icono: "⚖️",
    tipo: "Legal",
  },
  {
    nombre: "Laboratorio Fitoquímico",
    descripcion: "Análisis de potencia, terpenos y certificación de lotes. Control de calidad independiente.",
    icono: "🔬",
    tipo: "Calidad",
  },
  {
    nombre: "Red de Profesionales de Salud",
    descripcion: "Médicos, farmacéuticos y nutricionistas especializados en cannabinoides.",
    icono: "🩺",
    tipo: "Salud",
  },
  {
    nombre: "Cultivadores Certificados",
    descripcion: "Red de productores mendocinos con buenas prácticas agrícolas y trazabilidad total.",
    icono: "🌾",
    tipo: "Producción",
  },
  {
    nombre: "Cámara Cannábica Argentina",
    descripcion: "Articulación gremial para el desarrollo de políticas públicas favorables al sector.",
    icono: "🏛️",
    tipo: "Institucional",
  },
  {
    nombre: "Plataforma Tecnológica",
    descripcion: "Gestión digital de membresías, pedidos y compliance regulatorio.",
    icono: "💻",
    tipo: "Tecnología",
  },
];

export default function Socios() {
  return (
    <section
      id="socios"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="socios-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-institutional uppercase text-[#4A5E23] mb-4">
            Ecosistema de valor
          </p>
          <h2
            id="socios-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D3935] leading-tight"
          >
            Asociaciones estratégicas
            <span className="text-[#4A5E23]"> que nos respaldan.</span>
          </h2>
          <p className="mt-4 text-base font-light text-gray-600 max-w-xl mx-auto">
            HyperLeaf opera dentro de un ecosistema de socios especializados
            que garantizan calidad, legalidad y excelencia en cada punto de la
            cadena de valor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIOS.map((socio) => (
            <article
              key={socio.nombre}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#A8C66C] hover:shadow-sm transition-all duration-200 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#4A5E23]/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#4A5E23]/20 transition-colors">
                  <span aria-hidden="true">{socio.icono}</span>
                </div>
                <div>
                  <span className="text-xs font-black tracking-institutional uppercase text-[#C8D400] bg-[#4A5E23] px-2 py-0.5 rounded-full inline-block mb-2">
                    {socio.tipo}
                  </span>
                  <h3 className="text-sm font-black text-[#3D3935] mb-2 leading-snug">
                    {socio.nombre}
                  </h3>
                  <p className="text-xs font-light text-gray-600 leading-relaxed">
                    {socio.descripcion}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Nota */}
        <p className="mt-10 text-center text-xs font-light text-gray-400">
          Las asociaciones estratégicas se encuentran en proceso de formalización.
          Todos los socios operan bajo acuerdos de confidencialidad y compliance regulatorio.
        </p>
      </div>
    </section>
  );
}
