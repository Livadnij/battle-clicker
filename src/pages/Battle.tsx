import React from 'react';
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const userName = window.Telegram?.WebApp.initDataUnsafe?.user?.username || 'User';

const BattlePage: React.FC = () => (
    <Layout>
        <Header>Enjoy the battle!</Header>
        <Main>Welcome {userName}!</Main>
        <Footer>Yor score:</Footer>
    </Layout>
);

export default BattlePage;
