//importar react
import React from "react";
// importar componentes
import Card from "../Card/index";
// importar estilos
import { FundoCarrossel, ConteinerCards, TituloAnimado } from "./style";

const Carrossel = ({ c }) => {
  // pegar trabalhos da categoria como objeto
  const categoria = [
    {
      titulo: "ÂMAGO",
      desc:
        "Morbi cursus dignissim lacus, eu vestibulum est imperdiet nec. Ut id dolor at risus semper fringilla tempor sit amet eros. Vivamus at pretium lectus. Cras dictum ante tempus elit pharetra molestie.",
      img: "",
    },
    {
      titulo: "ÂMAGO",
      desc:
        "Morbi cursus dignissim lacus, eu vestibulum est imperdiet nec. Ut id dolor at risus semper fringilla tempor sit amet eros. Vivamus at pretium lectus. Cras dictum ante tempus elit pharetra molestie.",
      img: "",
    },
    {
      titulo: "ÂMAGO",
      desc:
        "Morbi cursus dignissim lacus, eu vestibulum est imperdiet nec. Ut id dolor at risus semper fringilla tempor sit amet eros. Vivamus at pretium lectus. Cras dictum ante tempus elit pharetra molestie.",
      img: "",
    },
  ];

  return (
    <FundoCarrossel>
      <TituloAnimado>
        • TÍTULO • TÍTULO • TÍTULO • TÍTULO •TÍTULO • TÍTULO • TÍTULO • TÍTULO •
      </TituloAnimado>
      <ConteinerCards>
        <p>{"<"}</p>
        <Card
          img={categoria[0].img}
          titulo={categoria[0].titulo}
          desc={categoria[0].desc}
        ></Card>
        <Card
          img={categoria[1].img}
          titulo={categoria[1].titulo}
          desc={categoria[1].desc}
        ></Card>
        <Card
          img={categoria[2].img}
          titulo={categoria[2].titulo}
          desc={categoria[2].desc}
        ></Card>
        <p>{">"}</p>
      </ConteinerCards>
    </FundoCarrossel>
  );
};

export default Carrossel;
