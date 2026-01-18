"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
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
      title: "Especialidad BMW",
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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          rounded-2xl
          backdrop-blur-xl
          bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]/90
          border border-white/10
          shadow-[0_0_30px_rgba(0,0,0,0.6)]
          px-4 py-2
        "
      >
        <FloatingDock items={links} />
      </div>
    </nav>
  );
}
