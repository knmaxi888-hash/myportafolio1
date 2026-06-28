import { useScrollReveal } from '../hooks/useScrollReveal'

const education = [
  {
    level: 'Educación Primaria',
    school: 'E.P.E.P Nº246',
    name: 'José De San Martín',
  },
  {
    level: 'Educación Secundaria',
    school: 'E.P.E.S Nº8',
    name: 'Dr. Bernardo A. Houssay',
  },
  {
    level: 'Educación Universitaria',
    school: 'Universidad Siglo 21',
    name: 'Licenciatura en Radiología',
    status: 'Actualmente cursando',
  },
]

export default function Formacion() {
  const { ref: headerRef, isVisible: headerVis } = useScrollReveal()

  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${headerVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[#4D6D47] uppercase text-sm font-medium tracking-wider mb-3">
            Formación
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-black">
            Educación
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2)

  return (
    <div
      ref={ref}
      className={`group bg-[#FAFBF9] border border-[#F1F3F1] rounded-2xl p-8 flex flex-col items-start transition-all duration-700 ease-out hover:shadow-lg hover:shadow-emerald-950/5 hover:border-[#4D6D47]/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="text-[#4D6D47] text-xs font-medium uppercase tracking-wider mb-4">
        {edu.level}
      </span>
      <h3 className="text-xl font-medium text-black mb-1">
        {edu.school}
      </h3>
      <p className="text-[#5A635A] text-sm">
        {edu.name}
      </p>
      {'status' in edu && edu.status && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#4D6D47] font-medium bg-[#4D6D47]/10 px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 bg-[#4D6D47] rounded-full animate-pulse" />
          {edu.status}
        </span>
      )}
    </div>
  )
}
