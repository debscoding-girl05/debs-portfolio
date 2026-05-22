import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Accueil", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Compétences", href: "#technologies" },
    { label: "Services", href: "#services" },
    { label: "Projets", href: "#projects" },
    { label: "Parcours", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-2 bg-transparent">
      <nav className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 bg-[#1A3A5C]/95 backdrop-blur-md rounded-full shadow-xl">
          <motion.a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="flex items-center space-x-3 pl-6 cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F0A050] to-[#2E6DA4] text-white font-bold shadow-md">
              DT
            </div>
            <span className="text-base sm:text-lg font-bold text-white tracking-wide hidden sm:inline">
              Debora Takouessa
            </span>
          </motion.a>

          <div className="hidden lg:flex space-x-5 items-center mr-5">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-200 hover:text-[#F0A050] transition-colors text-sm font-medium group relative"
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F0A050] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            <motion.a
              href="https://github.com/debscoding-girl05"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-2 text-sm font-medium rounded-full text-white flex items-center space-x-2 bg-gradient-to-r from-[#2E6DA4] to-[#F0A050]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              <span>GitHub</span>
            </motion.a>
          </div>

          <div className="lg:hidden absolute right-4">
            <button
              className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute left-[2.5%] top-full w-[95%] mt-2 bg-[#1A3A5C]/95 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 py-6 px-6">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-200 hover:text-[#F0A050] transition-colors text-lg font-medium"
                    onClick={(e) => handleScroll(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="https://github.com/debscoding-girl05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-3 text-center text-white rounded-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#2E6DA4] to-[#F0A050]"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
