import styled from "styled-components";
import { Link } from "react-router-dom";

export const FundoRodape = styled.div`
  width: 100%;
  height: auto;
  z-index: 100;

  left: 0;
  right: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--cinzaClaro);
`;

export const LinkRodape = styled.a`
  color: inherit;
  font-family: "Assistant", sans-serif;
  font-weight: 600;
  font-size: 1.33rem;
  text-decoration: none;

  &:hover,
  &:focus {
    color: var(--cinza);
  }
`;

export const NavRodape = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3vh 10vw;
  width: 60vw;
  height: 100%;
`;
