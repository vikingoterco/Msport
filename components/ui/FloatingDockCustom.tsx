"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockCustom() {
  const links = [
    {
      title: "Inicio",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#inicio",
    },
    {
      title: "Productos",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#productos",
    },
    {
      title: "Componentes",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#componentes",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#changelog",
    },
  ];

  return (
    <div
      className="flex flex-col gap-6 px-3 py-4 rounded-tr-xl backdrop-blur-lg
      bg-white/20 dark:bg-neutral-900/30 border border-white/30 dark:border-neutral-700/30 shadow-lg"
    >
      <FloatingDock items={links} className="flex flex-col gap-6" />
    </div>
  );
}
