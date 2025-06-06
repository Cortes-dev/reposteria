import React from "react";
import { motion } from "framer-motion";
import sobreImg from "/img/nose.png"; // imagen decorativa (opcional)

const SobreNosotros = () => {
  return (
    <section className="bg-[#FFF3E9] min-h-screen px-6 py-16 flex flex-col justify-center items-center" id="sobre-nosotros">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Imagen a la izquierda */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={sobreImg}
            alt="Panadería artesanal"
            className="w-full h-auto rounded-xl shadow-xl object-contain"
          />
        </motion.div>

        {/* Texto a la derecha */}
        <motion.div
          className="md:w-1/2 w-full text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C3A21] mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-[#6F4E37] leading-relaxed mb-4">
            En <span className="text-[#D58B4C] font-semibold">Dulce Encanto</span> nos
            especializamos en crear experiencias dulces e inolvidables. Cada uno de nuestros productos
            está elaborado con ingredientes de alta calidad, técnicas tradicionales y un toque de amor casero.
          </p>
          <p className="text-lg text-[#6F4E37] leading-relaxed">
            Nuestro compromiso es ofrecerte la mejor repostería artesanal, con sabores únicos y presentaciones que enamoran.
            Ya sea una concha recién horneada o un pastel personalizado, queremos ser parte de tus momentos especiales.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SobreNosotros;
