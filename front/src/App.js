import "./App.css";
import Menu from "./componentes/Menu/index";
import Base from "./componentes/Base/index";
import Carrossel from "./componentes/Carrossel/index";

function App() {
  return (
    <div className="App">
      <Base>
        <Carrossel />
        <header className="App-header">
          <p className="menu">Aqui vai um belíssimo menu</p>
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
    </div>
  );
}

export default App;
