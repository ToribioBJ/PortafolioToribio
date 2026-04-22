// src/components/Skills.tsx
import {
  FaJava, FaPhp, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaTable, FaFigma, FaBootstrap
} from 'react-icons/fa';
import {
  SiSpringboot, SiAngular, SiMysql, SiReact, SiVite, SiTailwindcss, SiPostgresql
} from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      title: "Lenguajes de Programación",
      icons: [
        { name: "Java", icon: <FaJava />, color: "text-red-500" },
        { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
        { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
      ]
    },
    {
      title: "Frontend & Diseño UI/UX",
      icons: [
        { name: "React", icon: <SiReact />, color: "text-cyan-400" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-500" },
        { name: "Vite", icon: <SiVite />, color: "text-purple-500" },
        { name: "Angular", icon: <SiAngular />, color: "text-red-600" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
        { name: "Figma", icon: <FaFigma />, color: "text-pink-500" },
      ]
    },
    {
      title: "Backend & Bases de Datos",
      icons: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
      ]
    },
    {
      title: "Herramientas & Otros",
      icons: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
        { name: "GitHub", icon: <FaGithub />, color: "text-white" },
        { name: "Excel", icon: <FaTable />, color: "text-green-700" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto overflow-hidden text-left">
      <div className="mb-16">
        <h2 className="text-2xl font-mono text-green-500 flex items-center gap-2 tracking-tighter">
          ./HABILIDADES_TECNICAS
        </h2>
        <div className="h-[2px] w-24 bg-green-500 mt-2 shadow-[0_0_10px_#22c55e]"></div>
      </div>

      <div className="flex flex-col gap-16">
        {categories.map((cat, i) => (
          <div key={i} className="w-full">
            <h3 className="text-gray-500 font-mono text-[10px] uppercase mb-8 tracking-[0.3em] border-l-2 border-green-500 pl-4">
              {"//"} {cat.title}
            </h3>

            <div className="flex justify-start gap-10 md:gap-14 flex-wrap pl-4">
              {cat.icons.map((item, j) => (
                <div
                  key={j}
                  className="group relative flex flex-col items-center"
                  title={item.name}
                >
                  <div className={`text-6xl ${item.color} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]`}>
                    {item.icon}
                  </div>
                  <span className="absolute -bottom-6 text-[9px] font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;