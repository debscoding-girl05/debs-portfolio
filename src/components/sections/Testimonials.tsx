import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

type TimelineItem = {
  type: "exp" | "edu" | "cert";
  period: string;
  title: string;
  org: string;
  location?: string;
  description: string;
  tags?: string[];
};

const experiences: TimelineItem[] = [
  {
    type: "exp",
    period: "Fév 2026 — En cours",
    title: "Développeuse Full Stack & IA",
    org: "Mboa Digital",
    location: "Yaoundé",
    description:
      "Développement de Jaam (gestion RH React / Node.js / PostgreSQL), contribution à une plateforme e-learning enrichie par l'IA, mise en place d'outils de gestion des tâches RH.",
    tags: ["React", "Node.js", "PostgreSQL", "IA"],
  },
  {
    type: "exp",
    period: "Jan 2024 — 2025",
    title: "Développeuse Web & Mobile — Stage",
    org: "OpenIntech",
    location: "Yaoundé",
    description:
      "Conception d'un dashboard React pour une plateforme e-learning, développement d'une application mobile de livraison avec React Native et Firebase.",
    tags: ["React", "React Native", "Firebase"],
  },
];

const education: TimelineItem[] = [
  {
    type: "edu",
    period: "2026 — En cours",
    title: "Master Informatique",
    org: "INSA Hauts-de-France",
    location: "France",
    description:
      "Spécialisation en ingénierie logicielle, IA et systèmes distribués. À la recherche d'une alternance pour septembre 2026.",
  },
  {
    type: "edu",
    period: "2022 — 2026",
    title: "Licence IA & Big Data",
    org: "Keyce Academy",
    description:
      "Diplôme obtenu avec la mention Très Bien — moyenne 16,46/20. Formation aux fondamentaux de l'IA, du Machine Learning et de l'analyse de données.",
  },
  {
    type: "cert",
    period: "2022",
    title: "GCE Advanced Level",
    org: "Cambridge",
    description:
      "Grade A en Computer Science et en Mathématiques (équivalent du B2 en anglais).",
  },
];

const iconFor = (type: TimelineItem["type"]) =>
  type === "exp" ? Briefcase : type === "edu" ? GraduationCap : Award;

const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <div className="relative pl-8 sm:pl-10">
    <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#2E6DA4] via-[#F0A050] to-[#1A3A5C]"></div>
    {items.map((item, index) => {
      const Icon = iconFor(item.type);
      return (
        <motion.div
          key={`${item.title}-${index}`}
          className="relative mb-8 last:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 * index }}
        >
          <div className="absolute -left-8 sm:-left-10 top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#2E6DA4] to-[#F0A050] flex items-center justify-center shadow-md border-4 border-white">
            <Icon className="text-white" size={14} />
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="text-xs font-semibold text-[#F0A050] uppercase tracking-wider mb-1">
              {item.period}
            </div>
            <h4 className="text-lg font-bold text-[#1A3A5C]">{item.title}</h4>
            <div className="text-sm font-medium text-[#2E6DA4] mb-2">
              {item.org}
              {item.location ? ` — ${item.location}` : ""}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 bg-[#EAF1F8] text-[#1A3A5C] rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      );
    })}
  </div>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-[#FAF8F5] via-white to-[#EAF1F8]"
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
            Parcours
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3A5C] mb-4">
            Expérience & Formation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2E6DA4] to-[#F0A050] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-[#1A3A5C] mb-6">
              <Briefcase className="text-[#F0A050]" size={22} />
              Expériences professionnelles
            </h3>
            <Timeline items={experiences} />
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-[#1A3A5C] mb-6">
              <GraduationCap className="text-[#F0A050]" size={22} />
              Formation
            </h3>
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
