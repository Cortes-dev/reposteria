import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Productos from "./views/Productos";
import SobreNosotros from "./views/SobreNosotros";
import Contacto from "./views/Contacto";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#productos" element={<Productos />} />
        <Route path="/#sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/#contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;
