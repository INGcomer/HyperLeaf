const PASOS = [
  {
    num: "01",
    title: "Consultá con nosotros",
    desc: "Hablás con un especialista de nuestro equipo, sin compromiso. Te explicamos todo en lenguaje simple y resolvemos tus dudas.",
    icon: "💬",
  },
  {
    num: "02",
    title: "Registrate como asociado",
    desc: "Te guiamos en el proceso de inscripción a REPROCANN. Nosotros nos ocupamos de la parte burocrática para que vos te enfoques en tu salud.",
    icon: "📋",
  },
  {
    num: "03",
    title: "Accedé a tu tratamiento",
    desc: "Productos de calidad certificada con seguimiento médico continuo. Retiro en sede de Chacras de Coria o entrega en tu domicilio.",
    icon: "🌿",
  },
];

export default function Proceso() {
  return (
    <section
      id="proceso"
      className="py-24 lg:py-32 bg-gray-50"
      aria-labelledby="proceso-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-institutional uppercase text-[#4A5E23] mb-4">
            Cómo funciona
          </p>
          <h2
            id="proceso-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D3935] leading-tight mb-4"
          >
            Asociarte es más simple
            <span className="text-[#4A5E23]"> de lo que pensás.</span>
          </h2>
          <p className="text-base font-light text-gray-600 max-w-2xl mx-auto">
            En poco tiempo podés empezar a acceder a tu tratamiento de cannabis
            medicinal. Te acompañamos en cada paso, sin trámites innecesarios.
          </p>
        </div>

        {/* Steps */}
        <ol className="grid md:grid-cols-3 gap-8" aria-label="Pasos para asociarse a HyperLeaf">
          {PASOS.map((paso, i) => (
            <li key={paso.num} className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full hover:shadow-md hover:border-[#A8C66C] transition-all duration-200">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#4A5E23] text-white flex items-center justify-center text-sm font-black flex-shrink-0">
                    {paso.num}
                  </div>
                  <span className="text-3xl" aria-hidden="true">
                    {paso.icon}
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#3D3935] mb-2">
                  {paso.title}
                </h3>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  {paso.desc}
                </p>
              </div>
              {/* Conector entre pasos (desktop) */}
              {i < PASOS.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-[#A8C66C]"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#4A5E23] text-white font-black text-sm tracking-institutional uppercase transition-all duration-200 hover:bg-[#C8D400] hover:text-[#3D3935] hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#4A5E23] focus-visible:ring-offset-2"
          >
            Empezá tu proceso hoy
          </a>
        </div>
      </div>
    </section>
  );
}
