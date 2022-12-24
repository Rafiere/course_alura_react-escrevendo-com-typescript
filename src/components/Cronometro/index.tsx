import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { Tarefa } from "../../types/tarefa";
import Botao from "../Botao";
import styles from "./Cronometro.module.scss";
import Relogio from "./Relogio";

interface CronometroProps {
  selecionado: Tarefa | undefined;
  finalizarTarefa: () => void;
}

const Cronometro = ({ selecionado }: CronometroProps) => {
  /* Estamos tipando o "useState" para number diretamente. */
  const [tempo, setTempo] = useState<number>();

  /* Sempre que o "selecionado" for alterado, essa função será executada. */
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  const regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
    }, 1000);
  };

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro.</p>
      <div className={styles.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)} texto="Começar!" />
    </div>
  );
};

export default Cronometro;
