import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/client";
import { initAnalytics } from "./utils/analytics";

declare global {
    interface Window {
        Telegram: any;
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

initAnalytics();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>
);