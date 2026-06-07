import Image from "next/image";

const PRODUCTOS = [
  {
    tag: "Más solicitado",
    title: "Aceites CBD/THC",
    desc: "Formulaciones en distintas proporciones (1:1, 2:1, 3:1, full spectrum). Dosificación precisa y acción gradual — indicados para ansiedad, dolor crónico e insomnio.",
    img: "/images/aceite-cbd-thc.jpg",
    alt: "Frasco de aceite premium de cannabis CBD sostenido en mano, con hojas verdes de fondo — producción propia de HyperLeaf",
  },
  {
    tag: "Producción propia",
    title: "Flores medicinales",
    desc: "Variedades cultivadas y seleccionadas por su perfil de cannabinoides, con trazabilidad completa desde la siembra hasta la entrega al asociado.",
    img: "/images/flores-medicinales.jpg",
    alt: "Cogollo de cannabis medicinal en primer plano, cubierto de tricomas — cultivo propio de HyperLeaf",
  },
  {
    tag: "Concentración alta",
    title: "Extractos y concentrados",
    desc: "Para los casos que requieren mayor concentración de cannabinoides activos, siempre bajo indicación y seguimiento de nuestro equipo médico.",
    img: "/images/extractos-concentrados.jpg",
    alt: "Cápsulas de aceite concentrado y crema de cannabis en sus envases, presentación profesional de HyperLeaf",
  },
];

export default function Productos() {
  return (
    <section
      id="productos"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="productos-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-institutional uppercase text-[#4A5E23] mb-4">
            Nuestros productos
          </p>
          <h2
            id="productos-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D3935] leading-tight mb-4"
          >
            Calidad certificada
            <span className="text-[#4A5E23]"> en cada lote.</span>
          </h2>
          <p className="text-base font-light text-gray-600 max-w-2xl mx-auto">
            Toda nuestra producción de aceite CBD y derivados de cannabis
            medicinal es propia y cuenta con análisis de laboratorio
            disponible. El producto adecuado para cada persona se define junto
            a nuestro equipo médico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTOS.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-black tracking-institutional uppercase text-[#4A5E23] bg-[#A8C66C]/30 px-3 py-1 rounded-full mb-3">
                  {p.tag}
                </span>
                <h3 className="text-base font-black text-[#3D3935] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm font-light text-gray-600 leading-relaxed mb-4">
                  {p.desc}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4A5E23] hover:gap-2.5 hover:text-[#C8D400] transition-all duration-200"
                >
                  Consultá sobre este producto
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-light text-gray-400 max-w-2xl mx-auto">
          La información de este sitio tiene fines educativos e informativos.
          Consultá con nuestro equipo médico para definir el producto y la
          dosis adecuados para tu caso — no te automediques.
        </p>
      </div>
    </section>
  );
}
