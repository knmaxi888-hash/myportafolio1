import { useScrollReveal } from '../hooks/useScrollReveal'

const quotes = [
  'La programacion no es solo escribir codigo, sino resolver problemas.',
  'Cada proyecto representa una oportunidad para aprender algo nuevo.',
  'La mejora continua forma parte de mi forma de trabajar.',
]

export default function Filosofia() {
  const { ref: headerRef, isVisible: headerVis } = useScrollReveal()

  return (
    <section className="relative bg-[#1C2E1E] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${headerVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[#4D6D47] uppercase text-sm font-medium tracking-wider mb-3">
            Filosofia
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white">
            Como pienso el desarrollo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((quote, i) => (
            <QuoteCard key={i} quote={quote} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function QuoteCard({ quote, index }: { quote: string; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2)

  return (
    <div
      ref={ref}
      className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-700 ease-out hover:bg-white/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="text-[#4D6D47] text-5xl font-serif leading-none select-none">
        &ldquo;
      </span>
      <p className="text-white/80 text-lg leading-relaxed mt-4">
        {quote}
      </p>
    </div>
  )
}
