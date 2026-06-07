const TESTIMONIOS = [
  {
    iniciales: "MG",
    nombre: "María G.",
    contexto: "47 años · Ansiedad crónica",
    texto:
      "Llevaba dos años con ansiolíticos sin sentir una mejora real. Desde que empecé con el aceite de HyperLeaf duermo mejor y bajé mucho mi ansiedad. Todavía no lo puedo creer.",
  },
  {
    iniciales: "RC",
    nombre: "Roberto C.",
    contexto: "61 años · Dolor crónico",
    texto:
      "Lo que más valoro es que te explican todo. No tenía idea de qué era REPROCANN y en una semana ya estaba registrado. El equipo médico me ayudó a encontrar la dosis exacta para mis dolores.",
  },
  {
    iniciales: "LP",
    nombre: "Laura P.",
    contexto: "38 años · Buscó tratamiento para un familiar con artritis",
    texto:
      "Empecé a buscar para mi mamá, que tiene artritis. La calidad del aceite es completamente distinta a lo que se consigue en otros lados. Y saber que es legal y certificado me da una tranquilidad enorme.",
  },
];

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="py-24 lg:py-32 bg-gray-50"
      aria-labelledby="testimonios-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-institutional uppercase text-[#4A5E23] mb-4">
            Testimonios
          </p>
          <h2
            id="testimonios-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D3935] leading-tight"
          >
            Lo que dicen
            <span className="text-[#4A5E23]"> nuestros asociados.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIOS.map((t) => (
            <figure
              key={t.nombre}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Estrellas */}
              <div
                className="text-[#C8D400] text-base mb-4 tracking-wider"
                aria-label="Calificación: 5 de 5 estrellas"
              >
                ★★★★★
              </div>

              <blockquote className="flex-1">
                <p className="text-sm font-light italic text-gray-600 leading-relaxed mb-6">
                  &ldquo;{t.texto}&rdquo;
                </p>
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full bg-[#A8C66C]/40 text-[#4A5E23] flex items-center justify-center text-xs font-black flex-shrink-0"
                  aria-hidden="true"
                >
                  {t.iniciales}
                </div>
                <div>
                  <p className="text-sm font-black text-[#3D3935]">{t.nombre}</p>
                  <p className="text-xs font-light text-gray-400">{t.contexto}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs font-light text-gray-400">
          Testimonios de asociados reales. Los resultados pueden variar de
          persona a persona — siempre bajo seguimiento médico profesional.
        </p>
      </div>
    </section>
  );
}
