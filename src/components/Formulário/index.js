import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./form.css";

function Formulario({
  onSubmitInfoUser,
  onSubmitInfoTeam,
  timesArray,
  uuidv4,
}) {
  const aoSalvarUser = (event) => {
    event.preventDefault();
    onSubmitInfoUser({
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

  const aoSalvarTime = (event) => {
    event.preventDefault();
    onSubmitInfoTeam({
      id: uuidv4,
      nome: nomeTime,
      cor: corTime,
    });

    setNomeTime("");
    setCorTime("");
  };

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  return (
    <section className="formulario">
      <form onSubmit={aoSalvarUser}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          required
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          setValue={(valor) => setNome(valor)}
        />
        <Campo
          required
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          setValue={(valor) => setCargo(valor)}
        />
        <Campo
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
      <form onSubmit={aoSalvarTime}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          required
          label="Nome"
          placeholder="Digite o nome do time"
          value={nomeTime}
          setValue={(valor) => setNomeTime(valor)}
        />
        <Campo
          required
          label="Cor"
          placeholder="Digite a cor do time"
          value={corTime}
          setValue={(valor) => setCorTime(valor)}
        />
        <Campo
          type="color"
          required
          placeholder="Digite a cor do time"
          value={corTime}
          setValue={(valor) => setCorTime(valor)}
        />

        <Botao>Adicionar time</Botao>
      </form>
    </section>
  );
}

export default Formulario;
