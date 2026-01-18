"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export default function NavbarDock() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: "Servicios", link: "#services" },
    { name: "Mecánica", link: "#mecanica" },
    { name: "Ubicación", link: "#ubicacion" },
    { name: "Contacto", link: "#contacto" },
  ];

  return (
    <Navbar>
      {/* Versión Escritorio */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-2">
          <NavbarButton variant="secondary">Acceder</NavbarButton>
          <NavbarButton variant="primary">Agendar Cita</NavbarButton>
        </div>
      </NavBody>

      {/* Versión Móvil */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen}>
          {navItems.map((item) => (
            <a key={item.name} href={item.link} className="text-neutral-600 py-2 border-b border-neutral-100">
              {item.name}
            </a>
          ))}
          <NavbarButton variant="primary" className="w-full mt-2">Agendar Cita</NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}