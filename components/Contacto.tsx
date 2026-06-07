"use client";

// Formulario de contacto integrado con SheetMonkey
// Endpoint: https://api.sheetmonkey.io/form/vrRw6me6725adpaQZE2SNv
// Estados visuales: idle (activo) → sending (spinner) → success | error
//
// Campos alineados al proceso real de adhesión: además de los datos de
// contacto, relevamos si la persona ya tiene REPROCANN, para quién busca
// el tratamiento, qué condición quiere tratar y cómo nos conoció — así el
// equipo llega a la primera consulta con contexto útil.

import { useState, useId } from "react";
import { whatsappUrl, CONTACT_EMAIL, WHATSAPP_DISPLAY } from "@/lib/site-config";

type FormState = "idle" | "sending" | "success" | "error";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  reprocann: string;
  paraQuien: string;
  condicion: string;
  comoConocio: string;
  aceptaTerminos: boolean;
}

const OPCIONES_REPROCANN = [
  { value: "", label: "Seleccioná una opción" },
  { value: "Sí, lo tengo", label: "Sí, lo tengo" },
  { value: "No todavía", label: "No todavía" },
  { value: "Estoy en proceso", label: "Estoy en proceso" },
];

const OPCIONES_PARA_QUIEN = [
  { value: "", label: "Seleccioná una opción" },
  { value: "Para mí", label: "Para mí" },
  { value: "Para un familiar", label: "Para un familiar" },
];

const OPCIONES_COMO_CONOCIO = [
  { value: "", label: "Seleccioná una opción" },
  { value: "Google / Búsqueda web", label: "Google / Búsqueda web" },
  { value: "Instagram", label: "Instagram" },
  { value: "Recomendación de un amigo o familiar", label: "Recomendación de un amigo o familiar" },
  { value: "Médico o profesional de la salud", label: "Médico o profesional de la salud" },
  { value: "Otro", label: "Otro" },
];

const INITIAL: FormData = {
  nombre: "",
  email: "",
  telefono: "",
  reprocann: "",
  paraQuien: "",
  condicion: "",
  comoConocio: "",
  aceptaTerminos: false,
};

