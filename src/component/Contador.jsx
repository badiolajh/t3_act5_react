import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor actual: {contador}</p>
      <button className="boton" onClick={() => setContador(contador + 1)}>Sumar</button>
      <button className="boton" onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
}

export default Contador;
