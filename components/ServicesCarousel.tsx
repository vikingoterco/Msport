"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function ServicesCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans mb-4">
        Nuestros Servicios Especializados
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-base md:text-lg text-white/70 font-sans mb-8">
        Servicios profesionales para vehículos de alta gama con tecnología de punta
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const ServiceContent = ({ details }: { details: string[] }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <div className="space-y-4">
        {details.map((detail, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6a00ba] to-[#0070ba] mt-2 flex-shrink-0" />
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
              {detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    category: "Diagnóstico Profesional",
    title: "Diagnósticos Avanzados",
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000",
    content: (
      <ServiceContent
        details={[
          "Escaneo computarizado completo del sistema",
          "Identificación precisa de fallas específicas",
          "Detección de situaciones anormales en el vehículo",
          "Reporte detallado con recomendaciones",
          "Uso de equipos especializados para vehículos premium",
        ]}
      />
    ),
  },
  {
    category: "Mantención Preventiva",
    title: "Alineación y Balanceo",
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000",
    content: (
      <ServiceContent
        details={[
          "Alarga la vida útil de la suspensión",
          "Protege las llantas del desgaste irregular",
          "Mejora la seguridad en la conducción",
          "Optimiza el consumo de combustible",
          "Sistema computarizado de última generación",
        ]}
      />
    ),
  },
  {
    category: "Mantención Integral",
    title: "Service Multimarca",
    src: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1000",
    content: (
      <ServiceContent
        details={[
          "Mantenimiento periódico según fabricante",
          "Cambio de aceite y filtros de calidad premium",
          "Revisión de niveles y sistemas",
          "Inspección de 50 puntos de seguridad",
          "Garantía en repuestos y mano de obra",
        ]}
      />
    ),
  },
  {
    category: "Sistema de Seguridad",
    title: "Frenos",
    src: "https://images.unsplash.com/photo-1601933470928-3f3a3f04e3d3?q=80&w=1000",
    content: (
      <ServiceContent
        details={[
          "Cambio de discos y pastillas de alta calidad",
          "Reparación de cilindros y mordazas",
          "Mantenimiento de bomba de frenos",
          "Servicio de freno de mano y cables",
          "Calibración de válvulas compensadoras",
        ]}
      />
    ),
  },
  {
    category: "Sistema de Potencia",
    title: "Transmisión",
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000",
    content: (
      <ServiceContent
        details={[
          "Reparación de cajas automáticas y manuales",
          "Cambio de aceite de transmisión",
          "Diagnóstico electrónico especializado",
          "Mantenimiento preventivo programado",
          "Repuestos originales o equivalentes premium",
        ]}
      />
    ),
  },
  {
    category: "Corazón del Vehículo",
    title: "Motor",
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000",
    content: (
      <ServiceContent
        details={[
          "Ajustes y reparación de motores nafta/diesel",
          "Rectificación y reconstrucción completa",
          "Cambio de kit de distribución",
          "Optimización de rendimiento",
          "Garantía extendida en trabajos mayores",
        ]}
      />
    ),
  },
  {
    category: "Confort y Seguridad",
    title: "Suspensión y Amortiguación",
    src: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=1000",
    content: (
      <ServiceContent
        details={[
          "Cambio de amortiguadores y espirales",
          "Reparación de bastidores",
          "Reemplazo de fuelles y bujes",
          "Diagnóstico de ruidos y vibraciones",
          "Mejora del confort de marcha",
        ]}
      />
    ),
  },
  {
    category: "Mantención Crítica",
    title: "Distribución",
    src: "https://images.unsplash.com/photo-1552519507-e5b7f4d71e3c?q=80&w=1000",
    content: (
      <ServiceContent
        details={[
          "Cambio de correa/cadena de distribución",
          "Reemplazo de tensores y poleas",
          "Cambio de bomba de agua preventivo",
          "Correas de accesorios incluidas",
          "Previene daños mayores en el motor",
        ]}
      />
    ),
  },
  {
    category: "Control Total",
    title: "Dirección",
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
    content: (
      <ServiceContent
        details={[
          "Reparación de cremallera de dirección",
          "Mantenimiento de dirección hidráulica/eléctrica",
          "Cambio de bomba de dirección",
          "Reemplazo de brazos y terminales",
          "Alineación computarizada de precisión",
        ]}
      />
    ),
  },
];