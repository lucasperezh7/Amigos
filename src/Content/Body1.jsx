import React from "react";
import Amigos from "../images/amigos.png";
import Body2 from "./Body2";

const BodyWithImageAndText = () => {
  return (
    <>
      <body className="h-screen">
        <div
          className="flex items-center justify-center bg-white
      mt-10 mb-20"
        >
          <img
            src={Amigos}
            alt="Descripción de la imagen"
            className="w-auto h-36 object-cover ml-56 rounded-lg"
          />
          <div className="max-w-3xl mx-auto text-3xl font-bold p-14 border rounded-lg shadow-2xl bg-white">
            <p className="text-gray-700">
              Cuando no sepas que hacer, simplemente ponte a hacer algo, ocúpate
              y poco a poco notarás como avanzas. Todo paso cuenta.
            </p>
          </div>
        </div>
        <Body2 />
      </body>
    </>
  );
};

export default BodyWithImageAndText;
