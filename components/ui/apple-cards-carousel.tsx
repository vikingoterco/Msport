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
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
}

type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: () => void;
}>({
  onCardClose: () => {},
});

export const Carousel = ({ items }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // duplicamos items para efecto infinito
  const infiniteItems = [...items, ...items, ...items, ...items, ...items];

  useEffect(() => {
    if (!carouselRef.current) return;

    const cardWidth = window.innerWidth < 768 ? 230 : 384;
    const gap = window.innerWidth < 768 ? 16 : 32;

    carouselRef.current.scrollLeft =
      (cardWidth + gap) * items.length * 2;
  }, [items.length]);

  const scrollToCard = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const cardWidth = window.innerWidth < 768 ? 230 : 384;
    const gap = window.innerWidth < 768 ? 16 : 32;
    const scrollAmount = cardWidth + gap;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (!carouselRef.current) return;

      const cardWidth = window.innerWidth < 768 ? 230 : 384;
      const gap = window.innerWidth < 768 ? 16 : 32;
      const cardTotal = cardWidth + gap;
      const sectionWidth = cardTotal * items.length;

      const scrollLeft = carouselRef.current.scrollLeft;
      const currentSet = Math.floor(scrollLeft / sectionWidth);

      if (currentSet === 0 || currentSet === 4) {
        const position = scrollLeft % sectionWidth;
        carouselRef.current.scrollLeft = sectionWidth * 2 + position;
      }
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <CarouselContext.Provider value={{ onCardClose: () => {} }}>
      <div className="relative w-full flex items-center">
        {/* Flecha izquierda */}
        <button
          onClick={() => scrollToCard("left")}
          className="absolute left-2 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 hover:scale-110 transition md:left-4"
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-800" />
        </button>

        {/* Carousel */}
        <div
          data-carousel-scroll
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex w-full overflow-x-scroll scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-4 pl-4 md:gap-8 mx-auto max-w-7xl">
            {infiniteItems.map((item, index) => (
              <motion.div
                key={`card-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.05 * (index % items.length),
                  },
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Flecha derecha */}
        <button
          onClick={() => scrollToCard("right")}
          className="absolute right-2 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 hover:scale-110 transition md:right-4"
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
}: {
  card: CardType;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useOutsideClick(containerRef, () => {
    if (open) handleClose();
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    onCardClose();
  };

  return (
    <>
      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50">
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              ref={containerRef}
              layoutId={`card-${card.title}`}
              className="relative z-[60] mx-auto my-10 max-w-5xl rounded-3xl bg-white p-6 dark:bg-neutral-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={handleClose}
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
              >
                <IconX />
              </button>

              <p className="mt-4 text-sm font-medium">{card.category}</p>
              <h3 className="mt-2 text-3xl font-bold">{card.title}</h3>

              <div className="mt-8">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CARD */}
      <motion.button
        layoutId={open ? undefined : `card-${card.title}`}
        onClick={handleOpen}
        className="relative flex h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden rounded-3xl bg-neutral-900"
      >

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />
        <div className="relative z-20 p-6 text-left text-white">
          <p className="text-sm">{card.category}</p>
          <h3 className="mt-2 text-xl md:text-3xl font-semibold">
            {card.title}
          </h3>
        </div>

        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </motion.button>
    </>
  );
};
