import React from "react";
import { Link } from "react-router-dom";
import Uno from "../images/1.jpeg";
import Dos from "../images/1.jpeg";
import Tres from "../images/4.jpeg";
import Cuatro from "../images/5.jpeg";
import Cinco from "../images/6.jpeg";
import Seis from "../images/7.jpeg";
import Siete from "../images/8.jpeg";
import Ocho from "../images/9.jpeg";
import Nueve from "../images/10.jpeg";
const SectionWithGradient = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-t from-blue-100 to-slate-50 mt-28">
      <div className="absolute inset-0 "></div>

      <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-3 gap-2">
          {/* Elemento 1 */}
          <Link to="/ruta-elemento-1">
            <div className="relative">
              <div className="group">
                <img
                  src={Uno} // Reemplaza "imagen-1.jpg" con la ruta correcta a tu imagen
                  alt="1"
                  className="w-52 h-52 object-cover rounded overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl pointer-events-none">
                  Comida
                </div>
              </div>
            </div>
          </Link>

          {/* Elemento 2 */}
          <Link to="/ruta-elemento-1">
            <div className="relative">
              <div className="group">
                <img
                  src={Dos} // Reemplaza "imagen-1.jpg" con la ruta correcta a tu imagen
                  alt="1"
                  className="w-52 h-52 object-cover rounded overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl pointer-events-none">
                  Comida
                </div>
              </div>
            </div>
          </Link>

          {/* Elemento 3 */}
          <Link to="/ruta-elemento-1">
            <div className="relative">
              <div className="group">
                <img
                  src={Tres} // Reemplaza "imagen-1.jpg" con la ruta correcta a tu imagen
                  alt="1"
                  className="w-52 h-52 object-cover rounded-md overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl pointer-events-none">
                  Comida
                </div>
              </div>
            </div>
          </Link>

          {/* Elemento 4 */}
          <Link to="/ruta-elemento-1">
            <div className="relative">
              <div className="group">
                <img
                  src={Cuatro} // Reemplaza "imagen-1.jpg" con la ruta correcta a tu imagen
                  alt="1"
                  className="w-52 h-52 object-cover rounded overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl pointer-events-none">
                  Comida
                </div>
              </div>
            </div>
          </Link>

          {/* Elemento 5 */}
          <Link to="/ruta-elemento-1">
            <div className="relative">
              <div className="group">
                <img
                  src={Cinco} // Reemplaza "imagen-1.jpg" con la ruta correcta a tu imagen
                  alt="1"
                  className="w-52 h-52 object-cover rounded overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl pointer-events-none">
                  Comida
                </div>
              </div>
            </div>
          </Link>

          {/* Elemento 6 */}
          <Link to="/ruta-elemento-1">
            <div className="relative">
              <div className="group">
                <img
                  src={Seis} // Reemplaza "imagen-1.jpg" con la ruta correcta a tu imagen
                  alt="1"
                  className="w-52 h-52 object-cover rounded overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl pointer-events-none">
                  Comida
                </div>
              </div>
            </div>
          </Link>

          {/* Elemento 7 */}
          <Link to="/ruta-elemento-1">
            <div className="relative">
              <div className="group">
                <img
                  src={Siete} // Reemplaza "imagen-1.jpg" con la ruta correcta a tu imagen
                  alt="1"
                  className="w-52 h-52 object-cover rounded overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl pointer-events-none">
                  Comida
                </div>
              </div>
            </div>
          </Link>

          {/* Elemento 8 */}
          <Link to="/ruta-elemento-1">
            <div className="relative">
              <div className="group">
                <img
                  src={Ocho} // Reemplaza "imagen-1.jpg" con la ruta correcta a tu imagen
                  alt="1"
                  className="w-52 h-52 object-cover rounded overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl pointer-events-none">
                  Comida
                </div>
              </div>
            </div>
          </Link>

          {/* Elemento 9 */}
          <Link to="/ruta-elemento-1">
            <div className="relative">
              <div className="group">
                <img
                  src={Nueve} // Reemplaza "imagen-1.jpg" con la ruta correcta a tu imagen
                  alt="1"
                  className="w-52 h-52 object-cover rounded overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl pointer-events-none">
                  Comida
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionWithGradient;
