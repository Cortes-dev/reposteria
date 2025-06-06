import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categorias = {
  Donas: [
    { nombre: "Dona de Chocolate", img: "/img/donas/dona chocolate.png" },
    { nombre: "Dona Azucarada", img: "/img/donas/azucarada.png" },
    { nombre: "Dona Rellena", img: "/img/donas/rellena.png" },
  ],
  Conchas: [
    { nombre: "Concha de Chocolate", img: "/img/conchas/chocolate.png" },
    { nombre: "Concha de Vainilla", img: "/img/conchas/vainilla.png" },
    { nombre: "Concha de Fresa", img: "/img/conchas/fresa.png" },
  ],
  Pasteles: [
    { nombre: "Pastel Tres Leches", img: "/img/pasteles/tresleches.png" },
    { nombre: "Pastel Chocolate", img: "/img/pasteles/chocolate.png" },
    { nombre: "Pastel Red Velvet", img: "/img/pasteles/redvelvet.png" },
  ],
  Galletas: [
    { nombre: "Galleta de Mantequilla", img: "/img/galletas/mantequilla.png" },
    { nombre: "Galleta de Avena", img: "/img/galletas/avena.png" },
    { nombre: "Galleta con Chispas", img: "/img/galletas/chispas.png" },
  ],
};

const Productos = () => {
  const [seleccion, setSeleccion] = useState("Donas");

  return (
    <section
    className="bg-[#FFF7F2] min-h-screen flex flex-col justify-center items-center px-6 py-10"
    id="productos"
  >
    <div className="w-full max-w-7xl text-center">
      <h2 className="text-4xl font-bold text-[#5C3A21] mb-6">
        Categorías de Productos
      </h2>
  
      {/* Botones */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(categorias).map((cat) => (
          <button
            key={cat}
            onClick={() => setSeleccion(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              seleccion === cat
                ? "bg-[#D58B4C] text-white"
                : "bg-white border border-[#D58B4C] text-[#5C3A21] hover:bg-[#f6e0d0]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
  
      {/* Galería animada */}
      <AnimatePresence mode="wait">
        <motion.div
          key={seleccion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {categorias[seleccion].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={item.img}
                alt={item.nombre}
                className="w-full h-48 object-contain mb-4"
              />
              <h4 className="text-lg font-semibold text-[#6F4E37]">
                {item.nombre}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  </section>
  
  );
};

export default Productos;
