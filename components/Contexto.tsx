const DATOS = [
  {
    valor: "+150.000",
    label: "consumidores activos en Mendoza",
    fuente: "estimación de mercado 2024",
  },
  {
    valor: ">12%",
    label: "de adultos mendocinos consumen cannabis",
    fuente: "datos provinciales 2023",
  },
  {
    valor: "Ley 27.350",
    label: "regula el uso medicinal y científico",
    fuente: "B.O. Argentina, 2017",
  },
  {
    valor: "REPROCANN",
    label: "registro habilitante para asociaciones civiles",
    fuente: "ANMAT / Ministerio de Salud",
  },
];

export default function Contexto() {
  return (
    <section
      id="contexto"
      className="py-24 lg:py-32 bg-[#4A5E23] relative overflow-hidden leaf-pattern-light"
      aria-labelledby="contexto-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-black tracking-institutional uppercase text-[#C8D400] mb-4">
          El momento es ahora
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <h2
              id="contexto-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
            >
              Mendoza lidera el
              <span className="text-[#C8D400]"> mercado cannábico</span> del
              interior argentino.
            </h2>
            <p className="text-base lg:text-lg font-light text-white/80 leading-relaxed mb-6">
              Con más de 150.000 consumidores activos y una penetración superior
              al 12% entre adultos, Mendoza es la provincia del interior con
              mayor demanda cannábica per cápita de Argentina. Sin embargo, la
              oferta legal organizada es aún incipiente.
            </p>
            <p className="text-base lg:text-lg font-light text-white/80 leading-relaxed mb-8">
              El marco legal vigente —<strong className="text-white font-semibold">Ley 27.350</strong> y el registro{" "}
              <strong className="text-white font-semibold">REPROCANN</strong>—
              habilita a asociaciones civiles como HyperLeaf a operar con plena
              certeza jurídica, cubriendo una demanda insatisfecha tanto en el
              segmento{" "}
              <strong className="text-white font-semibold">medicinal</strong>{" "}
              como en el{" "}
              <strong className="text-white font-semibold">recreativo</strong>.
            </p>

            <a
              href="#contacto"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#C8D400] text-[#3D3935] font-black text-sm tracking-institutional uppercase transition-all duration-200 hover:bg-white hover:scale-105"
            >
              Empezá tu proceso
            </a>
          </div>

          {/* Datos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DATOS.map((d) => (
              <div
                key={d.valor}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <p className="text-3xl lg:text-4xl font-black text-[#C8D400] leading-none mb-2">
                  {d.valor}
                </p>
                <p className="text-sm font-semibold text-white leading-snug mb-2">
                  {d.label}
                </p>
                <p className="text-xs font-light text-white/50 uppercase tracking-institutional">
                  {d.fuente}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
