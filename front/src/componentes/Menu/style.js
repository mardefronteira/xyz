import styled from "styled-components";

export const FundoMenu = styled.div`
  width: 100%;
  height: auto;
  z-index: 100;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--cinzaClaro);
  border-bottom: 2px solid var(--cinza);
`;

export const LogoMenu = styled.a`
  color: inherit;
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  font-size: 2.91rem;
  padding: 0.7vh 0;
  text-decoration: none;
  &:hover,
  &:focus {
    color: var(--cinza);
  }
`;

export const LinguaMenu = styled.button`
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 1.16rem;
  border: none;
  background: none;
`;

export const LinkMenu = styled.a`
  color: inherit;
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 1.16rem;
  text-decoration: none;

  &:hover,
  &:focus {
    color: var(--cinza);
    font-weight: 500;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  right: 5%;
  width: 40vw;
  height: 100%;
`;
