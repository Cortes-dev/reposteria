import React from "react";

import Header from "../components/Header";
import Productos from "./Productos";
import SobreNosotros from "./SobreNosotros";
import Contacto from "./Contacto";
const Home = () => {
  return (
    <>
      <Header />
      <Productos />
      <SobreNosotros />
      <Contacto />
    </>
  );
};

export default Home;
