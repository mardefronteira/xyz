//importar react
import React from "react";
// importar estilos
import {
  FundoMenu,
  LinkMenu,
  LogoMenu,
  NavMenu,
  LinguaMenu,
  BuscaMenu,
} from "./style";

const Menu = () => {
  return (
    <FundoMenu>
      <LogoMenu to="/">MARCELA MANCINO</LogoMenu>
      <NavMenu>
        <LinkMenu to="/sobre">sobre</LinkMenu>
        <LinkMenu to="/agenda">agenda</LinkMenu>
        <LinkMenu to="/referencias">jardim</LinkMenu>
        <LinkMenu>
          <LinguaMenu id="lingua-br">br</LinguaMenu>|
          <LinguaMenu id="lingua-en" className="cinza">
            en
          </LinguaMenu>
        </LinkMenu>
        <BuscaMenu type="text" placeholder="buscar"></BuscaMenu>
        <LinkMenu>MAPA</LinkMenu>
      </NavMenu>
    </FundoMenu>
  );
};

export default Menu;
