import "./style.js";
// importar componentes
import Base from "../../componentes/Base/index";
import Carrossel from "../../componentes/Carrossel/index";

// importar dados db falsa
import db from "../../mockDB";

const Inicial = () => {
  return (
    <Base>
      <Carrossel categoria={db} />
      <header className="App-header">
        <h1 className="titulo">
          OI EU SOU UM TÍTULO • OI EU SOU UM TÍTULO • OI EU SOU UM TÍTULO •
        </h1>
        <h2 className="subtitulo">Aqui vai um belíssimo subtítulo</h2>
        <p className="desc">Aqui vai uma belíssima descrição</p>
        <p className="destaque">Aqui vai um belíssimo destaque</p>
        <p className="paragrafo">Aqui vai um belíssimo parágrafo</p>
        <p className="logo">Aqui vai uma belíssima logo</p>
        <p className="tag">Aqui vai uma belíssima tag</p>
        <a
          className="link paragrafo"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aqui vai um belíssimo link
        </a>
        <p className="projeto-menu">Aqui vai um belíssimo projeto no menu</p>
        <p className="contato">Aqui vai um belíssimo contato</p>
      </header>
    </Base>
  );
};

export default Inicial;
