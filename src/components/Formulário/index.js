import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./form.css";

function Formulario({ onSubmitInfo, timesArray }) {
  const aoSalvar = (event) => {
    event.preventDefault();
    onSubmitInfo({
      nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          required
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          setValue={(valor) => setNome(valor)}
        />
        <CampoTexto
          required
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          setValue={(valor) => setCargo(valor)}
        />
        <CampoTexto
          required
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          setValue={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          required
          label="Time"
          itens={timesArray}
          value={time}
          setValue={(valor) => setTime(valor)}
        />
        <Botao>Adicionar card</Botao>
      </form>
    </section>
  );
}

export default Formulario;
