import React from 'react';
import Layout from "../components/layout/Layout";

const userName = window.Telegram?.WebApp.initDataUnsafe?.user?.username || 'User';

const BattlePage: React.FC = () => (
    <Layout>
        <h1>Battle Page!</h1>
        <div>Welcome {userName}!</div>
    </Layout>
);

export default BattlePage;
