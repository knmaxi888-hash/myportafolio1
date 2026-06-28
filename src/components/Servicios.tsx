import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  { title: 'Desarrollo Web', description: 'Aplicaciones web completas con las mejores tecnologias del mercado.' },
  { title: 'Landing Pages', description: 'Paginas de alto impacto disenadas para convertir visitantes en clientes.' },
  { title: 'APIs REST', description: 'Backend robusto y escalable con endpoints seguros y documentados.' },
  { title: 'Automatizacion', description: 'Scripts y flujos de trabajo automatizados para ahorrar tiempo.' },
  { title: 'Sistemas Web', description: 'Plataformas completas de gestion, admin panels y dashboards.' },
  { title: 'Dashboards', description: 'Paneles de control con visualizacion de datos en tiempo real.' },
  { title: 'Integraciones', description: 'Conexion entre servicios, APIs externas y terceros.' },
  { title: 'Optimizacion', description: 'Mejora de rendimiento, SEO y experiencia de usuario.' },
  { title: 'Mantenimiento', description: 'Soporte continuo, actualizaciones y correccion de bugs.' },
  { title: 'Consultoria', description: 'Asesoramiento tecnico para elegir las mejores soluciones.' },
]

export default function Servicios() {
  const { ref: headerRef, isVisible: headerVis } = useScrollReveal()

  return (
    <section id="proyectos" className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${headerVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[#4D6D47] uppercase text-sm font-medium tracking-wider mb-3">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-black">
            Que puedo hacer por vos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`group bg-[#FAFBF9] border border-[#F1F3F1] rounded-2xl p-6 transition-all duration-500 ease-out hover:shadow-lg hover:shadow-emerald-950/5 hover:border-[#4D6D47]/20 hover:-translate-y-0.5 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${Math.min(index * 50, 400)}ms` }}
    >
      <div className="w-10 h-10 rounded-xl bg-[#1C2E1E] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
        <span className="text-white text-sm font-mono">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="text-lg font-medium text-[#1C2E1E] mb-2">
        {service.title}
      </h3>
      <p className="text-[#5A635A] text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  )
}
