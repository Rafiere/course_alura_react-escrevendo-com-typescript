import { Tarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface ItemProps {
  id: string;
  tarefa: string;
  tempo: string;
  selecionado: boolean;
  completado: boolean;
  selecionaTarefa: (tarefaSelecionada: Tarefa) => void;
}

const Item = ({
  id,
  tarefa,
  tempo,
  selecionado,
  completado,
  selecionaTarefa,
}: ItemProps) => {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        completado ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completado &&
        selecionaTarefa({
          tarefa,
          tempo,
          completado,
          id,
          selecionado,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && (
        <span className={style.concluido} aria-label="Tarefa completada"></span>
      )}
    </li>
  );
};

export default Item;
