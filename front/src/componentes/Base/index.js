//importar react
import React from "react";
//importar componentes
import Menu from "../Menu/index";
import Rodape from "../Rodape/index";
// importar estilos
import { Pagina } from "./style";

const Base = ({ children }) => {
  return (
    <>
      <Menu />
      <Pagina>{children}</Pagina>
      <Rodape />
    </>
  );
};

export default Base;
