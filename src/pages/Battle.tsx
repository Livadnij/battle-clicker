import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import FightLogic from "../components/battlePage/logic/FightLogic";
import Main from "../components/layout/Main";
import { BattleLogType, ScoreType } from "@/components/types/types";
import RadioGroup from "../components/battlePage/RadioGroup";
import BattleLog from "../components/battlePage/BattleLog";

const userName =
  window.Telegram?.WebApp.initDataUnsafe?.user?.username || "User";

const scoreDefaultValue = { botScore: 0, userScore: 0 };

const getCurrentTime = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const logDefaultValue = [{ time: getCurrentTime(), log: "Fight Started" }];

const botNameArray = [
  "Hemingway",
  "William Shatner",
  "Palahniuk",
  "મહાત્મા",
  "Lincoln",
  "Boss",
  "Dad",
];

const randomizeBotsName = () => {
  const randomNum = Math.floor(Math.random() * botNameArray.length);
  return botNameArray[randomNum];
};

const BattlePage: React.FC = () => {
  const [score, setScore] = useState<ScoreType>(scoreDefaultValue);
  const [userChoise, setUserChoise] = useState<number | null>(null);
  const [log, setLog] = useState<BattleLogType[]>(logDefaultValue);
  const [turn, setTurn] = useState<boolean>(true);
  const [botName, setBotName] = useState<string>(randomizeBotsName());

  const attackHandler = () => {
    FightLogic({
      setUserChoise,
      userName,
      botName,
      score,
      setScore,
      userChoise,
      turn,
      setLog,
      setTurn,
    });
  };

  const radioGroupText = {
    title: turn ? "Pick an area to punch!" : "Pick an area to Block!",
    optionOne: { title: "head", value: 0 },
    optionTwo: { title: "body", value: 1 },
    optionThree: { title: "legs", value: 2 },
  };

  const restartGame = () => {
    setBotName(randomizeBotsName());
    setScore(scoreDefaultValue);
    setUserChoise(null);
    setLog(logDefaultValue);
    setTurn(true);
  };

  return (
    <Layout>
      {/* <Header>Enjoy the battle!</Header> */}
      <Main>
        <div>Welcome {userName}!</div>
        <h2>SCORE</h2>
        <h3>{`${userName} : ${score.userScore} points`}</h3>
        <h3>{`${botName} : ${score.botScore} points`}</h3>
        <BattleLog logArray={log} />
        {score.botScore === 3 || score.userScore === 3 ? (
          <>
            <h2>{`${score.botScore === 3 ? botName : userName} WON`}</h2>
            <span>{`Another fight?`}</span>
            <button onClick={restartGame}>yes!</button>
          </>
        ) : (
          <>
            <RadioGroup
              userChoise={userChoise}
              setUserChoise={setUserChoise}
              text={radioGroupText}
            />
            <button onClick={attackHandler}>
              {turn ? "Attack!" : "Block!"}{" "}
            </button>
          </>
        )}
      </Main>
      {/* <Footer>Yor score:</Footer> */}
    </Layout>
  );
};

export default BattlePage;
