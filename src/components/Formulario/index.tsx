import React, { useState } from "react";
import { Tarefa } from "../../types/tarefa";
import Botao from "../Botao";

import { v4 as uuidv4 } from "uuid";

import style from "./Formulario.module.scss";

interface FormularioProps {
  setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}

const Formulario = (props: FormularioProps) => {
  const [texto, setTexto] = useState("");
  const [tempo, setTempo] = useState("00:00");

  const adicionarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
    console.log(texto);

    evento.preventDefault();
    props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        id: uuidv4(),
        tarefa: texto,
        tempo: tempo,
        selecionado: false,
        completado: false,
      },
    ]);
    setTexto("");
    setTempo("00:00");
  };

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          id="tempo"
          min="00:00:00"
          max="23:59:59"
          required
        />
      </div>
      <Botao texto="Adicionar" type={"submit"} />
    </form>
  );
};

export default Formulario;
