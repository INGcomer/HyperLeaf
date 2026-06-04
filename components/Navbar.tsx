"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#segmentos", label: "Segmentos" },
  { href: "#propuesta", label: "Propuesta" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link href="/" aria-label="HyperLeaf — inicio">
          <Image
            src="/logo.svg"
            alt="HyperLeaf Asociación Civil"
            width={160}
            height={36}
            priority
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-semibold tracking-institutional uppercase transition-colors duration-200 ${
                  scrolled
                    ? "text-brand-black hover:text-green-institutional"
                    : "text-white hover:text-green-lime"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-[#4A5E23] text-white text-sm font-bold tracking-institutional uppercase transition-all duration-200 hover:bg-[#C8D400] hover:text-[#3D3935] hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#4A5E23] focus-visible:ring-offset-2"
        >
          Asociate
        </a>

        {/* Mobile burger */}
        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-brand-black" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-semibold tracking-institutional uppercase text-[#3D3935] hover:text-[#4A5E23] transition-colors py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#4A5E23] text-white text-sm font-bold tracking-institutional uppercase transition-all duration-200 hover:bg-[#C8D400] hover:text-[#3D3935]"
              >
                Asociate
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
