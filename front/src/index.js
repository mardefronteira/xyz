import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sobre from "./paginas/Sobre";
import Agenda from "./paginas/Agenda";
import Refs from "./paginas/Refs";
import Projeto from "./paginas/Projeto";
import Categoria from "./paginas/Categoria";
import Busca from "./paginas/Busca";
import Inicial from "./paginas/Inicial";
import QuatroZeroQuatro from "./paginas/QuatroZeroQuatro";
//import ReactGA from 'react-ga';

//ReactGA.initialize('');
// ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/sobre" component={Sobre}></Route>
      <Route path="/agenda" component={Agenda}></Route>
      <Route path="/referencias" component={Refs}></Route>
      <Route path="/projeto/:id" component={Projeto}></Route>
      <Route path="/categoria/:id" component={Categoria}></Route>
      <Route path="/busca/:chave" component={Busca} />
      <Route path="/" component={Inicial} exact />
      <Route component={QuatroZeroQuatro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
