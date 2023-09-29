import React, { useState, useEffect } from "react";

const RelojDigital = ({ allBatchesProcessed }) => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!allBatchesProcessed) {
        // Incrementa el contador de segundos
        setSegundos((prevSegundos) => (prevSegundos + 1) % 60);

        // Actualiza los minutos cuando se alcanzan 60 segundos
        if (segundos === 59) {
          setMinutos((prevMinutos) => prevMinutos + 1);
        }
      }
    }, 1000); // Actualiza cada segundo

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [segundos]);

  return (
    <div>
      <h3>Contador Global</h3>
      <p>
        {String(minutos).padStart(2, "0")}:{String(segundos).padStart(2, "0")}
      </p>
    </div>
  );
};

export default RelojDigital;
