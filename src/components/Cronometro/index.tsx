import Botao from "../Botao";
import styles from "./Cronometro.module.scss";
import Relogio from "./Relogio";

const Cronometro = () => {
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
