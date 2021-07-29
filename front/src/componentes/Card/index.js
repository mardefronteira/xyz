//importar react
import React from "react";
// importar estilos
import { FundoCard, Subtitulo, Desc } from "./style";

const Card = ({ imagem, titulo, desc }) => {
  return (
    <FundoCard>
      <img src={imagem}></img>
      <Subtitulo>{titulo}</Subtitulo>
      <Desc>{desc}</Desc>
    </FundoCard>
  );
};

export default Card;
