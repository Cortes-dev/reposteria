import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import repostería from "/img/reposteria.png"; // Imagen con fondo transparente

const Header = () => {
  return (
    <section className="relative bg-[#FFF3E9] min-h-screen flex items-center justify-center px-6 py-10 overflow-hidden" id="inicio">
      {/* Imagen de fondo decorativa */}
      <motion.img
        src={repostería}
        alt="Fondo repostería"
        className="absolute right-0 bottom-0 w-full max-w-none opacity-80 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 z-10 relative">
        {/* Texto principal */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#5C3A21] mb-6 leading-tight">
            ¡Recién <span className="text-[#D58B4C]">Horneado!</span>
          </h1>
          <p className="text-lg text-[#6F4E37] mb-6">
            Disfruta de nuestra repostería artesanal. Ingredientes de calidad,
            sabor casero y presentación perfecta.
          </p>
          <Link to="/productos">
          <motion.div
            className="inline-block bg-[#D58B4C] text-white font-semibold px-6 py-3 rounded-xl"
            whileHover={{
              scale: 1.05,
              rotate: -2,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
            whileTap={{ scale: 0.98 }}
            >
              Ver productos
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
