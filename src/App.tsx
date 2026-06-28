import Navbar from './components/Navbar'
import BackgroundVideo from './components/BackgroundVideo'
import Hero from './components/Hero'
import Presentacion from './components/Presentacion'
import MiHistoria from './components/MiHistoria'
import Formacion from './components/Formacion'
import Herramientas from './components/Herramientas'
import EntornoTrabajo from './components/EntornoTrabajo'
import Tecnologias from './components/Tecnologias'
import Servicios from './components/Servicios'
import Filosofia from './components/Filosofia'

export default function App() {
  return (
    <div className="relative bg-white text-neutral-900 font-sans selection:bg-[#EAECE9] selection:text-[#1C2E1E] antialiased overflow-x-clip min-h-screen">
      <Navbar />
      <BackgroundVideo />
      <Hero />
      <Presentacion />
      <MiHistoria />
      <Formacion />
      <Herramientas />
      <EntornoTrabajo />
      <Tecnologias />
      <Servicios />
      <Filosofia />
    </div>
  )
}
