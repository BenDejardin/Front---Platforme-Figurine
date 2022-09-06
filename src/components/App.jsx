import React from "react";
import Figurines from "./Figurines";
import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Add";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Figurines />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  );
}

export default App;
