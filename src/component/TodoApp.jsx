function TodoApp(props) {
  return (
      <div>
        <h2>Lista de Notas</h2>
        <ul className="lista">
          {props.notas.map((nota) => (
            <li key={nota.id}>{nota.text}</li>
          ))}
        </ul>
      </div>
    );
  }

export default TodoApp;
