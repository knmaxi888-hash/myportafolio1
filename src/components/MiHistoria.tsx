import { useScrollReveal } from '../hooks/useScrollReveal'

const milestones = [
  {
    year: 'Inicio',
    title: 'Primeros pasos',
    description: 'Comencé a aprender programación de forma completamente autodidacta, investigando por mi cuenta.',
  },
  {
    year: 'Aprendizaje',
    title: 'Múltiples lenguajes',
    description: 'Estudié numerosos lenguajes por cuenta propia: JavaScript, Python, TypeScript, SQL y más.',
  },
  {
    year: 'Dedicación',
    title: 'Cientos de horas',
    description: 'Pasé cientos de horas aprendiendo nuevas tecnologías, leyendo documentación y practicando.',
  },
  {
    year: 'Evolución',
    title: 'Frontend + Backend',
    description: 'Dominé tecnologías tanto del Frontend como del Backend, creando aplicaciones completas.',
  },
  {
    year: 'Pasión',
    title: 'Desarrollo de software',
    description: 'Me apasiona el desarrollo de software. Cada proyecto es una oportunidad para aprender algo nuevo.',
  },
  {
    year: 'Presente',
    title: 'Nunca dejé de aprender',
    description: 'Sigo aprendiendo cada día. La mejora continua es parte de mi forma de trabajar.',
  },
]

export default function MiHistoria() {
  return (
    <section className="relative bg-[#FAFBF9] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#F1F3F1] -translate-x-1/2" />

          {milestones.map((m, i) => (
            <TimelineItem key={i} milestone={m} index={i} isLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeader() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <p className="text-[#4D6D47] uppercase text-sm font-medium tracking-wider mb-3">
        Mi historia
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-black">
        Un camino autodidacta
      </h2>
    </div>
  )
}

function TimelineItem({ milestone, index, isLeft }: { milestone: typeof milestones[0]; index: number; isLeft: boolean }) {
  const { ref, isVisible } = useScrollReveal(0.2)

  return (
    <div
      ref={ref}
      className={`relative flex items-start mb-12 md:mb-0 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Dot */}
      <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-[#4D6D47] rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-white" />

      {/* Content */}
      <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
        <span className="text-[#4D6D47] text-xs font-medium uppercase tracking-wider">
          {milestone.year}
        </span>
        <h3 className="text-lg font-medium text-black mt-1 mb-2">
          {milestone.title}
        </h3>
        <p className="text-[#5A635A] text-sm leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </div>
  )
}
