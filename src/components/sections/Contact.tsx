import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ouvre le client mail par défaut avec le contenu pré-rempli.
    const body = encodeURIComponent(
      `Bonjour Debora,\n\n${form.message}\n\n— ${form.name} (${form.email})`
    );
    const subject = encodeURIComponent(form.subject || "Contact via portfolio");
    window.location.href = `mailto:dtakouessa@gmail.com?subject=${subject}&body=${body}`;
    setSuccessMessage("Merci ! Votre client mail va s'ouvrir.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-tl from-[#EAF1F8] via-white to-[#FAF8F5]"
    >
      <motion.div
        className="container mx-auto px-6 max-w-6xl"
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          <span className="inline-block px-4 py-1 rounded-full bg-[#F0A050]/15 text-[#1A3A5C] text-sm font-semibold mb-3">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3A5C] mb-4">
            Travaillons ensemble
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2E6DA4] to-[#F0A050] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Une opportunité d'alternance, un projet à discuter ou simplement
            envie d'échanger ? N'hésitez pas à me contacter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            variants={itemAnimation}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border-t-4 border-[#F0A050]"
          >
            <h3 className="text-2xl font-bold text-[#1A3A5C] mb-6">
              Mes coordonnées
            </h3>
            <ContactDetail
              icon={<Mail className="w-6 h-6 text-white" />}
              label="Email"
              value="dtakouessa@gmail.com"
              href="mailto:dtakouessa@gmail.com"
            />
            <ContactDetail
              icon={<MapPin className="w-6 h-6 text-white" />}
              label="Localisation"
              value="Paris, France — mobilité nationale"
            />
            <ContactDetail
              icon={<Github className="w-6 h-6 text-white" />}
              label="GitHub"
              value="github.com/debscoding-girl05"
              href="https://github.com/debscoding-girl05"
              external
            />
            <ContactDetail
              icon={<Linkedin className="w-6 h-6 text-white" />}
              label="LinkedIn"
              value="linkedin.com/in/debora-takouessa"
              href="https://linkedin.com/in/debora-takouessa"
              external
            />

            <div className="pt-6 border-t border-gray-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0A050]/15 text-[#1A3A5C] text-sm font-semibold">
                <CheckCircle2 size={16} className="text-[#F0A050]" />
                Disponible pour alternance 2026
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={itemAnimation}
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-5 border-t-4 border-[#2E6DA4]"
          >
            <FormField
              id="name"
              label="Nom"
              type="text"
              value={form.name}
              onChange={handleChanges}
            />
            <FormField
              id="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={handleChanges}
            />
            <FormField
              id="subject"
              label="Sujet"
              type="text"
              value={form.subject}
              onChange={handleChanges}
            />
            <FormField
              id="message"
              label="Message"
              value={form.message}
              onChange={handleChanges}
              textarea
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="focus:outline-none bg-gradient-to-r from-[#1A3A5C] to-[#2E6DA4] w-full text-white py-3 px-6 rounded-xl font-bold hover:from-[#2E6DA4] hover:to-[#F0A050] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Envoyer le message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {successMessage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white shadow-2xl rounded-2xl px-6 py-4 flex items-center gap-3 border-l-4 border-[#F0A050]">
            <CheckCircle2 className="text-[#F0A050]" size={22} />
            <p className="text-[#1A3A5C] font-medium">{successMessage}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  textarea = false,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  textarea?: boolean;
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-semibold text-[#1A3A5C] mb-2"
    >
      {label}
    </label>
    {textarea ? (
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        rows={4}
        className="focus:outline-none w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent transition-all duration-300 hover:border-[#2E6DA4]/50"
        required
      ></textarea>
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="focus:outline-none w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent transition-all duration-300 hover:border-[#2E6DA4]/50"
        required
      />
    )}
  </div>
);

const ContactDetail = ({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) => {
  const content = (
    <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
      <div className="bg-gradient-to-br from-[#1A3A5C] to-[#2E6DA4] p-3 rounded-xl shadow-md">
        {icon}
      </div>
      <div className="ml-4">
        <p className="font-semibold text-[#1A3A5C]">{label}</p>
        <p className="text-gray-600 text-sm break-all">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="block"
      >
        {content}
      </a>
    );
  }
  return content;
};

export default Contact;
