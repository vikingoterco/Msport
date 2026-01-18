import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingDockVertical } from "@/components/ui/FloatingDockVertical";

export default function Page() {
  return (
    <>
      <AuroraBackground>
        {/* Aquí va tu contenido principal */}
        <div className="text-center py-32">
          <h1 className="text-5xl font-bold text-white">Mantenimiento de alta gama</h1>
          <p className="mt-6 text-lg text-white/80">
            Taller especializado en vehículos de alta categoría con la última tecnología.
          </p>
        </div>
      </AuroraBackground>

      {/* Dock vertical fijo abajo a la izquierda */}
      <div className="fixed bottom-0 left-4 z-50">
        <FloatingDockVertical />
      </div>
    </>
  );
}
