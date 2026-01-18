"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";

export const Navbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <div className={cn("fixed inset-x-0 top-0 z-50 w-full transition-all duration-300", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { visible })
          : child
      )}
    </div>
  );
};

export const NavBody = ({ children, className, visible }: { children: React.ReactNode; className?: string; visible?: boolean }) => {
  return (
    <motion.div
      animate={{
        width: visible ? "fit-content" : "100%",
        y: visible ? 20 : 0,
        backgroundColor: visible ? "rgba(255, 255, 255, 0.8)" : "transparent",
        backdropFilter: visible ? "blur(10px)" : "none",
        paddingLeft: visible ? "2rem" : "2rem",
        paddingRight: visible ? "2rem" : "2rem",
      }}
      className={cn(
        "mx-auto hidden lg:flex flex-row items-center justify-between py-3 rounded-full border border-transparent transition-all",
        visible && "border-white/20 shadow-[0_0_24px_rgba(0,0,0,0.1)] dark:bg-neutral-950/80",
        className
      )}
      style={{ minWidth: visible ? "600px" : "100%" }}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items }: { items: { name: string; link: string }[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="flex flex-row items-center space-x-1">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          className="relative px-4 py-2 text-sm text-neutral-600 dark:text-neutral-300 transition-colors hover:text-black dark:hover:text-white"
        >
          {hovered === idx && (
            <motion.span
              layoutId="hover"
              className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-full -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
          {item.name}
        </a>
      ))}
    </div>
  );
};

export const NavbarLogo = () => (
  <a href="/" className="flex items-center space-x-2">
    <div className="h-8 w-8 bg-black rounded-md flex items-center justify-center">
      <div className="h-4 w-4 bg-white rotate-45" />
    </div>
    <span className="font-bold text-black dark:text-white">M-Sport</span>
  </a>
);

export const NavbarButton = ({ children, variant, className }: any) => (
  <button className={cn(
    "px-4 py-2 rounded-full text-sm font-medium transition-all",
    variant === "primary" ? "bg-black text-white hover:bg-black/80" : "bg-transparent text-black hover:bg-neutral-100",
    className
  )}>
    {children}
  </button>
);

// --- Componentes Mobile ---
export const MobileNav = ({ children, visible }: any) => (
  <motion.div 
    animate={{ y: visible ? 20 : 0, width: visible ? "90%" : "100%" }}
    className={cn("mx-auto lg:hidden flex flex-col items-center bg-white/80 backdrop-blur-md rounded-2xl py-3 px-6 border border-white/20 shadow-lg", !visible && "bg-transparent shadow-none border-transparent")}
  >
    {children}
  </motion.div>
);
export const MobileNavHeader = ({ children }: any) => <div className="flex w-full items-center justify-between">{children}</div>;
export const MobileNavToggle = ({ isOpen, onClick }: any) => <button onClick={onClick}>{isOpen ? <IconX /> : <IconMenu2 />}</button>;
export const MobileNavMenu = ({ isOpen, children }: any) => (
  <AnimatePresence>{isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="w-full overflow-hidden flex flex-col gap-4 mt-4">{children}</motion.div>}</AnimatePresence>
);