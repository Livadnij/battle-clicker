import React from "react";
import "./App.css";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WelcomePage from "./pages/Welcome";
import BattlePage from "./pages/Battle";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BattlePage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/battle" element={<BattlePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
