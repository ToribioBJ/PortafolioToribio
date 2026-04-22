import { FaLinkedinIn, FaInstagram, FaGithub, FaTerminal } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative mt-20 border-t border-green-500/20 bg-black/60 backdrop-blur-xl py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-gray-500 font-mono text-[10px] tracking-[0.2em] uppercase">
            © {currentYear} Jose Adrian Toribio Barron 
          </p>
        </div>

        {/*Redes Sociales */}
        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/jos%C3%A9-toribio-810271287/" 
            target="_blank" 
            className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a 
            href="https://www.instagram.com/toribiobarron_adrian/" 
            target="_blank" 
            className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-110"
            title="Instagram"
          >
            <FaInstagram size={22} />
          </a>
          <a 
            href="https://github.com/TORIBIOBARRON" 
            target="_blank" 
            className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
            title="GitHub"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>


    </footer>
  );
};

export default Footer;