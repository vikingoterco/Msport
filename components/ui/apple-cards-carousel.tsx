"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Duplicar items 5 veces para mejor efecto infinito
  const infiniteItems = [...items, ...items, ...items, ...items, ...items];

  useEffect(() => {
    if (carouselRef.current) {
      // Empezar en el medio del array (segunda copia)
      const cardWidth = window.innerWidth < 768 ? 230 : 384;
      const gap = window.innerWidth < 768 ? 16 : 32;
      // Posicionar en la segunda copia de items
      carouselRef.current.scrollLeft = (cardWidth + gap) * items.length * 2;
    }
  }, [items.length]);

  const scrollToCard = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const cardWidth = window.innerWidth < 768 ? 230 : 384;
    const gap = window.innerWidth < 768 ? 16 : 32;
    const scrollAmount = cardWidth + gap;

    if (direction === 'left') {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }
  };

  // Manejar scroll infinito
  const handleScroll = () => {
    if (!carouselRef.current) return;

    // Limpiar timeout anterior
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Esperar a que termine el scroll para reposicionar
    scrollTimeoutRef.current = setTimeout(() => {
      if (!carouselRef.current) return;

      const { scrollLeft } = carouselRef.current;
      const cardWidth = window.innerWidth < 768 ? 230 : 384;
      const gap = window.innerWidth < 768 ? 16 : 32;
      const cardTotalWidth = cardWidth + gap;
      const sectionWidth = cardTotalWidth * items.length;

      // Calcular en qué "set" de items estamos
      const currentSet = Math.floor(scrollLeft / sectionWidth);

      // Si estamos en el primer set (índice 0) o en el último set (índice 4)
      if (currentSet === 0 || currentSet === 4) {
        // Reposicionar al set del medio (índice 2) en la misma posición relativa
        const positionInSet = scrollLeft % sectionWidth;
        carouselRef.current.scrollLeft = sectionWidth * 2 + positionInSet;
      }
    }, 150);
  };

  const handleCardClose = (index: number) => {
    // No hacemos nada al cerrar la card
    // Mantenemos la posición actual del scroll
    setCurrentIndex(index);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full flex items-center">
        {/* Flecha Izquierda */}
        <button
          onClick={() => scrollToCard('left')}
          className="absolute left-2 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 md:left-4"
          aria-label="Anterior"
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-800" />
        </button>

        {/* Carousel */}
        <div
          data-carousel-scroll
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={handleScroll}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4 md:gap-8",
              "mx-auto max-w-7xl",
            )}
          >
            {infiniteItems.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.1 * (index % items.length),
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Flecha Derecha */}
        <button
          onClick={() => scrollToCard('right')}
          className="absolute right-2 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 md:right-4"
          aria-label="Siguiente"
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
    
    // Forzar re-render del scroll container después de cerrar
    setTimeout(() => {
      const scrollContainer = document.querySelector('[data-carousel-scroll]');
      if (scrollContainer) {
        const currentScroll = scrollContainer.scrollLeft;
        scrollContainer.scrollLeft = currentScroll + 1;
        scrollContainer.scrollLeft = currentScroll;
      }
    }, 50);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  fill,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      alt={alt ? alt : "Background of a beautiful view"}
      loading="lazy"
      decoding="async"
    />
  );
};