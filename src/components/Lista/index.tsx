/* O "Functional Component" é a nova forma de escrevermos um componente no React. */

import { Tarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

interface ListaProps {
  tarefas: Tarefa[];
}

const Lista = (props: ListaProps) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {props.tarefas.map((item, index) => (
          <Item
            key={index}
            tarefa={item.tarefa}
            tempo={item.tempo}
            completado={item.completado}
            selecionado={item.selecionado}
            id={item.id}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Lista;
