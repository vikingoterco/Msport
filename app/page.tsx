import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Page() {
  return (
    <>
      {/* HERO / SECCIÓN PRINCIPAL */}
      <AuroraBackground>
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Mantenimiento de alta gama
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Taller especializado en vehículos BMW y alta categoría, con tecnología
            de diagnóstico avanzada y atención profesional.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#turnos"
              className="
                px-8 py-3 rounded-full
                bg-gradient-to-r from-[#6a00ba] to-[#0070ba]
                text-white font-semibold uppercase tracking-wide
                shadow-[0_0_30px_rgba(106,0,186,0.6)]
                transition-all duration-300
                hover:scale-105
              "
            >
              Reservar turno
            </a>

            <a
              href="#servicios"
              className="
                px-8 py-3 rounded-full
                border border-white/20
                text-white/90
                backdrop-blur-md
                transition-all duration-300
                hover:bg-white/10
              "
            >
              Ver servicios
            </a>
          </div>
        </div>
      </AuroraBackground>
    </>
  );
}
