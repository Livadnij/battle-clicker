import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/layout/Layout";
import { BattleLogType, ScoreType } from "../types/types";
import BattleLog from "../components/battlePage/log/BattleLog";
import fightLogic from "../utils/FightLogic";
import { getRandomBotName } from "../hooks/getRandomBotName";
import { getCurrentTime } from "../hooks/getCurrentTime";
import { showEgg } from "../utils/Easters";
import settings from "../settings/settings.json";
import { BattleInterface } from "../components/battlePage/selection/SelectionInterface";
import { ScoreInterface } from "../components/battlePage/score/ScoreInterface";
import { useTelegram } from "hooks/useTelegram";
import styles from "../styles/battle.module.scss";
import { useUser } from "hooks/UserContext";
import { ResultInterface } from "components/battlePage/result/ResultInterface";
import { useNavigation } from "hooks/useNavigation";
import { updateField, updateUser } from "../firebase/firebaseFirestore";

showEgg();

const scoreDefaultValue = { botScore: 0, userScore: 0 };
const logDefaultValue = [{ time: getCurrentTime(), log: "Fight Started" }];

const BattlePage: React.FC = () => {
  const { goHome } = useNavigation();
  const { user } = useUser();
  const { tg_username } = useTelegram();
  const [botName, setBotName] = useState(getRandomBotName());

  const [score, setScore] = useState<ScoreType>(scoreDefaultValue);
  const [userChoise, setUserChoise] = useState<number | null>(null);
  const [log, setLog] = useState<BattleLogType[]>(logDefaultValue);
  const [turn, setTurn] = useState<boolean>(true);
  const [userBided, setUserBided] = useState<boolean>(false);

  const fightOptions = settings.fightOptions;
  const fightPrice = settings.fightPrice;

  const radioTitle = useMemo(() => {
    return turn ? "Pick an area to punch!" : "Pick an area to Block!";
  }, [turn]);
  const isResult = useMemo(
    () => score.botScore === 3 || score.userScore === 3,
    [score]
  );

  const attackHandler = () => {
    fightLogic({
      setUserChoise,
      username: user?.username ? user.username : tg_username,
      botName,
      score,
      setScore,
      userChoise,
      turn,
      setLog,
      setTurn,
      botSurrender: user?.fights_quantity
        ? user?.fights_quantity > 3
          ? false
          : true
        : true,
    });
  };

  const changeUserBalance = async (state: string) => {
    const currentBalance = user?.balance!;

    const newBalance =
      state === "win"
        ? currentBalance + fightPrice
        : state === "bid"
        ? currentBalance - fightPrice
        : undefined;

    if (state !== "bid" && state !== "win") return;

    try {
      await updateField("users", user?.id.toString()!, "balance", newBalance);
    } catch (error) {
      console.log("Failed to fetch user data");
    }
  };

  const changeUserFightQuantity = async () => {
    const currentFightQuantity = user?.fights_quantity!;
    const newFightQuantity = currentFightQuantity + 1;

    await updateField(
      "users",
      user?.id.toString()!,
      "fights_quantity",
      newFightQuantity
    );
  };

  useEffect(() => {
    if (!userBided) {
      changeUserBalance("bid");
      setUserBided((prev) => !prev);
    }
  }, []);

  const handleExitFight = () => {
    if (score.botScore === 3) {
      changeUserFightQuantity();
      goHome();
    }
    if (userBided && score.userScore === 3) {
      changeUserBalance("win");
      changeUserFightQuantity();
      goHome();
    }
  };

  return (
    <Layout
      buttonTitle={
        score.botScore === 3 || score.userScore === 3
          ? "home"
          : turn
          ? "Attack!"
          : "Block!"
      }
      onClick={
        score.botScore === 3 || score.userScore === 3
          ? handleExitFight
          : attackHandler
      }
    >
      <div className={styles["battle-container"]}>
        <ScoreInterface
          userName={user?.username ? user.username : tg_username}
          botName={botName}
          score={score}
        />
        <BattleLog logArray={log} />
        {isResult ? (
          <ResultInterface botName={botName} score={score} />
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
      </div>
    </Layout>
  );
};

export default BattlePage;
