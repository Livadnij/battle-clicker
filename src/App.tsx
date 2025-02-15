import React from "react";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import FightPage from "./pages/Fight";
import HomePage from "./pages/Home";
import { UserProvider } from "context/UserContext";
import DepositOnboardingPage from "pages/DepositOnboarding";
import RulesPage from "pages/Rules";
import LoadingPage from "pages/Loading";
import RegisterOnboardingPage from "./pages/RegisterOnboarding";

const App: React.FC = () => (
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<FightPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/deposit" element={<DepositOnboardingPage />} />
        <Route path="/register" element={<RegisterOnboardingPage />} />
        <Route path="/loading" element={<LoadingPage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/fight" element={<FightPage />} />
      </Routes>
    </UserProvider>
  </BrowserRouter>
);

export default App;
