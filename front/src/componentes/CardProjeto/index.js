//importar react
import React from "react";
// importar estilos
import { FundoCard, Subtitulo, Desc, ImagemCard } from "./style";

const CardProjeto = ({ img, titulo, desc }) => {
  console.log(img);
  return (
    <FundoCard>
      <ImagemCard src={`/imagens/${img}`}></ImagemCard>
      <Subtitulo>{titulo}</Subtitulo>
      <Desc>{desc}</Desc>
    </FundoCard>
  );
};

export default CardProjeto;
