import React from "react";
import ComponenteDesplegable from "./Desplegable";
import Body2 from "../Body2";
import Text from "./texto";
import Body6 from "../Body7";
import Boton from "./Boton";
const BodyCantabria = () => {
  return (
    <div className="">
      <Text />
      <div className="text-white pt-20"></div>
      <ComponenteDesplegable />
      <Body2 />
      <Boton />
    </div>
  );
};

export default BodyCantabria;
