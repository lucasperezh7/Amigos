import React from "react";
import Amigos from "../assets/amigos2.svg";
const Footer = () => {
  return (
    <footer className="pt-20">
      <div className="bg-sky-800 opacity-70 pl-24 pt-8 pb-8 flex space-x-16 items-center">
        <img
          src={Amigos}
          alt="Logo"
          className="w-52 h-auto ml-16 mr-8 object-cover rounded-lg"
        />
        <div className="flex flex-col ml-6">
          <div className="flex space-x-28 text-zinc-200 mt-4">
            <p className="text-lg ">Amigos</p>
            <p className="text-lg">Dreamsea</p>
            <p className="text-lg">Nieve</p>
            <p className="text-lg">Portugal</p>
          </div>
          <hr className="my-6 border-t-2 border-gray-300" />
          <div className="flex space-x-28 text-zinc-200">
            <p className="text-lg ">Amigos</p>
            <p className="text-lg">Dreamsea</p>
            <p className="text-lg">Nieve</p>
            <p className="text-lg">Portugal</p>
          </div>
        </div>
        <div className="flex items-center bg-gray-200 rounded-full">
          <input
            type="text"
            placeholder="Buscar..."
            className="py-2 px-4 rounded-l-full focus:outline-none"
          />
          <button className="bg-slate-300 text-white rounded-r-full p-5">
            {/* Puedes insertar un ícono de búsqueda aquí */}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
