"use client";

import Masonry from "react-masonry-css";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

export default function ServicesMasonry() {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-6"
      columnClassName="masonry-column"
    >
      <DirectionAwareHover imageUrl="..." className="w-full h-80">
        <p className="font-bold text-2xl">Diagnósticos</p>
        <p className="text-sm mt-2 text-white/80">
          Servicio mecánico para ayudar a identificar una falla en específico o situaciones anormales en el carro.
        </p>
      </DirectionAwareHover>

      <DirectionAwareHover imageUrl="..." className="w-full h-96">
        <p className="font-bold text-2xl">Alineación y Balanceo</p>
        <p className="text-sm mt-2 text-white/80">
          Fundamentales para alargar la vida útil de la suspensión, las llantas del vehículo y mantener la seguridad.
        </p>
      </DirectionAwareHover>

      {/* 👉 Repite aquí las demás 7 cards con sus títulos y descripciones */}
    </Masonry>
  );
}
