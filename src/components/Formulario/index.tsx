import React from "react";

const Formulario = () => {
  return (
    <form>
      <div>
        <label htmlFor="tarefa">Adicionar Novo Estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div>
        <label>Tempo</label>
        <input
          type="time"
          step="1"
          min="00:00:00"
          max="01:30:00"
          name="tempo"
          id="tempo"
          required
        />
      </div>
    </form>
  );
};

export default Formulario;
