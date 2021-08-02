//importar react
import React from "react";
// importar estilos
import { FundoRodape, LinkRodape, NavRodape } from "./style";

const Rodape = () => {
  return (
    <FundoRodape>
      <NavRodape>
        <LinkRodape
          href="https://instagram.com/marcelamancino"
          target="_blank"
          rel="noopener noreferrer"
        >
          ig: @marcelamancino
        </LinkRodape>
        {" | "}
        <LinkRodape>email: marcelamancino@pm.me</LinkRodape>
      </NavRodape>
    </FundoRodape>
  );
};

export default Rodape;
