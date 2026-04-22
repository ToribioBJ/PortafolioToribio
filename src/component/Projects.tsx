import { FaGithub, FaDatabase, FaLayerGroup, FaShieldAlt } from 'react-icons/fa';
import { SiSpringboot, SiAngular, SiMysql, SiReact, SiVite} from 'react-icons/si';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto overflow-hidden text-left">
      
      <div className="mb-16">
        <h2 className="text-2xl font-mono text-green-500 flex items-center gap-2 tracking-tighter">
          ./PROYECTOS
        </h2>
        <div className="h-[2px] w-24 bg-green-500 mt-2 shadow-[0_0_10px_#22c55e]"></div>
      </div>

      <div className="group space-y-12">
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-[10px] font-mono text-green-400 uppercase tracking-widest">
              PROYECTO_DESTACADO
            </span>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            PERU<span className="text-green-500">MARKET</span> ERP
          </h3>
          
          <p className="text-gray-400 font-sans text-xl leading-relaxed max-w-3xl">
            Sistema integral de gestión empresarial diseñado para optimizar inventarios, ventas y proveedores. Implementado bajo **Arquitectura Hexagonal**, garantiza robustez, seguridad de datos y una administración eficiente de recursos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-12">
          
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl group-hover:border-green-500/20 transition-all">
            <div className="flex items-center gap-4 mb-4 text-green-500">
              <FaDatabase className="text-2xl" />
              <h4 className="text-white font-bold text-lg">Inventario Global</h4>
            </div>
            <p className="text-gray-500 font-sans text-sm">Control de stock en tiempo real con alertas automáticas de reabastecimiento.</p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl group-hover:border-green-500/20 transition-all">
            <div className="flex items-center gap-4 mb-4 text-green-500">
              <FaShieldAlt className="text-2xl" />
              <h4 className="text-white font-bold text-lg">Seguridad & Roles</h4>
            </div>
            <p className="text-gray-500 font-sans text-sm">Autenticación JWT y Spring Security para control de permisos detallados.</p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl group-hover:border-green-500/20 transition-all md:col-span-2">
            <div className="flex items-center gap-4 mb-4 text-green-500">
              <FaLayerGroup className="text-2xl" />
              <h4 className="text-white font-bold text-lg">Reportes Estratégicos</h4>
            </div>
            <p className="text-gray-500 font-sans text-sm">Módulo que genera análisis financieros y de ventas para la toma de decisiones.</p>
          </div>
        </div>

        {/*STACK TECNOLÓGICO */}
        <div className="border-t border-white/5 pt-12 space-y-6">
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">TECNOLOGIAS USADAS</p>
          <div className="flex flex-wrap gap-x-12 gap-y-8 text-5xl items-center text-gray-400 group-hover:text-green-500 transition-colors duration-500">
        
            <SiSpringboot title="Spring Boot" />
            <SiReact title="Angular" />
            <SiVite title="Vite" />
            <SiMysql title="MySQL" />
            <FaGithub title="Git Control" />
          </div>
        </div>

        {/* BOTÓN */}
        <div className="pt-8">
          <button className="px-6 py-3 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-green-500 transition-colors flex items-center gap-2">
            Ver Documentación del Sistema <FaGithub />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;