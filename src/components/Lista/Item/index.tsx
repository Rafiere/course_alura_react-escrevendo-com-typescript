import style from "./Item.module.scss";

interface ItemProps {
  id: string;
  tarefa: string;
  tempo: string;
  selecionado: boolean;
  completado: boolean;
}

const Item = ({ id, tarefa, tempo, selecionado, completado }: ItemProps) => {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};

export default Item;
