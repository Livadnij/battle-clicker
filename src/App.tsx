import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import WelcomePage from "./pages/Welcome";

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
    </BrowserRouter>
);

export default App;
