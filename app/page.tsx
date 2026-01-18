import { AuroraBackground } from "@/components/ui/aurora-background";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

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
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#6a00ba] to-[#0070ba] text-white font-semibold uppercase tracking-wide shadow-[0_0_30px_rgba(106,0,186,0.6)] transition-all duration-300 hover:scale-105"
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
      </AuroraBackground>

      {/* SECCIÓN DE SERVICIOS */}
      <section id="servicios" className="min-h-screen bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Nuestros Servicios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {/* Card - Diagnósticos */}
            <DirectionAwareHover
              imageUrl="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000"
              className="w-80 h-80"
            >
              <p className="font-bold text-2xl">Diagnósticos</p>
              <p className="font-normal text-sm mt-2">
                Servicio mecánico para ayudar a identificar una falla en específico o situaciones anormales en el carro.
              </p>
            </DirectionAwareHover>

            {/* Card - Alineación y Balanceo */}
            <DirectionAwareHover
              imageUrl="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000"
              className="w-80 h-80"
            >
              <p className="font-bold text-2xl">Alineación y Balanceo</p>
              <p className="font-normal text-sm mt-2">
                Fundamentales para alargar la vida útil de la suspensión, las llantas del vehículo y mantener la seguridad.
              </p>
            </DirectionAwareHover>

            {/* Card - Service */}
            <DirectionAwareHover
              imageUrl="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1000"
              className="w-80 h-80"
            >
              <p className="font-bold text-2xl">Service</p>
              <p className="font-normal text-sm mt-2">
                Mantenimiento multimarca para asegurar un correcto funcionamiento de tu vehículo.
              </p>
            </DirectionAwareHover>

            {/* Card - Frenos */}
            <DirectionAwareHover
              imageUrl="https://images.unsplash.com/photo-1601933470928-3f3a3f04e3d3?q=80&w=1000"
              className="w-80 h-80"
            >
              <p className="font-bold text-2xl">Frenos</p>
              <p className="font-normal text-sm mt-2">
                Reparación o cambio de discos y pastillas, cilindros, mordazas, bomba de frenos, cintas y campanas, freno de mano y cables de mando, válvulas compensadoras.
              </p>
            </DirectionAwareHover>

            {/* Card - Transmisión */}
            <DirectionAwareHover
              imageUrl="https://images.unsplash.com/photo-1601933470928-3f3a3f04e3d3?q=80&w=1000"
              className="w-80 h-80"
            >
              <p className="font-bold text-2xl">Transmisión</p>
              <p className="font-normal text-sm mt-2">
                Reparación, mantenimiento y sustitución de cajas de cambios automáticas y manuales.
              </p>
            </DirectionAwareHover>

            {/* Card - Motor */}
            <DirectionAwareHover
              imageUrl="https://images.unsplash.com/photo-1601933470928-3f3a3f04e3d3?q=80&w=1000"
              className="w-80 h-80"
            >
              <p className="font-bold text-2xl">Motor</p>
              <p className="font-normal text-sm mt-2">
                Ajustes y reparación de motores a nafta o diesel, regresando todas las partes del motor a su lugar original.
              </p>
            </DirectionAwareHover>

            {/* Card - Suspensión y Amortiguación */}
            <DirectionAwareHover
              imageUrl="https://images.unsplash.com/photo-1601933470928-3f3a3f04e3d3?q=80&w=1000"
              className="w-80 h-80"
            >
              <p className="font-bold text-2xl">Suspensión y Amortiguación</p>
              <p className="font-normal text-sm mt-2">
                Reparación o cambio de bastidores, espirales, amortiguadores, fuelles y bujes de goma.
              </p>
            </DirectionAwareHover>

            {/* Card - Distribución */}
            <DirectionAwareHover
              imageUrl="https://images.unsplash.com/photo-1601933470928-3f3a3f04e3d3?q=80&w=1000"
              className="w-80 h-80"
            >
              <p className="font-bold text-2xl">Distribución</p>
              <p className="font-normal text-sm mt-2">
                Cambio de correa de distribución, tensores, correas de accesorios, alternador y bomba de agua.
              </p>
            </DirectionAwareHover>

            {/* Card - Dirección */}
            <DirectionAwareHover
              imageUrl="https://images.unsplash.com/photo-1601933470928-3f3a3f04e3d3?q=80&w=1000"
              className="w-80 h-80"
            >
              <p className="font-bold text-2xl">Dirección</p>
              <p className="font-normal text-sm mt-2">
                Servicio especializado en sistemas de dirección para un control seguro y preciso del vehículo.
              </p>
            </DirectionAwareHover>
          </div>
        </div>
      </section>
    </>
  );
}
