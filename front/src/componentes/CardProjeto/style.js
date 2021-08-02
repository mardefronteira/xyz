import styled from "styled-components";
import { Link } from "react-router-dom";

export const Subtitulo = styled.h3`
  font-family: "Assistant", sans-serif;
  font-weight: 600;
  font-size: 2.08rem;
`;

export const FundoCard = styled(Link)`
  width: 20vw;
  height: auto;
  text-align: left;
  text-decoration: none;
  color: inherit;
  padding: 4vh 2vw;
  transition-duration: 0.7s;

  &:hover,
  &:focus {
    box-shadow: 2px 2px 5px teal;
  }
`;

export const Desc = styled.div`
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: 1rem;
`;

export const ImagemCard = styled.img`
  width: 100%;
  height: auto;
`;
