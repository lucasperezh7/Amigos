import React from "react";
import { Link } from "react-router-dom";
import Cantabria from "../images/cantabria.png";
import Surf from "../images/surf.png";
import Camp from "../images/camp.png";

const Body2 = () => {
  return (
    <div className="flex items-center justify-center space-x-10 bg-white">
      <Link to="/Cantabria#inicio">
        <div className="relative group">
          <img
            src={Cantabria}
            alt="Descripción de la imagen"
            className="w-auto h-auto object-cover rounded-lg"
          />
          <div className="absolute bottom-10 left-0 w-full text-center text-white text-3xl font-bold transition-transform transform group-hover:scale-110">
            Cantabria
          </div>
        </div>
      </Link>
      <Link to="/Surf">
        <div className="relative group">
          <img
            src={Surf}
            alt="Descripción de la imagen"
            className="w-auto h-auto object-cover rounded-lg "
          />
          <div className="absolute bottom-10 left-0 w-full text-center text-white text-3xl font-bold transition-transform transform group-hover:scale-110">
            Surf
          </div>
        </div>
      </Link>
      <Link to="/Camp">
        <div className="relative group">
          <img
            src={Camp}
            alt="Descripción de la imagen"
            className="w-auto h-auto object-cover rounded-lg "
          />
          <div className="absolute bottom-10 left-0 w-full text-center text-white text-3xl font-bold transition-transform transform group-hover:scale-110">
            Camp
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Body2;
