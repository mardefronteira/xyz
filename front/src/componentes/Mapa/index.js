//importar react
import React from "react";
// importar estilos
import { Projetos, ImgMapa, FundoMapa } from "./style";

const Mapa = () => {
  return (
    <FundoMapa>
      <div>
        <ImgMapa src="/imagens/00.png"></ImgMapa>
      </div>
      <div>
        <Projetos>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
          <li>projeto</li>
        </Projetos>
      </div>
    </FundoMapa>
  );
};

export default Mapa;
