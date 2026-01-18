"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (currentScrollY / windowHeight) * 100;
      setScrollProgress(scrolled);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#6a00ba]/30 shadow-[0_0_40px_rgba(106,0,186,0.3)] transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-2">
          <div className="flex items-center justify-between">
            {/* Logo con efecto pulso */}
            <Link href="/" className="relative group">
              <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 animate-pulse">
                <img
                  src="/logo msport.png"
                  alt="MSport Logo"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6a00ba]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
            </Link>

            {/* Botón hamburguesa */}
            <button
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] p-2 group"
              onClick={() => setIsSidebarOpen(true)}
            >
              <span className="w-6 h-[2px] bg-[#6a00ba] shadow-[0_0_5px_#6a00ba] transition-all duration-300"></span>
              <span className="w-6 h-[2px] bg-[#6a00ba] shadow-[0_0_5px_#6a00ba] transition-all duration-300"></span>
              <span className="w-6 h-[2px] bg-[#6a00ba] shadow-[0_0_5px_#6a00ba] transition-all duration-300"></span>
            </button>

            {/* Links desktop */}
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <NavLink href="#inicio">Inicio</NavLink>
              <NavLink href="#servicios">Servicios</NavLink>
              <NavLink href="#bmw">Especialidad BMW</NavLink>
              <NavLink href="#contacto">Contacto</NavLink>

              <Link
                href="#turnos"
                className="ml-4 relative px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6a00ba] to-[#0070ba] text-white font-semibold uppercase tracking-wider overflow-hidden group transition-all duration-300 hover:shadow-[0_0_25px_rgba(106,0,186,0.8),0_0_50px_rgba(0,112,186,0.4)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Reservar turno</span>
                  <svg
                    className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Scroll progress multicolor */}
          <div
            className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#6a00ba] via-[#0070ba] to-[#00e0a0] shadow-[0_0_10px_#6a00ba] transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>
    </>
  );
}

// Links con glow extra
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative px-6 py-3 text-white/80 hover:text-[#6a00ba] transition-colors duration-300 group overflow-hidden"
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-[#6a00ba]/15 to-transparent transition-transform duration-500 blur-sm" />
      <span className="relative tracking-wide">{children}</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#6a00ba] to-[#00e0a0] shadow-[0_0_10px_#6a00ba] -translate-x-1/2 group-hover:w-4/5 transition-all duration-300" />
    </Link>
  );
}
