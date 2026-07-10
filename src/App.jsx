import './App.css'
import TodoApp from './component/TodoApp'
import Saludo from './component/Saludo';
import Persona from './component/Persona';
import Contador from './component/Contador';

function App() {
  const notas = [
      { id: crypto.randomUUID(), text: "Soy la nota 1" },
      { id: crypto.randomUUID(), text: "Soy la nota 2" }
    ]

  return (
    <section className="contenedor">
       <h1 className="titulo">Mi Práctica de React</h1>

       <div className="seccion">
         <Saludo />
       </div>

       <div className="seccion">
         <Persona nombre="Ana" edad={28} />
       </div>

       <div className="seccion">
         <Contador />
       </div>

       <div className="seccion">
         <TodoApp notas={notas} />
       </div>
     </section>
   );
}

export default App;
