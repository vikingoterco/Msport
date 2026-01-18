"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type DockItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

type FloatingDockProps = {
  items: DockItem[];
};

export default function FloatingDock({ items }: FloatingDockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex items-center gap-4"
    >
      {items.map((item) => (
        <DockIcon key={item.title} mouseX={mouseX} {...item} />
      ))}
    </div>
  );
}

function DockIcon({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: any;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return Infinity;
    return val - bounds.x - bounds.width / 2;
  });

  // 👉 SOLO el ícono hace zoom
  const iconScale = useTransform(distance, [-160, 0, 160], [1, 2, 1]);

  const smoothIconScale = useSpring(iconScale, {
    stiffness: 260,
    damping: 20,
  });

  return (
    <a href={href} aria-label={title}>
      <div
        ref={ref}
        className="
          h-14 w-14
          flex items-center justify-center
          rounded-full
          bg-[#0a0a0a]/90
          border border-white/10
          backdrop-blur-xl
          overflow-hidden
        "
      >
        <motion.div
          style={{ scale: smoothIconScale }}
          className="flex items-center justify-center text-white/80"
        >
          {icon}
        </motion.div>
      </div>
    </a>
  );
}
