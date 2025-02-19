import React, { useEffect, useMemo, useState } from "react";

import Layout from "../components/layout/Layout";
import { BattleLogType, ScoreType } from "../types/types";
import { getRandomBotName } from "../helpers/getRandomBotName";
import { getCurrentTime } from "../helpers/getCurrentTime";
import { showConsoleArt } from "../utils/ConsoleArt";
import settings from "../settings/settings.json";
import styles from "../styles/battle.module.scss";
import { useUser } from "context/UserContext";
import { useNavigation } from "hooks/useNavigation";
import { randomizer } from "utils/Randomizer";
import { getBotChoice } from "helpers/getBotChoice";
import { logTemplate } from "helpers/logTemplate";
import { resolveFightLogic } from "helpers/resolveFightLogic";
import { handleChangeBalance } from "helpers/handleChangeBalance";
import { handleExitFight } from "helpers/handleExitFight";
import fightBackground from "../assets/layout/fight/fight-background.png";
import { ReactComponent as Head } from "../assets/layout/fight/head.svg";
import { ReactComponent as Body } from "../assets/layout/fight/body.svg";
import { ReactComponent as Legs } from "../assets/layout/fight/legs.svg";
import UserAvatar from "../assets/layout/avatars/avatar-1.png";
import BotAvatar from "../assets/layout/avatars/avatar-4.png";
import BattleInterface from "../components/battlePage/battleInterface/BattleInterface";
import BattleLog from "../components/battlePage/log/BattleLog";
import { ReactComponent as FightHeader } from "../assets/layout/fight/header-line.svg";
import headerAttack from "../assets/layout/fight/attack.svg";
import headerDefeat from "../assets/layout/fight/defeat.svg";

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

  const userAvatar = user ? user.avatar : randomizer(1, 4) - 1;
  const enemyAvatar = randomizer(1, 4) - 1;
  const userName = user ? user.username : "not found";
  const areas: any = settings.fightOptions;
  const fightPrice = settings.fightPrice;
  const maxScore = settings.maxScore;
  const maxBotSurrenderCount = settings.maxBotSurrenderCount;
  const botSurrender = user?.fights_quantity! > maxBotSurrenderCount;

  areas.map((area: any) => {
    if (area.title === "head") {
      area.image = <Head className={styles["battle__item-image"]} />;
    } else if (area.title === "body") {
      area.image = <Body className={styles["battle__item-image"]} />;
    } else if (area.title === "legs") {
      area.image = (
        <Legs
          style={{ height: "80%" }}
          className={styles["battle__item-image"]}
        />
      );
    }
  });

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
      backgroundImage={fightBackground}
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
      <div className={styles["battle"]}>
        <div className={styles["battle__header"]}>
          <FightHeader className={styles["battle__header-line"]} />
          <img
            className={styles["battle__header-state"]}
            src={turn ? headerAttack : headerDefeat}
          />
        </div>
        <div className={styles["body"]}>
          <BattleLog
            userAvatar={userAvatar}
            enemyAvatar={enemyAvatar}
            userName={userName}
            botName={botName}
            logArray={log}
            score={score}
          />
          <BattleInterface areas={areas} />
        </div>
      </div>
    </Layout>
  );
};

export default FightPage;
