import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";
import Cantabria from "./routes/Cantabria";
import Surf from "./routes/Surf";
import Camp from "./routes/Camp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/Cantabria" element={<Cantabria />} />
        <Route path="/Surf" element={<Surf />} />
        <Route path="/Camp" element={<Camp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
