import React from "react";

import style from "./Botao.module.scss";

interface BotaoProps {
  texto: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Botao = ({ texto, type = "button", onClick }: BotaoProps) => {
  return (
    <button onClick={onClick} className={style.botao} type={type}>
      {texto}
    </button>
  );
};

export default Botao;
