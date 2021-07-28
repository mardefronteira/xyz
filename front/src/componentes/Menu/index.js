//importar react
import React from "react";
// importar estilos
import { FundoMenu, LinkMenu, LogoMenu, NavMenu, LinguaMenu } from "./style";

const Menu = () => {
  return (
    <FundoMenu>
      <LogoMenu href="">MARCELA MANCINO</LogoMenu>
      <NavMenu>
        <LinkMenu>sobre</LinkMenu>
        <LinkMenu>agenda</LinkMenu>
        <LinkMenu>
          <LinguaMenu id="lingua-br">br</LinguaMenu>|
          <LinguaMenu id="lingua-en" className="cinza">
            en
          </LinguaMenu>
        </LinkMenu>
        <LinkMenu>MAPA</LinkMenu>
      </NavMenu>
    </FundoMenu>
  );
};

export default Menu;
