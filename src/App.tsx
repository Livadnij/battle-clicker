import React from "react";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import FightPage from "./pages/Fight";
import HomePage from "./pages/Home";
import { UserProvider } from "context/UserContext";
import RegisterPage from "pages/Register";
import DepositPage from "pages/Deposit";

const App: React.FC = () => (
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/fight" element={<FightPage />} />
        <Route path="/deposit" element={<DepositPage />} />
      </Routes>
    </UserProvider>
  </BrowserRouter>
);

export default App;
