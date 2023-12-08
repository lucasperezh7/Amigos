import React from "react";
import Imagen1 from "../Surf/Images/1.jpeg";
import Imagen2 from "../Surf/Images/2.jpeg";

const ImagenConTexto = () => {
  return (
    <div className="flex justify-center pt-20 pb-16 h-screen space-x-20">
      <div className="relative overflow-hidden brightness-90 hover:brightness-100 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <img
          className="w-full h-full object-cover d"
          src={Imagen1}
          alt="Tu Imagen 1"
        />
        <div className=" pt-20 font-medium absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-2xl">
          BEGINERS
        </div>
      </div>
      <div className="relative overflow-hidden brightness-90 hover:brightness-100 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <img
          className="w-full h-full object-cover "
          src={Imagen2}
          alt="Tu Imagen 2"
        />
        <div className=" pt-20 font-medium absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-2xl">
          INTERMEDIATE
        </div>
      </div>
    </div>
  );
};

export default ImagenConTexto;
