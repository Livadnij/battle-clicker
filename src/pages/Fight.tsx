import React, { useEffect, useMemo, useState } from "react";

import Layout from "../components/layout/Layout";
import { BattleLogType, ScoreType } from "../types/types";
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
import { ReactComponent as FightHeader } from "../assets/layout/fight/header-line.svg";
import { ReactComponent as HeaderAttack } from "../assets/layout/fight/attack.svg";
import { ReactComponent as HeaderDefeat } from "../assets/layout/fight/defeat.svg";
import BattleHeader from "components/battlePage/battleHeader/BattleHeader";
import BattleLog from "components/battlePage/battleLog/BattleLog";
import OldBattleInterface from "components/battlePage/battleInterface/OldBattleInterface";
import { trackEvent } from "utils/analytics";

const scoreDefaultValue = { botScore: 0, userScore: 0 };

const FightPage: React.FC = () => {
  const botList = settings.botData;
  const { goDefeat, goVictory, goHome } = useNavigation();
  const { user, setUser } = useUser();
  const [botData, setBotData] = useState(botList[randomizer(1, 4) - 1]);

  const [score, setScore] = useState<ScoreType>(scoreDefaultValue);
  const [userChoice, setUserChoice] = useState<number | null>(null);
  const [log, setLog] = useState<BattleLogType[]>([]);
  const [turn, setTurn] = useState<boolean>(!!randomizer(0, 1));
  const [userBided, setUserBided] = useState<boolean>(false);

  const userAvatar = user ? user.avatar : randomizer(1, 4) - 1;
  const userName = user ? user.username : "not found";
  const areas: any = settings.fightOptions;
  const fightPrice = settings.fightPrice;
  const maxScore = settings.maxScore;
  const maxBotSurrenderCount = settings.maxBotSurrenderCount;
  const botSurrender = user?.fights_quantity! < maxBotSurrenderCount;
  const fightUID = `${user?.id!}-${Date.now()}`;

  areas.forEach((area: any) => {
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

  const isWinner = useMemo(() => {
    if (score.botScore === 3) {
      return botData.name;
    } else if (score.userScore === 3) {
      return user ? user?.username : "no name";
    } else {
      return "";
    }
  }, [score]);

  const attackHandler = () => {
    if (isWinner) return;
    trackEvent.MOVE_MADE({ fightid: fightUID });

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
      botName: botData.name,
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

  // useEffect(() => {
  //   if (!user) {
  //     goHome();
  //     return;
  //   }
  //   if (!userBided && user.balance >= fightPrice) {
  //     trackEvent.FIGHT_SCREEN({ fightid: fightUID });
  //     handleChangeBalance({ state: "bid", user, fightPrice });
  //     setUserBided((prev) => !prev);
  //   }
  // }, []);

  const exitCallback = () => {
    trackEvent.FIGHT_FINISHED({ fightid: fightUID });
    if (!user) return;
    if (isWinner === user?.username) {
      setUser({ ...user, balance: user.balance + fightPrice });
      goVictory();
    } else {
      setUser({ ...user, balance: user.balance - fightPrice });
      goDefeat();
    }
  };

  const getHeader = () => {
    if (isWinner === user?.username) {
      return "you won";
    } else if (isWinner === botData.name) {
      return "you lost";
    } else if (turn) {
      return <HeaderAttack className={styles["container__header-attack"]} />;
    } else if (!turn) {
      return <HeaderDefeat className={styles["container__header-defend"]} />;
    }
  };

  return (
    <Layout
      backgroundImage={fightBackground}
      buttonTitle={isWinner ? "next" : turn ? "Attack" : "defend"}
      onClick={
        isWinner
          ? () =>
              handleExitFight({
                score,
                user,
                userBided,
                fightPrice,
                exitCallback,
              })
          : userChoice === null
          ? () => {}
          : attackHandler
      }
    >
      <div className={styles["container"]}>
        <div className={styles["container__header"]}>
          <FightHeader className={styles["container__header-line"]} />
          {getHeader()}
        </div>
        <div className={styles["body"]}>
          <BattleHeader
            userAvatar={userAvatar}
            enemyAvatar={botData.avatar}
            userName={userName}
            botName={botData.name}
            score={score}
          />
          <BattleLog
            userName={userName}
            botName={botData.name}
            logArray={log}
            isWinner={isWinner}
          />
          <OldBattleInterface
            isWinner={isWinner}
            turn={turn}
            useChoice={userChoice}
            setUserChoice={setUserChoice}
            areas={areas}
          />
        </div>
      </div>
    </Layout>
  );
};

export default FightPage;
