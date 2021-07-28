//importar react
import React from "react";
//importar componentes
import Menu from "../Menu/index";
// importar estilos
import { Pagina } from "./style";

const Base = ({ children }) => {
  return (
    <>
      <Menu />
      <Pagina>{children}</Pagina>
    </>
  );
};

export default Base;
