import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Brain,
  GitBranch,
  BarChart3,
} from "lucide-react";

type SkillGroup = {
  icon: typeof Code2;
  title: string;
  color: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    icon: Code2,
    title: "Frontend",
    color: "from-[#2E6DA4] to-[#1A3A5C]",
    skills: [
      "React",
      "TypeScript",
      "React Native",
      "Angular",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-[#1A3A5C] to-[#2E6DA4]",
    skills: [
      "Node.js",
      "Express",
      "REST API",
      "Firebase",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    icon: Brain,
    title: "IA & Data",
    color: "from-[#F0A050] to-[#2E6DA4]",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "API LLM (Groq, OpenAI)",
    ],
  },
  {
    icon: GitBranch,
    title: "DevSecOps",
    color: "from-[#2E6DA4] to-[#F0A050]",
    skills: [
      "Git / GitHub",
      "CI/CD",
      "GitHub Actions",
      "Docker",
      "Agile / Scrum",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Viz",
    color: "from-[#1A3A5C] to-[#F0A050]",
    skills: ["Power BI", "Dashboards interactifs"],
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 bg-[#FAF8F5]">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#F0A050]/15 text-[#1A3A5C] text-sm font-semibold mb-3">
            Stack technique
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3A5C] mb-4">
            Mes compétences
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2E6DA4] to-[#F0A050] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-md`}
                >
                  <group.icon className="text-white" size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#1A3A5C]">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-[#EAF1F8] text-[#1A3A5C] text-sm font-medium border border-[#2E6DA4]/20 hover:border-[#F0A050] hover:bg-[#F0A050]/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-bold text-[#1A3A5C] mb-3 text-center">
            Langues
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#1A3A5C] to-[#2E6DA4] text-white text-sm font-semibold">
              Français — natif
            </span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#2E6DA4] to-[#F0A050] text-white text-sm font-semibold">
              Anglais — courant (B2)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
