const CANALES = [
  {
    num: "01",
    title: "Solicitud online",
    desc: "Completás el formulario de adhesión en nuestra web. En menos de 48 horas recibís una respuesta.",
    icon: "💻",
  },
  {
    num: "02",
    title: "Validación de identidad",
    desc: "Verificamos tu mayor de edad y te asesoramos sobre los requisitos del segmento que elegiste.",
    icon: "✅",
  },
  {
    num: "03",
    title: "Alta en REPROCANN",
    desc: "Para el segmento medicinal, te asistimos en la inscripción al registro nacional de manera gratuita.",
    icon: "📋",
  },
  {
    num: "04",
    title: "Acceso a productos",
    desc: "Una vez dado de alta, accedés a nuestro catálogo a través de nuestro punto de entrega en Chacras de Coria.",
    icon: "🌿",
  },
];

export default function Canales() {
  return (
    <section
      id="canales"
      className="py-24 lg:py-32 bg-gray-50"
      aria-labelledby="canales-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-black tracking-institutional uppercase text-[#4A5E23] mb-4">
              Cómo llegamos a vos
            </p>
            <h2
              id="canales-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D3935] leading-tight mb-6"
            >
              Asociarse es simple,
              <span className="text-[#4A5E23]"> rápido y legal.</span>
            </h2>
            <p className="text-base lg:text-lg font-light text-gray-600 leading-relaxed">
              Diseñamos un proceso sin fricciones para que en pocos pasos puedas
              disfrutar de los beneficios de ser parte de HyperLeaf. Sin
              burocracia innecesaria, con toda la certeza jurídica que merecés.
            </p>
          </div>

          {/* Steps */}
          <ol className="space-y-6" aria-label="Pasos para asociarse">
            {CANALES.map((canal, i) => (
              <li key={canal.num} className="flex gap-5">
                {/* Número + línea conectora */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#4A5E23] text-white flex items-center justify-center text-xs font-black flex-shrink-0">
                    {canal.num}
                  </div>
                  {i < CANALES.length - 1 && (
                    <div className="w-px flex-1 bg-[#A8C66C] mt-2" aria-hidden="true" />
                  )}
                </div>

                <div className="pb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl" aria-hidden="true">
                      {canal.icon}
                    </span>
                    <h3 className="text-base font-black text-[#3D3935]">
                      {canal.title}
                    </h3>
                  </div>
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {canal.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
