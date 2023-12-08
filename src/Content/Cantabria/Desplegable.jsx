import React, { useState } from "react";
import Suma from "../Cantabria/images/anadir.png";

const ComponenteDesplegable = () => {
  // Estado para controlar el despliegue de cada botón
  const [botones, setBotones] = useState([
    { id: 1, desplegado: false },
    { id: 2, desplegado: false },
    { id: 3, desplegado: false },
    { id: 4, desplegado: false },
    // Agrega más botones según sea necesario
  ]);

  // Función para alternar el estado de despliegue de un botón específico
  const alternarDespliegue = (id) => {
    setBotones((prevState) =>
      prevState.map((boton) =>
        boton.id === id ? { ...boton, desplegado: !boton.desplegado } : boton
      )
    );
  };

  return (
    <div className="bg-gradient-to-br from-amber-100 to-transparent mt-9 mb-9">
      {botones.map((boton) => (
        <div key={boton.id} className="flex items-center justify-center pb-20">
          <button
            className="flex flex-col items-center"
            onClick={() => alternarDespliegue(boton.id)}
          >
            <div className="flex items-center space-x-96">
              {/* Texto a la izquierda */}
              <p className="text-3xl font-semibold mr-60">
                Texto a la izquierda
              </p>

              {/* Botón para alternar el despliegue */}
              <button
                className={`text-white px-4 py-2 transition-transform duration-500 ${
                  boton.desplegado ? "rotate-45" : ""
                }`}
              >
                <img src={Suma} alt="Botón" className="w-7 h-7" />
              </button>
            </div>

            {/* Contenido que se mostrará u ocultará */}
            {boton.desplegado && (
              <div className="mt-4 p-4 border rounded-lg shadow-md transition-transform duration-700">
                <p className="text-xl text-center pl-40 pr-40 leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti eos repellat distinctio, quisquam unde nemo obcaecati
                  voluptatibus voluptas minima explicabo ducimus ea in libero
                  amet, et ipsa optio mollitia? Eveniet!
                </p>
              </div>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ComponenteDesplegable;
