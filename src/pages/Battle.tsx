import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import FightLogic from "../components/logic/FightLogic";

const userName =
  window.Telegram?.WebApp.initDataUnsafe?.user?.username || "User";

type ScoreType = {
  bot: number;
  user: number;
};

const BattlePage: React.FC = () => {
  const [score, setScore] = useState<ScoreType>({ bot: 0, user: 0 });

  const attackHandler = () => {
    FightLogic(playerScore, playersAttack, round, botScore);
  };

  return (
    <Layout>
      <h1>Battle Page!</h1>
      <div>Welcome {userName}!</div>
      <button onClick={AttackHandler}> Hit! </button>
    </Layout>
  );
};

export default BattlePage;
