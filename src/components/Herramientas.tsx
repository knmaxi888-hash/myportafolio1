import { useScrollReveal } from '../hooks/useScrollReveal'

const SI = 'https://cdn.simpleicons.org'

function ChatGPTIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  )
}

function VSCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M17.583 1.277l-7.2 6.315-3.402-2.557L5 4.727 2.417 6.277v11.446l2.583 1.55 1.981-1.327 3.402-2.557 7.2 6.315L22 20.321V3.679zM6.931 13.219l-2.348 1.565V9.216l2.348 1.565zm8.944-5.256L9.432 12l6.443 4.037z" />
    </svg>
  )
}

const SI_ICONS: Record<string, string> = {
  'Claude Code': `${SI}/claudecode/d97706`,
  'Git': `${SI}/git/f05032`,
  'GitHub': `${SI}/github/1C2E1E`,
  'Docker': `${SI}/docker/2496ed`,
  'Linux': `${SI}/linux/fcc624`,
  'Node.js': `${SI}/nodedotjs/339933`,
  'React': `${SI}/react/61dafb`,
  'Next.js': `${SI}/nextdotjs/1C2E1E`,
  'Express': `${SI}/express/5A635A`,
  'TypeScript': `${SI}/typescript/3178c6`,
  'JavaScript': `${SI}/javascript/f7df1e`,
  'HTML5': `${SI}/html5/e34f26`,
  'CSS3': `${SI}/css/1572b6`,
  'TailwindCSS': `${SI}/tailwindcss/06b6d4`,
  'PostgreSQL': `${SI}/postgresql/4169e1`,
  'MongoDB': `${SI}/mongodb/47a248`,
  'MySQL': `${SI}/mysql/4479a1`,
  'Firebase': `${SI}/firebase/ffca28`,
  'Supabase': `${SI}/supabase/3ecf8e`,
  'Vercel': `${SI}/vercel/1C2E1E`,
  'Cloudflare': `${SI}/cloudflare/f38020`,
}

const tools = [
  { name: 'OpenCode', custom: 'opencode' },
  { name: 'ChatGPT', custom: 'chatgpt' },
  { name: 'Claude Code', si: true },
  { name: 'VS Code', custom: 'vscode' },
  { name: 'Git', si: true },
  { name: 'GitHub', si: true },
  { name: 'Docker', si: true },
  { name: 'Linux', si: true },
  { name: 'Node.js', si: true },
  { name: 'React', si: true },
  { name: 'Next.js', si: true },
  { name: 'Express', si: true },
  { name: 'TypeScript', si: true },
  { name: 'JavaScript', si: true },
  { name: 'HTML5', si: true },
  { name: 'CSS3', si: true },
  { name: 'TailwindCSS', si: true },
  { name: 'PostgreSQL', si: true },
  { name: 'MongoDB', si: true },
  { name: 'MySQL', si: true },
  { name: 'Firebase', si: true },
  { name: 'Supabase', si: true },
  { name: 'Vercel', si: true },
  { name: 'Cloudflare', si: true },
]

function ToolIcon({ tool }: { tool: typeof tools[0] }) {
  if (tool.custom === 'chatgpt') return <ChatGPTIcon />
  if (tool.custom === 'vscode') return <VSCodeIcon />
  if (tool.custom === 'opencode') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-8h2v8zm-2-10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      </svg>
    )
  }
  if (tool.si && SI_ICONS[tool.name]) {
    return <img src={SI_ICONS[tool.name]} alt={tool.name} className="w-full h-full" loading="lazy" />
  }
  return null
}

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
        <ToolIcon tool={tool} />
      </div>
      <span className="text-xs text-[#5A635A] text-center leading-tight font-medium">
        {tool.name}
      </span>
    </div>
  )
}
