import React, { useEffect, useState } from "react";
import Fondo from "../images/4.jpeg";
import Logo from "../assets/amigos2.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;

      setScrollProgress(scrollY / maxScroll);
    };

    // Agregar el listener al evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundImage: `url(${Fondo})`,
    backgroundSize: "1600px 1200px",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
    color: "white",
  };

  const h1Style = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "background-color 0.1s ease, color 0.2s ease", // Definir ambas transiciones
    backgroundColor: `rgba(255, 255, 255, ${scrollProgress})`,
  };

  return (
    <header style={headerStyle}>
      <div
        style={h1Style}
        className="pl-24 pt-6 pb-6 flex space-x-16 items-center"
      >
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-52 h-auto ml-16 mr-48 object-cover rounded-lg"
          />
        </Link>
        <div className="flex space-x-28">
          <Link to="/">
            <p className="text-lg">Amigos</p>
          </Link>
          <p className="text-lg">Dreamsea</p>
          <p className="text-lg">Nieve</p>
          <p className="text-lg">Portugal</p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-center pt-60 pl-64 pr-72">
          PORQUE ME DA LA GANA Y PORQUE NUNCA SE SABE A DONDE ME PUEDE LLEVAR
          ALGO QUE ME GUSTA HACER
        </h1>
      </div>
    </header>
  );
};

export default Header;