export default function Contacto() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  // IDs únicos para asociar labels ↔ inputs de forma accesible
  const idNombre = useId();
  const idEmail = useId();
  const idTelefono = useId();
  const idReprocann = useId();
  const idParaQuien = useId();
  const idCondicion = useId();
  const idComoConocio = useId();
  const idTerminos = useId();

  function validate(): boolean {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.nombre.trim()) next.nombre = "Tu nombre y apellido son requeridos.";
    if (!form.email.trim()) {
      next.email = "El email es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Ingresá un email válido.";
    }
    if (!form.telefono.trim()) next.telefono = "Dejanos un teléfono o WhatsApp de contacto.";
    if (!form.aceptaTerminos)
      next.aceptaTerminos = "Necesitamos que aceptes los términos para continuar.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setState("sending");

    try {
      const res = await fetch(
        "https://api.sheetmonkey.io/form/vrRw6me6725adpaQZE2SNv",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            "Nombre y apellido": form.nombre,
            Email: form.email,
            "Teléfono / WhatsApp": form.telefono,
            "¿Tiene REPROCANN?": form.reprocann || "No especifica",
            "¿Para quién busca el tratamiento?": form.paraQuien || "No especifica",
            "Condición o síntoma": form.condicion || "—",
            "Cómo conoció HyperLeaf": form.comoConocio || "No especifica",
          }),
        }
      );

      if (!res.ok) throw new Error("Error al enviar");
      setState("success");
      setForm(INITIAL);
    } catch {
      setState("error");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setForm((prev) => ({ ...prev, [name]: fieldValue }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm font-light text-[#3D3935] placeholder-gray-400 transition-colors duration-200 focus:outline-none focus:border-[#4A5E23] focus:ring-1 focus:ring-[#4A5E23]";
  const inputError = "border-red-400 focus:border-red-400 focus:ring-red-400";
  const inputOk = "border-gray-200 hover:border-[#A8C66C]";

  return (
    <section
      id="contacto"
      className="py-24 lg:py-32 bg-gray-50"
      aria-labelledby="contacto-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info lateral */}
          <div>
            <p className="text-xs font-black tracking-institutional uppercase text-[#4A5E23] mb-4">
              Quiero asociarme
            </p>
            <h2
              id="contacto-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D3935] leading-tight mb-6"
            >
              Empezá hoy tu camino
              <span className="text-[#4A5E23]"> hacia el bienestar.</span>
            </h2>
            <p className="text-base font-light text-gray-600 leading-relaxed mb-8">
              Completá el formulario y un especialista de HyperLeaf se
              contacta con vos en menos de 24 horas para guiarte en el
              proceso. También podés escribirnos directo por WhatsApp.
            </p>

            {/* Datos de contacto */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4A5E23]/10 flex items-center justify-center text-lg flex-shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-xs font-black tracking-institutional uppercase text-gray-400">
                    Sede social
                  </p>
                  <p className="text-sm font-semibold text-[#3D3935]">
                    Chacras de Coria, Luján de Cuyo, Mendoza
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4A5E23]/10 flex items-center justify-center text-lg flex-shrink-0">
                  📧
                </div>
                <div>
                  <p className="text-xs font-black tracking-institutional uppercase text-gray-400">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-[#3D3935]">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4A5E23]/10 flex items-center justify-center text-lg flex-shrink-0">
                  📱
                </div>
                <div>
                  <p className="text-xs font-black tracking-institutional uppercase text-gray-400">
                    WhatsApp
                  </p>
                  <p className="text-sm font-semibold text-[#3D3935]">
                    {WHATSAPP_DISPLAY}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA secundario */}
            <a
              href={whatsappUrl("Hola HyperLeaf, quiero saber más sobre cómo asociarme.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm transition-all duration-200 hover:bg-[#1ebe5d] hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribinos por WhatsApp
            </a>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-10">
            {/* Estado: éxito */}
            {state === "success" && (
              <div role="alert" className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#4A5E23]/10 flex items-center justify-center text-3xl mx-auto mb-4">
                  ✅
                </div>
                <h3 className="text-xl font-black text-[#3D3935] mb-2">
                  ¡Listo, recibimos tu consulta!
                </h3>
                <p className="text-sm font-light text-gray-600">
                  Un especialista de HyperLeaf se va a contactar con vos en
                  menos de 24 horas.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-6 text-sm font-semibold text-[#4A5E23] hover:underline"
                >
                  Enviar otra consulta
                </button>
              </div>
            )}

            {/* Estado: error */}
            {state === "error" && (
              <div role="alert" className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
                <p className="text-sm font-semibold text-red-700 mb-1">
                  Hubo un problema al enviar tu consulta.
                </p>
                <p className="text-xs font-light text-red-600">
                  Intentá de nuevo en unos segundos o escribinos directo por
                  WhatsApp — te respondemos enseguida.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-3 text-sm font-bold text-red-700 hover:underline"
                >
                  Reintentar
                </button>
              </div>
            )}

            {/* Formulario activo */}
            {(state === "idle" || state === "sending" || state === "error") && (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulario de adhesión a HyperLeaf">
                <fieldset disabled={state === "sending"} className="space-y-5">
                  <legend className="sr-only">Datos para asociarte a HyperLeaf</legend>

                  {/* Nombre y Email en fila */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={idNombre} className="block text-xs font-black tracking-institutional uppercase text-[#3D3935] mb-1.5">
                        Nombre y apellido <span aria-hidden="true" className="text-red-500">*</span>
                      </label>
                      <input
                        id={idNombre}
                        name="nombre"
                        type="text"
                        autoComplete="name"
                        value={form.nombre}
                        onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.nombre ? `${idNombre}-error` : undefined}
                        aria-invalid={!!errors.nombre}
                        placeholder="Tu nombre completo"
                        className={`${inputBase} ${errors.nombre ? inputError : inputOk}`}
                      />
                      {errors.nombre && (
                        <p id={`${idNombre}-error`} role="alert" className="mt-1 text-xs text-red-500 font-semibold">
                          {errors.nombre}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor={idEmail} className="block text-xs font-black tracking-institutional uppercase text-[#3D3935] mb-1.5">
                        Email <span aria-hidden="true" className="text-red-500">*</span>
                      </label>
                      <input
                        id={idEmail}
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.email ? `${idEmail}-error` : undefined}
                        aria-invalid={!!errors.email}
                        placeholder="tu@email.com"
                        className={`${inputBase} ${errors.email ? inputError : inputOk}`}
                      />
                      {errors.email && (
                        <p id={`${idEmail}-error`} role="alert" className="mt-1 text-xs text-red-500 font-semibold">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor={idTelefono} className="block text-xs font-black tracking-institutional uppercase text-[#3D3935] mb-1.5">
                      Teléfono / WhatsApp <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id={idTelefono}
                      name="telefono"
                      type="tel"
                      autoComplete="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.telefono ? `${idTelefono}-error` : undefined}
                      aria-invalid={!!errors.telefono}
                      placeholder="Ej: 261 651-1877"
                      className={`${inputBase} ${errors.telefono ? inputError : inputOk}`}
                    />
                    {errors.telefono && (
                      <p id={`${idTelefono}-error`} role="alert" className="mt-1 text-xs text-red-500 font-semibold">
                        {errors.telefono}
                      </p>
                    )}
                  </div>

                  {/* REPROCANN + Para quién, en fila */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={idReprocann} className="block text-xs font-black tracking-institutional uppercase text-[#3D3935] mb-1.5">
                        ¿Tenés REPROCANN?
                      </label>
                      <select
                        id={idReprocann}
                        name="reprocann"
                        value={form.reprocann}
                        onChange={handleChange}
                        className={`${inputBase} ${inputOk} cursor-pointer`}
                      >
                        {OPCIONES_REPROCANN.map((o) => (
                          <option key={o.value} value={o.value} disabled={o.value === ""}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor={idParaQuien} className="block text-xs font-black tracking-institutional uppercase text-[#3D3935] mb-1.5">
                        ¿Para quién buscás el tratamiento?
                      </label>
                      <select
                        id={idParaQuien}
                        name="paraQuien"
                        value={form.paraQuien}
                        onChange={handleChange}
                        className={`${inputBase} ${inputOk} cursor-pointer`}
                      >
                        {OPCIONES_PARA_QUIEN.map((o) => (
                          <option key={o.value} value={o.value} disabled={o.value === ""}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Condición o síntoma (opcional) */}
                  <div>
                    <label htmlFor={idCondicion} className="block text-xs font-black tracking-institutional uppercase text-[#3D3935] mb-1.5">
                      ¿Qué condición o síntoma querés tratar?{" "}
                      <span className="font-light text-gray-400 normal-case tracking-normal">
                        (opcional)
                      </span>
                    </label>
                    <input
                      id={idCondicion}
                      name="condicion"
                      type="text"
                      value={form.condicion}
                      onChange={handleChange}
                      placeholder="Ej: ansiedad, insomnio, dolor crónico…"
                      className={`${inputBase} ${inputOk}`}
                    />
                  </div>

                  {/* Cómo conoció HyperLeaf */}
                  <div>
                    <label htmlFor={idComoConocio} className="block text-xs font-black tracking-institutional uppercase text-[#3D3935] mb-1.5">
                      ¿Cómo conociste HyperLeaf?
                    </label>
                    <select
                      id={idComoConocio}
                      name="comoConocio"
                      value={form.comoConocio}
                      onChange={handleChange}
                      className={`${inputBase} ${inputOk} cursor-pointer`}
                    >
                      {OPCIONES_COMO_CONOCIO.map((o) => (
                        <option key={o.value} value={o.value} disabled={o.value === ""}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Checkbox de términos */}
                  <div>
                    <div className="flex items-start gap-3">
                      <input
                        id={idTerminos}
                        name="aceptaTerminos"
                        type="checkbox"
                        checked={form.aceptaTerminos}
                        onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.aceptaTerminos ? `${idTerminos}-error` : undefined}
                        aria-invalid={!!errors.aceptaTerminos}
                        className="mt-1 w-4 h-4 flex-shrink-0 rounded border-gray-300 text-[#4A5E23] focus:ring-[#4A5E23] cursor-pointer"
                      />
                      <label htmlFor={idTerminos} className="text-sm font-light text-gray-600 leading-relaxed cursor-pointer">
                        Acepto los{" "}
                        <a href="/aviso-legal" className="font-semibold text-[#4A5E23] hover:underline">
                          Términos y Condiciones
                        </a>{" "}
                        y la{" "}
                        <a href="/aviso-legal#privacidad" className="font-semibold text-[#4A5E23] hover:underline">
                          Política de Privacidad
                        </a>{" "}
                        de HyperLeaf A.C. <span aria-hidden="true" className="text-red-500">*</span>
                      </label>
                    </div>
                    {errors.aceptaTerminos && (
                      <p id={`${idTerminos}-error`} role="alert" className="mt-1.5 text-xs text-red-500 font-semibold">
                        {errors.aceptaTerminos}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#4A5E23] text-white font-black text-sm tracking-institutional uppercase transition-all duration-200 hover:bg-[#C8D400] hover:text-[#3D3935] disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#4A5E23] focus-visible:ring-offset-2"
                    aria-busy={state === "sending"}
                  >
                    {state === "sending" ? (
                      <>
                        {/* Spinner accesible */}
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando…
                      </>
                    ) : (
                      "Quiero asociarme — me contactan en 24 hs"
                    )}
                  </button>

                  <p className="text-center text-xs font-light text-gray-400">
                    Tu información es confidencial y se usa únicamente para el
                    proceso de adhesión. No constituye consejo médico. Solo
                    mayores de 18 años.
                  </p>
                </fieldset>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
