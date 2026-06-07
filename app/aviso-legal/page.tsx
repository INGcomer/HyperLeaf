import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Marco legal de HyperLeaf Asociación Civil. Información sobre REPROCANN, Ley 27.350, uso responsable del cannabis y política de privacidad.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://hyperleaf.com.ar/aviso-legal" },
};

export default function AvisoLegal() {
  return (
    <>
      {/* Encabezado */}
      <header className="bg-[#4A5E23] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8D400] hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
          <p className="text-xs font-black tracking-institutional uppercase text-[#C8D400] mb-4">
            Marco normativo
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Aviso legal y uso responsable
          </h1>
          <p className="mt-4 text-base font-light text-white/70">
            Última actualización: junio de 2025
          </p>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="prose prose-lg max-w-none">

          {/* Nav interna */}
          <nav aria-label="Índice del aviso legal" className="not-prose bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-100">
            <h2 className="text-xs font-black tracking-institutional uppercase text-[#4A5E23] mb-4">
              Contenido
            </h2>
            <ol className="space-y-2">
              {[
                ["#naturaleza", "1. Naturaleza de la organización"],
                ["#reprocann", "2. REPROCANN — Registro del Programa de Cannabis"],
                ["#ley27350", "3. Ley 27.350 — Marco legal vigente"],
                ["#uso-responsable", "4. Uso responsable"],
                ["#privacidad", "5. Política de privacidad"],
                ["#exencion", "6. Exención de responsabilidad"],
                ["#contacto-legal", "7. Contacto"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-sm font-semibold text-[#4A5E23] hover:text-[#C8D400] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section id="naturaleza" className="mb-12">
            <h2 className="text-2xl font-black text-[#3D3935] mb-4">
              1. Naturaleza de la organización
            </h2>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
              <strong className="font-semibold">HyperLeaf</strong> es una
              asociación civil sin fines de lucro constituida bajo la legislación
              argentina, con domicilio en Chacras de Coria, Departamento de Luján
              de Cuyo, Provincia de Mendoza, República Argentina.
            </p>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
              Como asociación civil, HyperLeaf no persigue fines comerciales. Su
              objeto social es la promoción del acceso legal, seguro e informado al
              cannabis para sus asociados, dentro del marco normativo establecido
              por la legislación nacional y provincial vigente.
            </p>
            <p className="text-base font-light text-gray-700 leading-relaxed">
              La membresía está restringida exclusivamente a personas mayores de{" "}
              <strong className="font-semibold">18 años de edad</strong>. HyperLeaf
              se reserva el derecho de verificar la mayoría de edad de cualquier
              solicitante de membresía.
            </p>
          </section>

          <section id="reprocann" className="mb-12">
            <h2 className="text-2xl font-black text-[#3D3935] mb-4">
              2. REPROCANN — Registro del Programa de Cannabis
            </h2>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
              El <strong className="font-semibold">REPROCANN</strong> (Registro del
              Programa de Cannabis) es el registro habilitante creado por el
              Ministerio de Salud de la Nación Argentina que permite a pacientes,
              médicos, cuidadores y asociaciones civiles operar legalmente dentro
              del sistema cannábico regulado.
            </p>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
              HyperLeaf opera en plena conformidad con los requisitos establecidos
              por REPROCANN, incluyendo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base font-light text-gray-700 mb-4 pl-4">
              <li>Registro institucional como asociación civil cannábica.</li>
              <li>Trazabilidad completa de todos los productos ofrecidos a los asociados.</li>
              <li>Respeto de los límites de tenencia y distribución establecidos por la normativa.</li>
              <li>Asistencia a asociados en la tramitación de su inscripción personal en REPROCANN.</li>
            </ul>
            <p className="text-base font-light text-gray-700 leading-relaxed">
              Para más información sobre REPROCANN, puede consultar el sitio oficial
              del Ministerio de Salud de la Nación:{" "}
              <a
                href="https://www.argentina.gob.ar/salud/reprocann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A5E23] font-semibold hover:underline"
              >
                argentina.gob.ar/salud/reprocann
              </a>
              .
            </p>
          </section>

          <section id="ley27350" className="mb-12">
            <h2 className="text-2xl font-black text-[#3D3935] mb-4">
              3. Ley 27.350 — Marco legal vigente
            </h2>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
              La <strong className="font-semibold">Ley 27.350</strong>, promulgada el
              29 de marzo de 2017 y publicada en el Boletín Oficial de la
              República Argentina, establece el marco legal para la investigación
              médica y científica del uso medicinal, terapéutico y/o paliativo del
              dolor del cannabis y sus derivados.
            </p>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
              Su reglamentación (Decreto 883/2020) y las posteriores modificaciones
              amplían el alcance de la ley, habilitando a asociaciones civiles a
              proveer cannabis y sus derivados a sus asociados bajo condiciones
              específicas de registro y control.
            </p>
            <p className="text-base font-light text-gray-700 leading-relaxed">
              Toda la actividad de HyperLeaf se desarrolla dentro del marco
              establecido por esta legislación y sus normas complementarias, incluyendo
              las disposiciones de la ANMAT, el Ministerio de Salud de la Nación y
              las autoridades sanitarias de la Provincia de Mendoza.
            </p>
          </section>

          <section id="uso-responsable" className="mb-12">
            <h2 className="text-2xl font-black text-[#3D3935] mb-4">
              4. Uso responsable
            </h2>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
              HyperLeaf promueve activamente el uso responsable, informado y
              consciente del cannabis. En ese sentido:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base font-light text-gray-700 mb-4 pl-4">
              <li>
                <strong className="font-semibold">No se permite el consumo</strong>{" "}
                en espacios públicos ni en presencia de menores de edad.
              </li>
              <li>
                <strong className="font-semibold">No se recomienda</strong> el
                consumo de cannabis durante el embarazo, la lactancia ni a personas
                con antecedentes de psicosis o trastornos afectivos severos.
              </li>
              <li>
                <strong className="font-semibold">No se debe conducir</strong>{" "}
                vehículos ni operar maquinaria bajo los efectos del cannabis.
              </li>
              <li>
                El cannabis puede generar{" "}
                <strong className="font-semibold">dependencia psicológica</strong>.
                Si sentís que tu consumo se está volviendo problemático, buscá
                ayuda profesional.
              </li>
            </ul>
            <p className="text-base font-light text-gray-700 leading-relaxed">
              Para consultas sobre uso responsable o si necesitás ayuda, podés
              contactar al{" "}
              <strong className="font-semibold">
                Centro de Asistencia al Jugador y al Consumidor (CPA)
              </strong>{" "}
              de Mendoza o al{" "}
              <strong className="font-semibold">
                Centro de Orientación y Apoyo (COA)
              </strong>{" "}
              del Ministerio de Salud provincial.
            </p>
          </section>

          <section id="privacidad" className="mb-12">
            <h2 className="text-2xl font-black text-[#3D3935] mb-4">
              5. Política de privacidad
            </h2>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
              HyperLeaf recopila y trata los datos personales de sus asociados y
              visitantes en conformidad con la{" "}
              <strong className="font-semibold">Ley 25.326</strong> de Protección
              de Datos Personales de la República Argentina.
            </p>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
              Los datos recopilados a través del formulario de contacto de este
              sitio web (nombre, email, teléfono y mensaje) se utilizan
              exclusivamente para responder consultas y gestionar solicitudes de
              membresía. No se comparten con terceros sin consentimiento expreso
              del titular, salvo obligación legal.
            </p>
            <p className="text-base font-light text-gray-700 leading-relaxed">
              Toda persona tiene derecho a acceder, rectificar, actualizar y suprimir
              sus datos personales. Para ejercer estos derechos, podés contactarnos
              en{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#4A5E23] font-semibold hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section id="exencion" className="mb-12">
            <h2 className="text-2xl font-black text-[#3D3935] mb-4">
              6. Exención de responsabilidad
            </h2>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
              La información contenida en este sitio web tiene carácter informativo
              y no constituye asesoramiento médico, legal ni financiero. HyperLeaf
              no se hace responsable por el uso que los visitantes hagan de esta
              información fuera del marco legal vigente.
            </p>
            <p className="text-base font-light text-gray-700 leading-relaxed">
              El acceso a los productos y servicios de HyperLeaf está condicionado
              al cumplimiento de los requisitos legales vigentes, incluyendo la
              mayoría de edad y la inscripción correspondiente en REPROCANN donde
              sea aplicable.
            </p>
          </section>

          <section id="contacto-legal" className="mb-12">
            <h2 className="text-2xl font-black text-[#3D3935] mb-4">
              7. Contacto
            </h2>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
              Para cualquier consulta relacionada con este aviso legal, podés
              contactarnos:
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-sm font-semibold text-[#3D3935] mb-1">HyperLeaf Asociación Civil</p>
              <p className="text-sm font-light text-gray-600">Chacras de Coria, Luján de Cuyo, Mendoza, Argentina</p>
              <p className="text-sm font-light text-gray-600">
                Email:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#4A5E23] font-semibold hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="text-sm font-light text-gray-600">
                WhatsApp:{" "}
                <a
                  href={whatsappUrl("Hola HyperLeaf, tengo una consulta sobre el aviso legal.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A5E23] font-semibold hover:underline"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Volver */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4A5E23] text-white font-bold text-sm tracking-institutional uppercase transition-all duration-200 hover:bg-[#C8D400] hover:text-[#3D3935] hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </main>
    </>
  );
}
