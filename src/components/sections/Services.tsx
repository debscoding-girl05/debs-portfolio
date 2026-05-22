import { Globe, Smartphone, Brain, Database } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Applications Web",
    description:
      "Je développe des applications web modernes, performantes et accessibles avec React, TypeScript et Tailwind CSS.",
    features: ["React / TypeScript", "API REST & Firebase", "UI responsive"],
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description:
      "Je crée des apps mobiles cross-platform avec React Native, connectées à des backends robustes.",
    features: ["React Native", "Firebase / Supabase", "UX soignée"],
  },
  {
    icon: Brain,
    title: "Intégration IA",
    description:
      "J'intègre du Machine Learning et des LLMs dans des produits concrets : chatbots, assistants, automatisations.",
    features: ["TensorFlow / PyTorch", "API LLM (Groq, OpenAI)", "NLP & vision"],
  },
  {
    icon: Database,
    title: "Data & DevSecOps",
    description:
      "Je structure les données et automatise les workflows avec des pipelines CI/CD sécurisés.",
    features: ["PostgreSQL / MySQL", "GitHub Actions / Docker", "Power BI"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-tl from-[#EAF1F8] via-white to-[#FAF8F5]"
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
            Ce que je propose
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3A5C] mb-4">
            Mes domaines d'expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2E6DA4] to-[#F0A050] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.7 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#F0A050]"
            >
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1A3A5C] to-[#2E6DA4] flex items-center justify-center shadow-md">
                  <service.icon className="text-white" size={26} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#1A3A5C] mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-5 text-center text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-gray-700 text-sm"
                  >
                    <span className="w-2 h-2 bg-[#F0A050] rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
