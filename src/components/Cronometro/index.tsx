import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { Tarefa } from "../../types/tarefa";
import Botao from "../Botao";
import styles from "./Cronometro.module.scss";
import Relogio from "./Relogio";

interface CronometroProps {
  selecionado: Tarefa | undefined;
}

const Cronometro = ({ selecionado }: CronometroProps) => {
  /* Estamos tipando o "useState" para number diretamente. */
  const [tempo, setTempo] = useState<number>();

  if (selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado.tempo));
  }

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro.</p>
      <div className={styles.relogioWrapper}>
        <Relogio />
      </div>
      <Botao texto="Começar!" />
    </div>
  );
};

export default Cronometro;
