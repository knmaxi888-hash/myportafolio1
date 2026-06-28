import { useScrollReveal } from '../hooks/useScrollReveal'

const tools = [
  { name: 'OpenCode', color: '#1C2E1E', letter: 'OC' },
  { name: 'ChatGPT', color: '#10a37f', letter: 'GPT' },
  { name: 'Claude Code', color: '#d97706', letter: 'CC' },
  { name: 'VS Code', color: '#007acc', letter: 'VS' },
  { name: 'Git', color: '#f05032', letter: 'GI' },
  { name: 'GitHub', color: '#1C2E1E', letter: 'GH' },
  { name: 'Docker', color: '#2496ed', letter: 'DK' },
  { name: 'Linux', color: '#fcc624', letter: 'LX' },
  { name: 'Node.js', color: '#339933', letter: 'NJ' },
  { name: 'React', color: '#61dafb', letter: 'RE' },
  { name: 'Next.js', color: '#1C2E1E', letter: 'NX' },
  { name: 'Express', color: '#5A635A', letter: 'EX' },
  { name: 'TypeScript', color: '#3178c6', letter: 'TS' },
  { name: 'JavaScript', color: '#f7df1e', letter: 'JS' },
  { name: 'HTML5', color: '#e34f26', letter: 'H5' },
  { name: 'CSS3', color: '#1572b6', letter: 'CS' },
  { name: 'TailwindCSS', color: '#06b6d4', letter: 'TW' },
  { name: 'PostgreSQL', color: '#4169e1', letter: 'PG' },
  { name: 'MongoDB', color: '#47a248', letter: 'MG' },
  { name: 'MySQL', color: '#4479a1', letter: 'MY' },
  { name: 'Firebase', color: '#ffca28', letter: 'FB' },
  { name: 'Supabase', color: '#3ecf8e', letter: 'SB' },
  { name: 'Vercel', color: '#1C2E1E', letter: 'VC' },
  { name: 'Cloudflare', color: '#f38020', letter: 'CF' },
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
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xs font-bold transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: tool.color }}
      >
        {tool.letter}
      </div>
      <span className="text-xs text-[#5A635A] text-center leading-tight font-medium">
        {tool.name}
      </span>
    </div>
  )
}
