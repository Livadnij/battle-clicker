import React from "react";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import BattlePage from "./pages/Battle";
import HomePage from "./pages/Home";
import { UserProvider } from "hooks/UserContext";
import RegisterPage from "pages/Register";

const App: React.FC = () => (
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/battle" element={<BattlePage />} />
      </Routes>
    </UserProvider>
  </BrowserRouter>
);

export default App;
