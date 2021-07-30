//importar react
import React, { useState } from "react";
// importar componentes
import Card from "../Card/index";
// importar estilos
import {
  FundoCarrossel,
  ConteinerCards,
  TituloAnimado,
  SetaCarrossel,
} from "./style";

const Carrossel = ({ c }) => {
  // pegar trabalhos da categoria como objeto
  const categoria = [
    {
      titulo: "ÂMAGO",
      desc:
        "Morbi cursus dignissim lacus, eu vestibulum est imperdiet nec. Ut id dolor at risus semper fringilla tempor sit amet eros. Vivamus at pretium lectus. Cras dictum ante tempus elit pharetra molestie.",
      img: "00.png",
    },
    {
      titulo: "ÂMAGO",
      desc:
        "Morbi cursus dignissim lacus, eu vestibulum est imperdiet nec. Ut id dolor at risus semper fringilla tempor sit amet eros. Vivamus at pretium lectus. Cras dictum ante tempus elit pharetra molestie.",
      img: "02.png",
    },
    {
      titulo: "ÂMAGO",
      desc:
        "Morbi cursus dignissim lacus, eu vestibulum est imperdiet nec. Ut id dolor at risus semper fringilla tempor sit amet eros. Vivamus at pretium lectus. Cras dictum ante tempus elit pharetra molestie.",
      img: "04.png",
    },
    {
      titulo: "ÂMAGO222",
      desc:
        "Morbi cursus dignissim lacus, eu vestibulum est imperdiet nec. Ut id dolor at risus semper fringilla tempor sit amet eros. Vivamus at pretium lectus. Cras dictum ante tempus elit pharetra molestie.",
      img: "05.png",
    },
    {
      titulo: "ÂMAGO222",
      desc:
        "Morbi cursus dignissim lacus, eu vestibulum est imperdiet nec. Ut id dolor at risus semper fringilla tempor sit amet eros. Vivamus at pretium lectus. Cras dictum ante tempus elit pharetra molestie.",
      img: "03.png",
    },
    {
      titulo: "ÂMAGO222",
      desc:
        "Morbi cursus dignissim lacus, eu vestibulum est imperdiet nec. Ut id dolor at risus semper fringilla tempor sit amet eros. Vivamus at pretium lectus. Cras dictum ante tempus elit pharetra molestie.",
      img: "01.png",
    },
  ];

  // variável pra conter a posição do Carrossel
  const [pos, moverCarrossel] = DefinirPos(0);

  return (
    <FundoCarrossel>
      <TituloAnimado>
        • TÍTULO • TÍTULO • TÍTULO • TÍTULO •TÍTULO • TÍTULO • TÍTULO • TÍTULO •
      </TituloAnimado>
      <ConteinerCards>
        <SetaCarrossel
          className={pos > 0 ? "" : "invisivel"}
          onClick={() => {
            moverCarrossel(-1, categoria.length);
          }}
        >
          {"<"}
        </SetaCarrossel>
        <Card
          img={categoria[pos].img}
          titulo={categoria[pos].titulo}
          desc={categoria[pos].desc}
        ></Card>
        <Card
          img={categoria[pos + 1].img}
          titulo={categoria[pos + 1].titulo}
          desc={categoria[pos + 1].desc}
        ></Card>
        <Card
          img={categoria[pos + 2].img}
          titulo={categoria[pos + 2].titulo}
          desc={categoria[pos + 2].desc}
        ></Card>
        <SetaCarrossel
          className={pos < categoria.length - 3 ? "" : "invisivel"}
          onClick={() => {
            moverCarrossel(1, categoria.length);
          }}
        >
          {">"}
        </SetaCarrossel>
      </ConteinerCards>
    </FundoCarrossel>
  );
};

const DefinirPos = () => {
  const [pos, defPos] = useState(0);

  const moverCarrossel = (direcao, numItens) => {
    let moverPara = pos + 3 * direcao;
    defPos(restringir(moverPara, 0, numItens - 3));
  };

  return [pos, moverCarrossel];
};

const restringir = (val, min, max) => {
  if (val < min) {
    val = min;
  } else if (val > max) {
    val = max;
  }
  return val;
};

export default Carrossel;
