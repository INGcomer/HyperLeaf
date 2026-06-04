import Image from "next/image";

const SEGMENTOS = [
  {
    id: "recreativo",
    avatar: "Agustín",
    edad: "28 años · Profesional joven",
    descripcion:
      "Agustín trabaja en tecnología, vive en Godoy Cruz y consume cannabis de manera recreativa los fines de semana. Busca calidad garantizada, discreción y un acceso legal que le dé tranquilidad.",
    imagen:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80",
    altImagen: "Joven profesional urbano en Mendoza — segmento recreativo",
    badge: "Recreativo",
    badgeColor: "bg-[#C8D400] text-[#3D3935]",
    accentColor: "#C8D400",
    beneficios: [
      "Variedad de cepas seleccionadas",
      "Precio justo y transparente",
      "Sin riesgo legal: todo bajo REPROCANN",
      "Comunidad de pares confiable",
    ],
  },
  {
    id: "medicinal",
    avatar: "Florencia",
    edad: "45 años · Paciente crónica",
    descripcion:
      "Florencia tiene lupus y usa aceite de CBD bajo indicación médica. Necesita certeza sobre el origen del producto, acompañamiento profesional y acceso a un registro REPROCANN sin burocracia.",
    imagen:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    altImagen: "Mujer adulta en entorno de bienestar — segmento medicinal",
    badge: "Medicinal",
    badgeColor: "bg-[#4A5E23] text-white",
    accentColor: "#4A5E23",
    beneficios: [
      "Aceite CBD trazable y certificado",
      "Asesoramiento médico especializado",
      "Gestión de trámite REPROCANN",
      "Seguimiento y acompañamiento continuo",
    ],
  },
];

export default function Segmentos() {
  return (
    <section
      id="segmentos"
      className="py-24 lg:py-32 bg-gray-50"
      aria-labelledby="segmentos-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-institutional uppercase text-[#4A5E23] mb-4">
            Para quién es HyperLeaf
          </p>
          <h2
            id="segmentos-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D3935] leading-tight"
          >
            Dos segmentos, una sola misión:
            <br />
            <span className="text-[#4A5E23]">acceso legal para todos.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SEGMENTOS.map((seg) => (
            <article
              key={seg.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={seg.imagen}
                  alt={seg.altImagen}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-black tracking-institutional uppercase ${seg.badgeColor}`}
                >
                  {seg.badge}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
                    style={{ backgroundColor: seg.accentColor }}
                    aria-hidden="true"
                  >
                    {seg.avatar[0]}
                  </div>
                  <div>
                    <p className="text-base font-black text-[#3D3935]">
                      {seg.avatar}
                    </p>
                    <p className="text-xs font-light text-gray-500">
                      {seg.edad}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-light text-gray-600 leading-relaxed mb-6">
                  {seg.descripcion}
                </p>

                <ul className="space-y-2 mb-8">
                  {seg.beneficios.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm font-semibold text-[#3D3935]"
                    >
                      <span
                        className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px]"
                        style={{ backgroundColor: seg.accentColor }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full font-black text-sm tracking-institutional uppercase transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    backgroundColor: seg.accentColor,
                    color: seg.id === "recreativo" ? "#3D3935" : "#ffffff",
                  }}
                >
                  Asociate ahora
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
