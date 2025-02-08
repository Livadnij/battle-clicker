import React, { useEffect, useMemo, useState } from "react";

import Layout from "../components/layout/Layout";
import { BattleLogType, ScoreType } from "../types/types";
import BattleLog from "../components/battlePage/log/BattleLog";
import { getRandomBotName } from "../helpers/getRandomBotName";
import { getCurrentTime } from "../helpers/getCurrentTime";
import { showConsoleArt } from "../utils/ConsoleArt";
import settings from "../settings/settings.json";
import { BattleInterface } from "../components/battlePage/selection/SelectionInterface";
import { ScoreInterface } from "../components/battlePage/score/ScoreInterface";
import styles from "../styles/battle.module.scss";
import { useUser } from "context/UserContext";
import { ResultInterface } from "components/battlePage/result/ResultInterface";
import { useNavigation } from "hooks/useNavigation";
import { randomizer } from "utils/Randomizer";
import { getBotChoice } from "helpers/getBotChoice";
import { logTemplate } from "helpers/logTemplate";
import { resolveFightLogic } from "helpers/resolveFightLogic";
import { handleChangeBalance } from "helpers/handleChangeBalance";
import { handleExitFight } from "helpers/handleExitFight";

showConsoleArt();

const scoreDefaultValue = { botScore: 0, userScore: 0 };
const logDefaultValue = [{ time: getCurrentTime(), log: "Fight Started" }];

const FightPage: React.FC = () => {
  const { goHome } = useNavigation();
  const { user } = useUser();
  const [botName, setBotName] = useState(getRandomBotName());

  const [score, setScore] = useState<ScoreType>(scoreDefaultValue);
  const [userChoice, setUserChoice] = useState<number | null>(null);
  const [log, setLog] = useState<BattleLogType[]>(logDefaultValue);
  const [turn, setTurn] = useState<boolean>(!!randomizer(0, 1));
  const [userBided, setUserBided] = useState<boolean>(false);

  const userName = user ? user.username : "not found";
  const areas = settings.fightOptions;
  const fightPrice = settings.fightPrice;
  const maxScore = settings.maxScore;
  const maxBotSurrenderCount = settings.maxBotSurrenderCount;
  const botSurrender = user?.fights_quantity! > maxBotSurrenderCount;

  const radioTitle = useMemo(() => {
    return turn ? "Pick an area to punch!" : "Pick an area to Block!";
  }, [turn]);
  const isResult = useMemo(
    () => score.botScore === 3 || score.userScore === 3,
    [score]
  );

  const attackHandler = () => {
    const botChoice = getBotChoice({
      userChoice,
      score,
      turn,
      areas,
      maxScore,
      botSurrender,
    });

    const currentLog = logTemplate({
      turn,
      userName,
      botName,
      areas,
      botChoice,
      userChoice,
    });

    resolveFightLogic({
      turn,
      userChoice,
      botChoice,
      setScore,
      setTurn,
      setLog,
      setUserChoice,
      currentLog,
    });
  };

  useEffect(() => {
    if (!userBided) {
      handleChangeBalance({ state: "bid", user, fightPrice });
      setUserBided((prev) => !prev);
    }
  }, []);

  const userWins = score.botScore === 3 || score.userScore === 3;

  return (
    <Layout
      buttonTitle={userWins ? "home" : turn ? "Attack!" : "Block!"}
      onClick={
        userWins
          ? () =>
              handleExitFight({ score, user, userBided, fightPrice, goHome })
          : userChoice === null
          ? () => {}
          : attackHandler
      }
    >
      <div className={styles["battle-container"]}>
        <ScoreInterface userName={userName} botName={botName} score={score} />
        <BattleLog logArray={log} />
        {isResult ? (
          <ResultInterface botName={botName} score={score} />
        ) : (
          <BattleInterface
            turn={turn}
            title={radioTitle}
            options={areas}
            userChoise={userChoice}
            setUserChoise={setUserChoice}
            attackHandler={attackHandler}
          />
        )}
      </div>
    </Layout>
  );
};

export default FightPage;
