import React from "react";
import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <section className="bg-[#FFF3E9] min-h-screen px-6 py-16 flex flex-col justify-center items-center" id="contacto">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#5C3A21] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contáctanos
        </motion.h2>
        <p className="text-[#6F4E37] mb-10">
          ¿Tienes dudas o quieres hacer un pedido personalizado? Escríbenos y
          nos pondremos en contacto contigo.
        </p>

        <motion.form
          className="bg-white shadow-md rounded-xl p-8 space-y-6 text-left"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block text-[#5C3A21] font-medium mb-1">
              Nombre
            </label>
            <input
              type="text"
              className="w-full border border-[#D58B4C] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D58B4C]"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div>
            <label className="block text-[#5C3A21] font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              className="w-full border border-[#D58B4C] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D58B4C]"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div>
            <label className="block text-[#5C3A21] font-medium mb-1">
              Mensaje
            </label>
            <textarea
              rows="4"
              className="w-full border border-[#D58B4C] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D58B4C]"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="bg-[#D58B4C] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#bb713a] transition"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar mensaje
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contacto;
