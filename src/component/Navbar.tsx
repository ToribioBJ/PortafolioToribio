import { useState, useEffect } from 'react';
import { Terminal, Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'INICIO', href: '#Inicio' },
    { name: 'PROYECTOS', href: '#projects' },
    { name: 'HABILIDADES', href: '#skills' },
    { name: 'CONTACTO', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-md border-green-500/20 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <div className="hidden md:flex items-center gap-10 ">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-mono tracking-[0.3em] text-gray-400 hover:text-green-400 transition-colors group relative"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-500 transition-all group-hover:w-full shadow-[0_0_8px_#22c55e]"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;