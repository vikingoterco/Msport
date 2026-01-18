"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

type DockItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

export function FloatingDock({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
}

/* -------------------- MOBILE -------------------- */

function FloatingDockMobile({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute inset-x-0 bottom-full mb-2 flex gap-2 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="h-10 w-10 rounded-full flex items-center justify-center
                  bg-[#0a0a0a]/90 border border-white/10 backdrop-blur-xl"
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full flex items-center justify-center
          bg-[#0a0a0a]/90 border border-white/10 backdrop-blur-xl"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-white/70" />
      </button>
    </div>
  );
}

/* -------------------- DESKTOP -------------------- */

function FloatingDockDesktop({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "hidden md:flex items-end gap-4",
        className
      )}
    >
      {items.map((item) => (
        <DockIcon key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
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

  // Zoom SUAVE (navbar friendly)
  const size = useTransform(distance, [-160, 0, 160], [44, 68, 44]);
  const iconSize = useTransform(distance, [-160, 0, 160], [20, 32, 20]);

  const width = useSpring(size, { stiffness: 220, damping: 20 });
  const height = useSpring(size, { stiffness: 220, damping: 20 });
  const widthIcon = useSpring(iconSize, { stiffness: 220, damping: 20 });
  const heightIcon = useSpring(iconSize, { stiffness: 220, damping: 20 });

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="
          flex items-center justify-center rounded-full
          bg-[#0a0a0a]/90 border border-white/10
          backdrop-blur-xl
          hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
        "
      >
        <motion.div style={{ width: widthIcon, height: heightIcon }}>
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
