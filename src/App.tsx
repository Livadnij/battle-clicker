import React from "react";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import BattlePage from "./pages/Battle";
import HomePage from "./pages/Home";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BattlePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/battle" element={<BattlePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
