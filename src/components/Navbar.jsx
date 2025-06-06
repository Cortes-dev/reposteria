import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Productos", href: "#productos" },
  { name: "Sobre Nosotros", href: "#sobre-nosotros" },
  { name: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-[#8B5E3C] text-white px-6 py-4 shadow-md fixed top-0 left-0 right-0 z-50 shadow-yellow-300"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="text-2xl font-bold tracking-wide">
          Dulce Encanto
        </a>

        {/* Botón de menú en móviles */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navegación en desktop */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-lg font-medium hover:text-yellow-200 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Navegación móvil animada */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col mt-4 gap-4 px-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium hover:text-yellow-200 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
