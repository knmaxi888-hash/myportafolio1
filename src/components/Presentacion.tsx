import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Presentacion() {
  const { ref: ref1, isVisible: vis1 } = useScrollReveal()
  const { ref: ref2, isVisible: vis2 } = useScrollReveal()
  const { ref: ref3, isVisible: vis3 } = useScrollReveal()

  return (
    <section id="sobre-mi" className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={ref1}
          className={`transition-all duration-700 ease-out ${vis1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[#4D6D47] uppercase text-sm font-medium tracking-wider mb-3">
            Sobre mí
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-black leading-tight mb-6">
            Soy desarrollador Full Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Bio text */}
          <div
            ref={ref2}
            className={`transition-all duration-700 ease-out delay-100 ${vis2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <p className="text-[#5A635A] text-lg leading-relaxed mb-6">
              Desde muy joven comencé a aprender programación por mi cuenta, investigando,
              leyendo documentación, viendo cursos y desarrollando proyectos propios.
            </p>
            <p className="text-[#5A635A] text-lg leading-relaxed mb-6">
              Con los años fui adquiriendo experiencia en distintas tecnologías tanto del
              Frontend como del Backend, siempre buscando crear aplicaciones modernas,
              rápidas, escalables y con un excelente diseño.
            </p>
            <p className="text-[#5A635A] text-lg leading-relaxed">
              Actualmente trabajo como Freelancer desarrollando soluciones web completas.
            </p>
          </div>

          {/* Right: Stats */}
          <div
            ref={ref3}
            className={`transition-all duration-700 ease-out delay-200 ${vis3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="bg-[#FAFBF9] border border-[#F1F3F1] rounded-2xl p-8 flex flex-col gap-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-semibold text-[#1C2E1E]">100%</span>
                <span className="text-[#5A635A] text-sm">Autodidacta</span>
              </div>
              <div className="h-px bg-[#F1F3F1]" />
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-semibold text-[#1C2E1E]">20+</span>
                <span className="text-[#5A635A] text-sm">Tecnologías dominadas</span>
              </div>
              <div className="h-px bg-[#F1F3F1]" />
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-semibold text-[#1C2E1E]">∞</span>
                <span className="text-[#5A635A] text-sm">Ganas de aprender</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
