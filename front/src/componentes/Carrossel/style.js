import styled from "styled-components";

export const ConteinerCards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`;

export const TituloAnimado = styled.h2`
  font-family: "Assistant", sans-serif;
  font-weight: 500;
  font-size: 3.75rem;
  padding: 0;
  padding-bottom: 3vh;
  margin: 0;
`;

export const FundoCarrossel = styled.div`
  background-color: ${(props) => `var(--${props.corFundo || "branco"})`};
  padding: 5vh 0;
  width: 100%;
  height: auto;

  margin-bottom: 5vh;
`;

export const SetaCarrossel = styled.button`
  font-family: "Assistant", sans-serif;
  font-weight: 800;
  font-size: 5rem;
  background: none;
  border: none;
  cursor: pointer;
`;
