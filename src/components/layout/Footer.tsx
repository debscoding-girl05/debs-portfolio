import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#1A3A5C] via-[#2E6DA4] to-[#1A3A5C] text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F0A050] to-[#2E6DA4] text-white font-bold shadow-md">
                DT
              </div>
              <h3 className="text-xl font-bold">Debora Takouessa</h3>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Full Stack Developer & AI Engineer.
              <br />
              Disponible pour de nouveaux projets et collaborations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#F0A050]">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-200 hover:text-[#F0A050] transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-gray-200 hover:text-[#F0A050] transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-200 hover:text-[#F0A050] transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-200 hover:text-[#F0A050] transition-colors">
                  Parcours
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-[#F0A050] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#F0A050]">Me retrouver</h4>
            <div className="flex space-x-3 mb-4">
              <a
                href="https://github.com/debscoding-girl05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F0A050] flex items-center justify-center transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/debora-takouessa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F0A050] flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:dtakouessa@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F0A050] flex items-center justify-center transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-gray-200 text-sm">Yaoundé, Cameroun</p>
            <p className="text-gray-200 text-sm">dtakouessa@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Debora Takouessa. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1.5">
            Conçu avec <Heart size={14} className="text-[#F0A050] fill-[#F0A050]" /> en React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
