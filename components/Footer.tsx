import Image from "next/image";
import Link from "next/link";

const NAV_FOOTER = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#segmentos", label: "Segmentos" },
  { href: "#propuesta", label: "Propuesta de valor" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#contacto", label: "Contacto" },
];

const LEGAL_LINKS = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/aviso-legal#privacidad", label: "Privacidad" },
  { href: "/aviso-legal#reprocann", label: "REPROCANN" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#3D3935] text-white"
      aria-label="Pie de página HyperLeaf"
    >
      {/* Banda superior verde */}
      <div className="bg-[#4A5E23] py-12 leaf-pattern-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-black tracking-institutional uppercase text-[#C8D400] mb-3">
            ¿Listo para dar el paso?
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6">
            Accedé legalmente al cannabis en Mendoza.
          </h2>
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#C8D400] text-[#3D3935] font-black text-sm tracking-institutional uppercase transition-all duration-200 hover:bg-white hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4A5E23]"
          >
            Contactanos
          </a>
        </div>
      </div>

      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Marca */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.svg"
              alt="HyperLeaf Asociación Civil"
              width={140}
              height={32}
              className="h-8 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm font-light text-white/60 leading-relaxed max-w-xs mb-6">
              Asociación civil de cannabis legal con sede en Chacras de Coria,
              Mendoza. Operamos bajo REPROCANN y la Ley 27.350.
            </p>
            {/* Redes sociales */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/hyperleaf.ar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HyperLeaf en Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#C8D400] hover:text-[#3D3935] transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/hyperleaf.ar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HyperLeaf en Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#C8D400] hover:text-[#3D3935] transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Mapa del sitio">
            <h3 className="text-xs font-black tracking-institutional uppercase text-[#C8D400] mb-5">
              Sitio
            </h3>
            <ul className="space-y-3">
              {NAV_FOOTER.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Información legal">
            <h3 className="text-xs font-black tracking-institutional uppercase text-[#C8D400] mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs font-semibold text-[#A8C66C] mb-1">
                Solo mayores de 18 años
              </p>
              <p className="text-xs font-light text-white/50 leading-relaxed">
                El cannabis puede ser perjudicial para la salud. Usalo de forma
                responsable.
              </p>
            </div>
          </nav>
        </div>

        {/* Línea inferior */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-white/40">
            © {new Date().getFullYear()} HyperLeaf Asociación Civil. Mendoza,
            Argentina.
          </p>
          <p className="text-xs font-light text-white/40">
            Operamos bajo Ley 27.350 y REPROCANN · Ministerio de Salud de la Nación
          </p>
        </div>
      </div>
    </footer>
  );
}
