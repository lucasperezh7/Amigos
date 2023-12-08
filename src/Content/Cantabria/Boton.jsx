import React from "react";

const Boton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-slate-50 ">
      <div className="flex flex-col items-center justify-center">
        {/* Botón en la parte central */}
        <button className="bg-transparent text-sky-800 hover:bg-sky-800 hover:text-white px-6 py-3 mt-20 rounded-lg text-xl font-medium border-sky-800 border-solid border-2 transition-all duration-300">
          Book now
        </button>
      </div>
    </div>
  );
};

export default Boton;
