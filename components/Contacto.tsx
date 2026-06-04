"use client";

// Formulario de contacto integrado con SheetMonkey
// Endpoint: https://api.sheetmonkey.io/form/vrRw6me6725adpaQZE2SNv
// Estados: idle → sending → success | error

import { useState, useId } from "react";

type FormState = "idle" | "sending" | "success" | "error";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  tipo: string;
  mensaje: string;
}

const TIPOS_CONSULTA = [
  { value: "", label: "Seleccioná tu consulta" },
  { value: "asociarme", label: "Quiero asociarme" },
  { value: "medicinal", label: "Uso medicinal" },
  { value: "recreativo", label: "Uso recreativo" },
  { value: "otra", label: "Otra consulta" },
];

const WHATSAPP_URL =
  "https://wa.me/5492615000000?text=Hola%20HyperLeaf%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n";

const INITIAL: FormData = {
  nombre: "",
  email: "",
  telefono: "",
  tipo: "",
  mensaje: "",
};

export default function Contacto() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // IDs únicos para accesibilidad
  const idNombre = useId();
  const idEmail = useId();
  const idTelefono = useId();
  const idTipo = useId();
  const idMensaje = useId();

  function validate(): boolean {
    const next: Partial<FormData> = {};
    if (!form.nombre.trim()) next.nombre = "El nombre es requerido.";
    if (!form.email.trim()) {
      next.email = "El email es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Ingresá un email válido.";
    }
    if (!form.tipo) next.tipo = "Seleccioná un tipo de consulta.";
    if (!form.mensaje.trim()) next.mensaje = "El mensaje es requerido.";
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
            "Nombre completo": form.nombre,
            Email: form.email,
            Teléfono: form.telefono || "—",
            "Tipo de consulta": form.tipo,
            Mensaje: form.mensaje,
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpiar error del campo al escribir
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
              Hablemos
            </p>
            <h2
              id="contacto-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D3935] leading-tight mb-6"
            >
              ¿Querés asociarte a
              <span className="text-[#4A5E23]"> HyperLeaf?</span>
            </h2>
            <p className="text-base font-light text-gray-600 leading-relaxed mb-8">
              Completá el formulario y te contactamos en menos de 48 horas para
              guiarte en el proceso. También podés escribirnos directo por
              WhatsApp.
            </p>

            {/* Datos de contacto */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4A5E23]/10 flex items-center justify-center text-lg flex-shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-xs font-black tracking-institutional uppercase text-gray-400">
                    Ubicación
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
                    hola@hyperleaf.com.ar
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm transition-all duration-200 hover:bg-[#1ebe5d] hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribinos por WhatsApp
            </a>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-10">
            {/* Estado: éxito */}
            {state === "success" && (
              <div
                role="alert"
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-[#4A5E23]/10 flex items-center justify-center text-3xl mx-auto mb-4">
                  ✅
                </div>
                <h3 className="text-xl font-black text-[#3D3935] mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-sm font-light text-gray-600">
                  Recibimos tu consulta. Te contactamos en menos de 48 horas.
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
              <div
                role="alert"
                className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6"
              >
                <p className="text-sm font-semibold text-red-700 mb-1">
                  Hubo un problema al enviar tu consulta.
                </p>
                <p className="text-xs font-light text-red-600">
                  Intentá de nuevo o escribinos por WhatsApp.
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
              <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto HyperLeaf">
                <fieldset disabled={state === "sending"} className="space-y-5">
                  <legend className="sr-only">Datos de contacto</legend>

                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor={idNombre}
                      className="block text-xs font-black tracking-institutional uppercase text-[#3D3935] mb-1.5"
                    >
                      Nombre completo <span aria-hidden="true" className="text-red-500">*</span>
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
                      placeholder="Tu nombre y apellido"
                      className={`${inputBase} ${errors.nombre ? inputError : inputOk}`}
                    />
                    {errors.nombre && (
                      <p id={`${idNombre}-error`} role="alert" className="mt-1 text-xs text-red-500 font-semibold">
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor={idEmail}
                      className="block text-xs font-black tracking-institutional uppercase text-[#3D3935] mb-1.5"
                    >
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
                      placeholder="tucorreo@ejemplo.com"
                      className={`${inputBase} ${errors.email ? inputError : inputOk}`}
                    />
                    {errors.email && (
                      <p id={`${idEmail}-error`} role="alert" className="mt-1 text-xs text-red-500 font-semibold">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Teléfono (opcional) */}
                  <div>
                    <label
                      htmlFor={idTelefono}
                      className="block text-xs font-black tracking-institutional uppercase text-[#3D3935] mb-1.5"
                    >
                      Teléfono{" "}
                      <span className="font-light text-gray-400 normal-case tracking-normal">
                        (opcional)
                      </span>
                    </label>
                    <input
                      id={idTelefono}
                      name="telefono"
                      type="tel"
                      autoComplete="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+54 261 000 0000"
                      className={`${inputBase} ${inputOk}`}
                    />
                  </div>

                  {/* Tipo de consulta */}
                  <div>
                    <label
                      htmlFor={idTipo}
                      className="block text-xs font-black tracking-institutional uppercase text-[#3D3935] mb-1.5"
                    >
                      Tipo de consulta <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <select
                      id={idTipo}
                      name="tipo"
                      value={form.tipo}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.tipo ? `${idTipo}-error` : undefined}
                      aria-invalid={!!errors.tipo}
                      className={`${inputBase} ${errors.tipo ? inputError : inputOk} cursor-pointer`}
                    >
                      {TIPOS_CONSULTA.map((t) => (
                        <option key={t.value} value={t.value} disabled={t.value === ""}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                    {errors.tipo && (
                      <p id={`${idTipo}-error`} role="alert" className="mt-1 text-xs text-red-500 font-semibold">
                        {errors.tipo}
                      </p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor={idMensaje}
                      className="block text-xs font-black tracking-institutional uppercase text-[#3D3935] mb-1.5"
                    >
                      Mensaje <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <textarea
                      id={idMensaje}
                      name="mensaje"
                      rows={4}
                      value={form.mensaje}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.mensaje ? `${idMensaje}-error` : undefined}
                      aria-invalid={!!errors.mensaje}
                      placeholder="Contanos tu situación o consulta..."
                      className={`${inputBase} resize-none ${errors.mensaje ? inputError : inputOk}`}
                    />
                    {errors.mensaje && (
                      <p id={`${idMensaje}-error`} role="alert" className="mt-1 text-xs text-red-500 font-semibold">
                        {errors.mensaje}
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
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Enviando…
                      </>
                    ) : (
                      "Enviar consulta"
                    )}
                  </button>

                  <p className="text-center text-xs font-light text-gray-400">
                    Al enviar aceptás nuestra{" "}
                    <a href="/aviso-legal" className="underline hover:text-[#4A5E23]">
                      política de privacidad
                    </a>
                    . Solo mayores de 18 años.
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
