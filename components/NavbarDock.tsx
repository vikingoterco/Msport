"use client";

import React from "react";
import FloatingDock from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export default function NavbarDock() {
  const links = [
    {
      title: "Inicio",
      icon: <IconHome className="h-full w-full text-white/80" />,
      href: "#inicio",
    },
    {
      title: "Servicios",
      icon: <IconTerminal2 className="h-full w-full text-white/80" />,
      href: "#servicios",
    },
    {
      title: "BMW",
      icon: <IconNewSection className="h-full w-full text-white/80" />,
      href: "#bmw",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full text-white/80" />,
      href: "#changelog",
    },
    {
      title: "X",
      icon: <IconBrandX className="h-full w-full text-white/80" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-white/80" />,
      href: "#",
    },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-xl
        bg-gradient-to-b from-[#0a0a0a]/90 to-[#0a0a0a]/80
        shadow-[0_1px_0_rgba(255,255,255,0.08)]
      "
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center">

        
        {/* LOGO IZQUIERDA (NO INTERACTIVO) */}
        <div className="absolute left-6 flex items-center pointer-events-none select-none">
          <img
            src="/msport.png"
            alt="MSport"
            className="h-25 w-auto object-contain opacity-100"
          />
        </div>

        {/* DOCK CENTRADO */}
        <div className="flex-1 flex justify-center">
          <FloatingDock items={links} />
        </div>
      </div>
    </nav>
  );
}
