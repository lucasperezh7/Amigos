import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Image1 from "../images/8.jpeg";
import Image2 from "../images/6.jpeg";
import Image3 from "../images/10.jpeg";

const ImageCarousel = () => {
  const images = [Image1, Image2, Image3];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-2/3 h-96 overflow-hidden mx-auto my-auto">
        <button
          className="text-5xl absolute top-1/2 left-6 transform -translate-y-1/2 text-white p-2"
          onClick={prevImage}
        >
          {"<"}
        </button>

        <img
          src={images[currentImage]}
          alt={`Imagen ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />

        <button
          className="text-5xl absolute top-1/2 right-6 transform -translate-y-1/2  text-white p-2"
          onClick={nextImage}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

// Uso del componente
const App = () => {
  return <ImageCarousel />;
};

export default App;
