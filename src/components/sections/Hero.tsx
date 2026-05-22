import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = (href: string) => {
    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#FAF8F5] via-white to-[#EAF1F8]"
    >
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0A050]/15 text-[#1A3A5C] text-sm font-medium mb-6 border border-[#F0A050]/30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} className="text-[#F0A050]" />
            Recherche alternance — septembre 2026
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A3A5C] leading-tight mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Salut, je suis <br />
            <span className="bg-gradient-to-r from-[#2E6DA4] to-[#F0A050] bg-clip-text text-transparent">
              Debora Takouessa
            </span>
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl lg:text-2xl text-[#2E6DA4] font-semibold mb-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full Stack Developer & AI Engineer
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Étudiante en Master Informatique à l'INSA Hauts-de-France, je conçois
            des applications web et mobiles modernes en y intégrant de
            l'intelligence artificielle pour résoudre des problèmes concrets.
          </motion.p>

          <motion.div
            className="flex items-center gap-2 text-sm text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <MapPin size={16} className="text-[#F0A050]" />
            Paris, France — mobilité nationale
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => handleScroll("#contact")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1A3A5C] to-[#2E6DA4] text-white font-semibold shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me contacter
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              onClick={() => handleScroll("#projects")}
              className="px-6 py-3 rounded-full bg-white text-[#1A3A5C] font-semibold border-2 border-[#1A3A5C] flex items-center gap-2 hover:bg-[#1A3A5C] hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Voir mes projets
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#2E6DA4] to-[#F0A050] rounded-full blur-3xl opacity-20"></div>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#1A3A5C] via-[#2E6DA4] to-[#F0A050] flex items-center justify-center shadow-2xl">
              <div className="w-[94%] h-[94%] rounded-full bg-[#FAF8F5] flex items-center justify-center">
                <span className="text-7xl sm:text-8xl font-extrabold bg-gradient-to-br from-[#1A3A5C] to-[#F0A050] bg-clip-text text-transparent">
                  DT
                </span>
              </div>
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 bg-white rounded-2xl px-4 py-3 shadow-xl border-l-4 border-[#F0A050]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-xs text-gray-500">Spécialité</div>
              <div className="text-sm font-bold text-[#1A3A5C]">IA & Big Data</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
