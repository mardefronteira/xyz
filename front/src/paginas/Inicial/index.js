import "./style.js";
// importar componentes
import Base from "../../componentes/Base/index";
import Carrossel from "../../componentes/Carrossel/index";
import Mapa from "../../componentes/Mapa/index";

// importar dados db falsa
import db from "../../mockDB";

const Inicial = () => {
  return (
    <Base>
      <Mapa />
      <Carrossel categoria={db} corFundo={"cinzaClaro"} />
      <Carrossel categoria={db} />
    </Base>
  );
};

export default Inicial;
