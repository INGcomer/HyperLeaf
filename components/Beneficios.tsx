import Image from "next/image";

const BENEFICIOS = [
  { title: "Productos certificados", desc: "Análisis de laboratorio disponible para cada lote de aceite CBD y derivados." },
  { title: "Acompañamiento médico", desc: "Red de profesionales especializados en cannabis medicinal a tu disposición." },
  { title: "Gestión de tu REPROCANN", desc: "Te ayudamos a tramitarlo, sin costo, si todavía no lo tenés." },
  { title: "Entrega a domicilio", desc: "Servicio discreto y puntual en Mendoza y alrededores." },
  { title: "100% legal y trazable", desc: "Operamos bajo Ley 27.350 y REPROCANN, con total transparencia." },
  { title: "Seguimiento continuo", desc: "Ajustamos tu tratamiento a medida que avanza tu proceso." },
];

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Beneficios() {
  return (
    <section
      id="beneficios"
      className="py-24 lg:py-32 bg-[#4A5E23] relative overflow-hidden leaf-pattern-light"
      aria-labelledby="beneficios-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagen + texto */}
          <div>
            <p className="text-xs font-black tracking-institutional uppercase text-[#C8D400] mb-4">
              Por qué HyperLeaf
            </p>
            <h2
              id="beneficios-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
            >
              Todo lo que recibís
              <span className="text-[#C8D400]"> al sumarte.</span>
            </h2>
            <p className="text-base lg:text-lg font-light text-white/80 leading-relaxed mb-8">
              Ser asociado de HyperLeaf no es solo acceder a productos de
              cannabis medicinal: es tener un equipo de profesionales de tu
              lado y la tranquilidad de que todo es legal, certificado y
              pensado para vos.
            </p>

            <div className="relative h-56 rounded-2xl overflow-hidden mb-8 lg:mb-0">
              <Image
                src="/images/equipo-hyperleaf.jpg"
                alt="Manos del equipo de HyperLeaf unidas en señal de compromiso, trabajando juntas para acompañar a cada asociado"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Grid de beneficios */}
          <div className="grid sm:grid-cols-2 gap-4">
            {BENEFICIOS.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-colors duration-200"
              >
                <span
                  className="w-9 h-9 rounded-lg bg-[#C8D400] text-[#3D3935] flex items-center justify-center flex-shrink-0 [&>svg]:w-5 [&>svg]:h-5"
                  aria-hidden="true"
                >
                  {CHECK}
                </span>
                <div>
                  <h3 className="text-sm font-black text-white mb-1 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-xs font-light text-white/70 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#C8D400] text-[#3D3935] font-black text-base tracking-institutional uppercase transition-all duration-200 hover:bg-white hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4A5E23]"
          >
            Empezá tu proceso
          </a>
        </div>
      </div>
    </section>
  );
}
