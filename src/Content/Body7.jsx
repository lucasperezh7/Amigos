import React from "react";
import Imagen1 from "../images/10.jpeg";
import Imagen2 from "../images/11.jpeg";
import Imagen3 from "../images/9.jpeg";
import Imagen4 from "../images/8.jpeg";
import Imagen5 from "../images/7.jpeg";
import Imagen6 from "../images/6.jpeg";

const Body7 = () => {
  return (
    <>
      <div>
        <h1 className="mt-28 mb-7 text-4xl font-bold pl-16">Some Memories</h1>
      </div>
      <div className="grid grid-cols-6 gap">
        {/* Imagen 1 */}
        <img
          src={Imagen1}
          alt="Imagen 1"
          className="w-full h-full object-cover"
        />

        {/* Imagen 2 */}
        <img
          src={Imagen2}
          alt="Imagen 2"
          className="w-full h-full object-cover "
        />

        {/* Imagen 3 */}
        <img
          src={Imagen3}
          alt="Imagen 3"
          className="w-full h-full object-cover "
        />

        {/* Imagen 4 */}
        <img
          src={Imagen4}
          alt="Imagen 4"
          className="w-full h-full object-cover "
        />

        {/* Imagen 5 */}
        <img
          src={Imagen5}
          alt="Imagen 5"
          className="w-full h-full object-cover"
        />

        {/* Imagen 6 */}
        <img
          src={Imagen6}
          alt="Imagen 6"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Body7;
