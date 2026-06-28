import { useScrollReveal } from '../hooks/useScrollReveal'

const categories = [
  {
    name: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS'],
  },
  {
    name: 'Backend',
    techs: ['Node.js', 'Express', 'Python', 'REST APIs'],
  },
  {
    name: 'Bases de datos',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Supabase'],
  },
  {
    name: 'DevOps',
    techs: ['Docker', 'Git', 'GitHub', 'Linux', 'Vercel', 'Cloudflare'],
  },
  {
    name: 'Herramientas',
    techs: ['VS Code', 'OpenCode', 'ChatGPT', 'Claude Code'],
  },
  {
    name: 'Inteligencia Artificial',
    techs: ['ChatGPT', 'Claude Code', 'OpenCode'],
  },
]

export default function Tecnologias() {
  const { ref: headerRef, isVisible: headerVis } = useScrollReveal()

  return (
    <section className="relative bg-[#FAFBF9] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${headerVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[#4D6D47] uppercase text-sm font-medium tracking-wider mb-3">
            Stack
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-black">
            Tecnologias
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.name} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ category, index }: { category: typeof categories[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <div
      ref={ref}
      className={`group bg-white border border-[#F1F3F1] rounded-2xl p-6 transition-all duration-700 ease-out hover:shadow-lg hover:shadow-emerald-950/5 hover:border-[#4D6D47]/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <h3 className="text-lg font-medium text-[#1C2E1E] mb-4">
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.techs.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-xs font-medium text-[#5A635A] bg-[#FAFBF9] border border-[#F1F3F1] rounded-full transition-all duration-200 group-hover:bg-[#4D6D47]/10 group-hover:text-[#4D6D47] group-hover:border-[#4D6D47]/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
