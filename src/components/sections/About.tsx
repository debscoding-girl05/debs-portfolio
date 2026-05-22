import { Code2, Brain, Rocket, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Développement Full Stack",
    description:
      "Je construis des applications web et mobiles complètes — du frontend React/TypeScript au backend Node.js — avec un souci constant de qualité et de performance.",
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description:
      "Je conçois des solutions qui intègrent des modèles de Machine Learning (TensorFlow, PyTorch) et des LLMs (Groq, OpenAI) pour créer des produits réellement intelligents.",
  },
  {
    icon: Rocket,
    title: "DevSecOps & Industrialisation",
    description:
      "Je mets en place des pipelines CI/CD GitHub Actions, conteneurise avec Docker et applique les bonnes pratiques Agile pour livrer rapidement et sereinement.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-[#FAF8F5] to-[#EAF1F8]"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#F0A050]/15 text-[#1A3A5C] text-sm font-semibold mb-3">
            À propos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3A5C] mb-4">
            Qui suis-je ?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2E6DA4] to-[#F0A050] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 mb-12 border-l-4 border-[#F0A050]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1A3A5C]/10 flex items-center justify-center">
              <GraduationCap className="text-[#1A3A5C]" size={26} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1A3A5C] mb-2">
                Étudiante passionnée, à la recherche d'une alternance
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Je suis actuellement en <strong>Master Informatique à l'INSA Hauts-de-France</strong>,
                après une Licence en IA & Big Data obtenue avec la mention Très
                Bien (16,46/20). Je recherche une <strong>alternance pour septembre 2026</strong>{" "}
                afin de mettre mes compétences au service de projets ambitieux.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Basée au <strong>Cameroun</strong>, je suis ouverte à la{" "}
                <strong>mobilité nationale</strong>. Ce qui m'anime : créer des
                produits techniques qui ont du sens, à l'intersection du
                développement logiciel et de l'IA appliquée.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2E6DA4] to-[#F0A050] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-white" size={26} />
              </div>
              <h3 className="text-lg font-bold text-[#1A3A5C] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
