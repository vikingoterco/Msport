import { AuroraBackground } from "@/components/ui/aurora-background";
import { ServicesCarousel } from "@/components/ServicesCarousel";

export default function Page() {
  return (
    <AuroraBackground>
      {/* HERO / SECCIÓN PRINCIPAL */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
          Mantenimiento de alta gama
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/80">
          No todos los talleres están preparados para trabajar con vehículos de alta categoría. Nosotros somos un taller especializado en eso. Contamos con la última tecnología y el personal capacitado para devolver tu auto a su máximo rendimiento.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#turnos"
            className="px-8 py-3 rounded-full bg-[#0066b1] text-white font-semibold uppercase tracking-wide shadow-[0_0_30px_rgba(0,102,177,0.6)] transition-all duration-300 hover:scale-105 hover:bg-[#0056a0]"
          >
            Reservar turno
          </a>

          <a
            href="#servicios"
            className="px-8 py-3 rounded-full border border-white/20 text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* SECCIÓN DE SERVICIOS CON CAROUSEL */}
      <section id="servicios" className="relative z-10 min-h-screen">
        <ServicesCarousel />
      </section>
    </AuroraBackground>
  );
}