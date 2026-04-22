import { FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import FotoPerfil from '../assets/FotoPerfil.png';

const About = () => {
    return (
        <section id="Inicio" className="relative py-24 px-6 md:px-10 max-w-6xl mx-auto">
            <div className="mb-12">
                <h2 className="text-2xl font-mono text-green-500 flex items-center gap-2">
                    SOBRE_MI
                </h2>
                <div className="h-[1px] w-20 bg-green-500 mt-2 shadow-[0_0_8px_#22c55e]"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] p-8 md:p-12 overflow-hidden shadow-2xl">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center order-2 lg:order-1">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-green-500/20 rounded-2xl blur-xl group-hover:bg-green-500/40 transition duration-500"></div>
                            <div className="relative w-64 h-80 md:w-80 md:h-[500px] border-2 border-green-500/30 rounded-2xl overflow-hidden bg-neutral-900">
                                <img
                                    src={FotoPerfil}
                                    alt="Jose Adrian Toribio Barron"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent h-20 w-full animate-scanline pointer-events-none"></div>
                            </div>

                        </div>
                    </div>
                    <div className="space-y-6 order-1 lg:order-2">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-2">
                                Desarrollador de software
                            </h3>
                            <p className="text-green-400 font-mono text-sm tracking-widest uppercase">Base: Lima, Perú</p>
                        </div>

                        <div className="space-y-4 text-gray-300 font-sans text-lg leading-relaxed">
                            Soy Jose Adrian Toribio Barron, estudiante de Ingeniería de Sistemas e Informática (Ciclo 8) con formación integral en desarrollo de software, desarrollo
                            web, bases de datos y soporte TI. Experiencia académica en análisis, diseño e implementación de sistemas informáticos.
                            Interesado en realizar prácticas preprofesionales en áreas de sistemas, desarrollo de software, desarrollo web o soporte
                            tecnológico.
                        </div>

                        <div className="pt-8 border-t border-white/10 mt-8">
                            <p className="text-[10px] font-mono text-green-500/50 uppercase tracking-[0.3em] mb-4">Social_Links</p>
                            <div className="flex gap-4">

                                {/* LINKEDIN */}
                                <a
                                    href="https://www.linkedin.com/in/jos%C3%A9-toribio-810271287/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                                >
                                    <FaLinkedinIn size={18} className="text-gray-400 group-hover:text-blue-400" />
                                    <span className="text-xs font-mono text-gray-400 group-hover:text-white uppercase tracking-tighter">LinkedIn</span>
                                </a>

                                {/* INSTAGRAM */}
                                <a
                                    href="https://www.instagram.com/toribiobarron_adrian/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 group"
                                >
                                    <FaInstagram size={18} className="text-gray-400 group-hover:text-pink-400" />
                                    <span className="text-xs font-mono text-gray-400 group-hover:text-white uppercase tracking-tighter">Instagram</span>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;