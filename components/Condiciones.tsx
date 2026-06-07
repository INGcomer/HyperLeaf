// Sección "Condiciones" — ayuda a la persona visitante a identificarse
// ("¿esto es para mí?") y refuerza las keywords de uso medicinal de forma natural.
const CONDICIONES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Ansiedad y estrés crónico",
    desc: "El CBD puede contribuir a regular la respuesta al estrés y reducir los síntomas de ansiedad de forma natural.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Insomnio y trastornos del sueño",
    desc: "Asociados reportan mejoras en la calidad del sueño con formulaciones específicas de cannabis medicinal.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      </svg>
    ),
    title: "Dolor crónico y artritis",
    desc: "El uso terapéutico del cannabis es reconocido para el abordaje del dolor crónico y los procesos inflamatorios.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Depresión y estado de ánimo",
    desc: "Como parte de un plan de tratamiento integral, puede contribuir a mejorar el ánimo y el bienestar general.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Migrañas crónicas",
    desc: "Determinadas formulaciones pueden ayudar a reducir la frecuencia y la intensidad de los episodios de migraña.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    title: "Otras condiciones",
    desc: "Consultanos: nuestro equipo médico evalúa cada caso de forma personalizada y te orienta sobre las opciones disponibles.",
    dashed: true,
  },
];

export default function Condiciones() {
  return (
    <section
      id="condiciones"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="condiciones-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-institutional uppercase text-[#4A5E23] mb-4">
            Para quién es HyperLeaf
          </p>
          <h2
            id="condiciones-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D3935] leading-tight mb-4"
          >
            ¿Qué condición
            <span className="text-[#4A5E23]"> querés tratar?</span>
          </h2>
          <p className="text-base font-light text-gray-600 max-w-2xl mx-auto">
            Nuestro equipo médico y nuestros productos de cannabis medicinal
            están preparados para acompañarte en el abordaje de estas y otras
            condiciones, siempre con seguimiento profesional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONDICIONES.map((c) => (
            <article
              key={c.title}
              className={`rounded-2xl p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                c.dashed
                  ? "border-2 border-dashed border-[#A8C66C] bg-white"
                  : "border border-gray-100 bg-gray-50 hover:border-[#A8C66C]"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 [&>svg]:w-6 [&>svg]:h-6 ${
                  c.dashed
                    ? "bg-[#A8C66C]/30 text-[#4A5E23]"
                    : "bg-[#4A5E23]/10 text-[#4A5E23]"
                }`}
                aria-hidden="true"
              >
                {c.icon}
              </div>
              <h3 className="text-base font-black text-[#3D3935] mb-2">
                {c.title}
              </h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                {c.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
