import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveLink?: string;
  gradient: string;
  emoji: string;
};

const projects: Project[] = [
  {
    title: "AidMate",
    description:
      "Assistant médical IA multilingue : guidance des premiers secours en 52 langues, protocoles WHO intégrés, accessible partout dans le monde.",
    technologies: ["React", "Node.js", "TensorFlow", "Python"],
    liveLink: "https://aidmateassist.vercel.app",
    gradient: "from-[#2E6DA4] to-[#1A3A5C]",
    emoji: "🩺",
  },
  {
    title: "MonArgent AI",
    description:
      "Assistant financier conversationnel WhatsApp pour les non-bancarisés en Afrique francophone, avec paiements Mobile Money via CinetPay.",
    technologies: ["Node.js", "TypeScript", "LLM Groq", "Supabase", "WhatsApp API"],
    gradient: "from-[#F0A050] to-[#2E6DA4]",
    emoji: "💬",
  },
  {
    title: "Jaam",
    description:
      "Application full stack de gestion RH (employés, congés, performance) avec un module IA intégré pour l'aide à la décision.",
    technologies: ["React", "Node.js", "PostgreSQL", "Python", "TensorFlow"],
    gradient: "from-[#1A3A5C] to-[#2E6DA4]",
    emoji: "👥",
  },
  {
    title: "Gestion Agence Bus",
    description:
      "Plateforme web + application mobile pour la gestion d'une agence de bus : réservations, suivi, dashboard administrateur. Architecture MVC + API REST.",
    technologies: ["React", "TypeScript", "React Native", "SQL"],
    liveLink: "https://gestion-bus-react-website-dashboard.vercel.app",
    gradient: "from-[#2E6DA4] to-[#F0A050]",
    emoji: "🚌",
  },
  {
    title: "DevSecOps Workflow IA",
    description:
      "Pipeline CI/CD automatisé avec revue de code intelligente par LLM : détection de vulnérabilités et suggestions d'amélioration à chaque pull request.",
    technologies: ["GitHub Actions", "Python", "API LLM", "Docker"],
    gradient: "from-[#1A3A5C] to-[#F0A050]",
    emoji: "⚙️",
  },
  {
    title: "AdminDBFoodDeliv",
    description:
      "Dashboard administrateur pour une application de livraison de nourriture : gestion des commandes, des restaurants et statistiques temps réel.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/debscoding-girl05/AdminDBFoodDeliv",
    gradient: "from-[#F0A050] to-[#1A3A5C]",
    emoji: "🍽️",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#F0A050]/15 text-[#1A3A5C] text-sm font-semibold mb-3">
            Réalisations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3A5C] mb-4">
            Mes projets
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2E6DA4] to-[#F0A050] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Une sélection de projets que j'ai conçus et développés, alliant
            développement full stack et intelligence artificielle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 * (index % 3) }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <span className="text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {project.emoji}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1A3A5C] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#EAF1F8] text-[#1A3A5C] rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-3 border-t border-gray-100">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-[#1A3A5C] hover:text-[#F0A050] transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-[#1A3A5C] hover:text-[#F0A050] transition-colors"
                    >
                      <ExternalLink size={16} />
                      Démo live
                    </a>
                  )}
                  {!project.github && !project.liveLink && (
                    <span className="text-xs text-gray-400 italic">
                      Projet privé / en cours
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
