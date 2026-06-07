"use client";

// Acordeón de preguntas frecuentes — un solo ítem abierto a la vez.
// useState guarda el índice abierto; null = todo cerrado.
// Cada pregunta usa aria-expanded / aria-controls para que lectores de pantalla
// anuncien el estado, y el contenido colapsado queda oculto del DOM accesible.

import { useState, useId } from "react";

const PREGUNTAS = [
  {
    q: "¿Es legal asociarme a HyperLeaf en Argentina?",
    a: "Sí. HyperLeaf opera bajo la Ley 27.350 de uso medicinal del cannabis y el programa REPROCANN del Ministerio de Salud de la Nación. Todo el proceso de acceso es legal, documentado y trazable de principio a fin.",
  },
  {
    q: "¿Necesito tener REPROCANN para asociarme?",
    a: "No es obligatorio para empezar. Si todavía no lo tenés, te acompañamos en el trámite: es gratuito, se hace ante el Ministerio de Salud de la Nación y habilita el acceso al cannabis medicinal de forma oficial.",
  },
  {
    q: "¿Qué diferencia hay entre el CBD y el THC?",
    a: "El CBD (cannabidiol) es el compuesto no psicoactivo del cannabis, asociado a efectos antiinflamatorios, ansiolíticos y analgésicos. El THC (tetrahidrocannabinol) tiene efecto psicoactivo en dosis altas, pero en dosis terapéuticas bajas también cumple un rol importante en el tratamiento del dolor y el sueño. La proporción adecuada para cada persona se define junto a nuestro equipo médico.",
  },
  {
    q: "¿Cómo sé qué producto necesito?",
    a: "No recomendamos la automedicación. El primer paso siempre es una consulta con uno de nuestros profesionales especializados en cannabis medicinal, que evalúan tu situación, tu historial y tus tratamientos actuales antes de sugerirte una formulación y una dosis.",
  },
  {
    q: "¿Puedo recibir los productos en mi domicilio?",
    a: "Sí. Ofrecemos entrega a domicilio para asociados dentro del área de cobertura de Mendoza, de forma discreta y coordinada con tu ciclo mensual. También podés retirar en nuestra sede de Chacras de Coria.",
  },
  {
    q: "¿Cuánto tarda en hacer efecto el aceite?",
    a: "El aceite sublingual (debajo de la lengua) suele mostrar efectos entre 15 y 45 minutos. Los resultados más sostenidos en general se observan después de 2 a 4 semanas de uso regular — por eso el seguimiento médico es tan importante en los primeros meses.",
  },
];

export default function FAQ() {
  // Empieza con la primera pregunta abierta, igual que en el prototipo de referencia
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section
      id="faq"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-black tracking-institutional uppercase text-[#4A5E23] mb-4">
            Preguntas frecuentes
          </p>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D3935] leading-tight"
          >
            Resolvemos
            <span className="text-[#4A5E23]"> tus dudas.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {PREGUNTAS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border overflow-hidden transition-colors duration-200 ${
                  isOpen ? "border-[#4A5E23] bg-gray-50" : "border-gray-100 bg-white"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 text-sm sm:text-base font-black text-[#3D3935] hover:text-[#4A5E23] transition-colors"
                  >
                    {item.q}
                    <svg
                      className={`w-5 h-5 flex-shrink-0 text-[#4A5E23] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-6 pb-5"
                >
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm font-light text-gray-500">
          ¿No encontraste tu respuesta?{" "}
          <a
            href="#contacto"
            className="font-bold text-[#4A5E23] hover:text-[#C8D400] transition-colors"
          >
            Escribinos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
