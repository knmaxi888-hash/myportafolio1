import { useScrollReveal } from '../hooks/useScrollReveal'

const SI = 'https://cdn.simpleicons.org'

const tools = [
  { name: 'OpenCode', icon: `${SI}/opencode/1C2E1E` },
  { name: 'ChatGPT', icon: `${SI}/openai/10a37f` },
  { name: 'Claude Code', icon: `${SI}/anthropic/d97706` },
  { name: 'VS Code', icon: `${SI}/visualstudiocode/007acc` },
  { name: 'Git', icon: `${SI}/git/f05032` },
  { name: 'GitHub', icon: `${SI}/github/1C2E1E` },
  { name: 'Docker', icon: `${SI}/docker/2496ed` },
  { name: 'Linux', icon: `${SI}/linux/fcc624` },
  { name: 'Node.js', icon: `${SI}/nodedotjs/339933` },
  { name: 'React', icon: `${SI}/react/61dafb` },
  { name: 'Next.js', icon: `${SI}/nextdotjs/1C2E1E` },
  { name: 'Express', icon: `${SI}/express/5A635A` },
  { name: 'TypeScript', icon: `${SI}/typescript/3178c6` },
  { name: 'JavaScript', icon: `${SI}/javascript/f7df1e` },
  { name: 'HTML5', icon: `${SI}/html5/e34f26` },
  { name: 'CSS3', icon: `${SI}/css3/1572b6` },
  { name: 'TailwindCSS', icon: `${SI}/tailwindcss/06b6d4` },
  { name: 'PostgreSQL', icon: `${SI}/postgresql/4169e1` },
  { name: 'MongoDB', icon: `${SI}/mongodb/47a248` },
  { name: 'MySQL', icon: `${SI}/mysql/4479a1` },
  { name: 'Firebase', icon: `${SI}/firebase/ffca28` },
  { name: 'Supabase', icon: `${SI}/supabase/3ecf8e` },
  { name: 'Vercel', icon: `${SI}/vercel/1C2E1E` },
  { name: 'Cloudflare', icon: `${SI}/cloudflare/f38020` },
]

export default function Herramientas() {
  const { ref: headerRef, isVisible: headerVis } = useScrollReveal()

  return (
    <section className="relative bg-[#FAFBF9] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${headerVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[#4D6D47] uppercase text-sm font-medium tracking-wider mb-3">
            Herramientas
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-black">
            Herramientas que utilizo
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolCard({ tool, index }: { tool: typeof tools[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-[#F1F3F1] transition-all duration-500 ease-out hover:shadow-lg hover:shadow-emerald-950/5 hover:border-[#4D6D47]/20 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${Math.min(index * 30, 400)}ms` }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white border border-[#F1F3F1] transition-transform duration-300 group-hover:scale-110 p-2">
        <img
          src={tool.icon}
          alt={tool.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-xs text-[#5A635A] text-center leading-tight font-medium">
        {tool.name}
      </span>
    </div>
  )
}
