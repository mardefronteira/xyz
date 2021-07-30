//importar react
import React from "react";
// importar estilos
import { FundoRodape, LinkRodape, NavRodape } from "./style";

const Rodape = () => {
  return (
    <FundoRodape>
      <NavRodape>
        <LinkRodape>ig: @marcelamancino</LinkRodape>
        {" | "}
        <LinkRodape>email: marcelamancino@pm.me</LinkRodape>
      </NavRodape>
    </FundoRodape>
  );
};

export default Rodape;
