// Barra de confianza: franja oscura con 4 señales clave que generan
// credibilidad inmediata (legalidad, acompañamiento médico, calidad, producción).
const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Marco legal 100%",
    sub: "Ley 27.350 · REPROCANN",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "Acompañamiento médico",
    sub: "Especialistas en cannabis medicinal",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    label: "Calidad certificada",
    sub: "Análisis de laboratorio por lote",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    label: "Producción propia",
    sub: "Mendoza · trazabilidad total",
  },
];

export default function Confianza() {
  return (
    <section
      className="bg-[#3D3935] py-10"
      aria-label="Por qué confiar en HyperLeaf"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ITEMS.map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <span
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#A8C66C] [&>svg]:w-5 [&>svg]:h-5"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <div>
                <p className="text-sm font-black text-white leading-snug">
                  {item.label}
                </p>
                <p className="text-xs font-light text-white/50 leading-snug">
                  {item.sub}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
