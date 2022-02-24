import "./App.css";
import React from "react";
import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import CondicionalComIf from "./components/CondicionalComIf";

export default (props) => (
  <div>
    <Card titulo="#05 - Condicional v2">
      <CondicionalComIf numero={10} />
    </Card>
    <Card titulo="#05 - Condicional v1">
      <Condicional numero={11} />
    </Card>
    <Card titulo="#04 - Repetição">
      <Repeticao />
    </Card>
    <Card titulo="Primeiro componente">
      <Primeiro />
    </Card>
    <Card titulo="Componente com parâmetro">
      <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
    </Card>
    <Card titulo="Componente com filhos">
      <ComFilhos>
        <ul>
          <li>Adriano</li>
          <li>Meire</li>
          <li>Neia</li>
          <li>Gabriel</li>
          <li>Igor</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="Exercício X">Conteudo</Card>
    {/* <ComFilhos>
            <ul>
                <li>Adriano</li>
                <li>Meire</li>
                <li>Neia</li>
                <li>Gabriel</li>
                <li>Igor</li>
            </ul>
        </ComFilhos> */}
    {/* <Primeiro />
        <ComParametro 
            titulo="Esse é o título"
            subtitulo="Esse é o subtítulo" /> */}
  </div>
);
