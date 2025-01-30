import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/layout/Layout";
import { BattleLogType, ScoreType } from "../components/types/types";
import BattleLog from "../components/battlePage/log/BattleLog";
import fightLogic from "../utils/FightLogic";
import { getRandomBotName } from "../hooks/getRandomBotName";
import { getCurrentTime } from "../hooks/getCurrentTime";
import { showEgg } from "../utils/Easters";
import settings from "../settings/settings.json";
import { BattleInterface } from "../components/battlePage/selection/SelectionInterface";
import { ResultInterface } from "../components/battlePage/ResultInterface";
import { ScoreInterface } from "../components/battlePage/score/ScoreInterface";
import { useTelegram } from "hooks/useTelegram";
import "../styles/battle.scss";
import MainButton from "components/mainButton/MainButton";

showEgg();

const scoreDefaultValue = { botScore: 0, userScore: 0 };
const logDefaultValue = [{ time: getCurrentTime(), log: "Fight Started" }];

const BattlePage: React.FC = () => {
  const { tg, username, onToggleButton } = useTelegram();

  const [score, setScore] = useState<ScoreType>(scoreDefaultValue);
  const [userChoise, setUserChoise] = useState<number | null>(null);
  const [log, setLog] = useState<BattleLogType[]>(logDefaultValue);
  const [turn, setTurn] = useState<boolean>(true);
  const [botName, setBotName] = useState<string>(getRandomBotName());

  useEffect(() => {
    tg.ready();
    onToggleButton();
  }, []);

  const fightOptions = settings.fightOptions;

  const radioTitle = useMemo(() => {
    return turn ? "Pick an area to punch!" : "Pick an area to Block!";
  }, [turn]);
  const isResult = useMemo(
    () => score.botScore === 3 || score.userScore === 3,
    [score]
  );

  const restartGame = () => {
    setBotName(getRandomBotName());
    setScore(scoreDefaultValue);
    setLog(logDefaultValue);
    setUserChoise(null);
    setTurn(true);
  };

  const attackHandler = () => {
    fightLogic({
      setUserChoise,
      username,
      botName,
      score,
      setScore,
      userChoise,
      turn,
      setLog,
      setTurn,
    });
  };

  return (
    <Layout>
      {/* <Header>Enjoy the battle!</Header> */}
      {/* <Main> */}
      {/* </Main> */}
      {/* <Footer>Yor score:</Footer> */}
      <div className="battle-container">
        <h3>Welcome {username}!</h3>
        <ScoreInterface userName={username} botName={botName} score={score} />
        <BattleLog logArray={log} />
        {isResult ? (
          <ResultInterface
            botName={botName}
            userName={username}
            score={score}
            restartGame={restartGame}
          />
        ) : (
          <BattleInterface
            turn={turn}
            title={radioTitle}
            options={fightOptions}
            userChoise={userChoise}
            setUserChoise={setUserChoise}
            attackHandler={attackHandler}
          />
        )}
        <MainButton onClick={attackHandler}>
          {turn ? "Attack!" : "Block!"}
        </MainButton>
      </div>
    </Layout>
  );
};

export default BattlePage;
