import { useScrollReveal } from '../hooks/useScrollReveal'

const workspaceItems = [
  { label: 'Terminal Linux', icon: '>' },
  { label: 'VS Code', icon: '{}' },
  { label: 'Código fuente', icon: '</>' },
  { label: 'Monitores', icon: '=:=' },
  { label: 'Consolas', icon: '$' },
  { label: 'Git', icon: '⌥' },
  { label: 'Docker', icon: '⬢' },
  { label: 'Desarrollo Web', icon: '◎' },
  { label: 'Servidores', icon: '▣' },
  { label: 'Arquitectura', icon: '⬡' },
]

export default function EntornoTrabajo() {
  const { ref: headerRef, isVisible: headerVis } = useScrollReveal()

  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${headerVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[#4D6D47] uppercase text-sm font-medium tracking-wider mb-3">
            Entorno
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-black">
            Mi entorno de trabajo
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {workspaceItems.map((item, i) => (
            <WorkspaceCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkspaceCard({ item, index }: { item: typeof workspaceItems[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`group relative aspect-square bg-[#1C2E1E] rounded-2xl flex flex-col items-center justify-center gap-3 overflow-hidden transition-all duration-500 ease-out hover:scale-[1.03] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${Math.min(index * 50, 400)}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4D6D47]/0 to-[#4D6D47]/0 group-hover:from-[#4D6D47]/10 group-hover:to-[#4D6D47]/5 transition-all duration-500" />

      <span className="text-3xl text-white/80 group-hover:text-white transition-colors duration-300 font-mono">
        {item.icon}
      </span>
      <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors duration-300 text-center px-2">
        {item.label}
      </span>
    </div>
  )
}
