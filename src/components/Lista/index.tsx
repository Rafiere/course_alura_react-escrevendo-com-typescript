/* O "Functional Component" é a nova forma de escrevermos um componente no React. */

const Lista = () => {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
  ];

  return (
    <aside>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => {
          return (
            <li key={index}>
              <h3>{tarefa.tarefa}</h3>
              <span>{tarefa.tempo}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Lista;
