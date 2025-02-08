import * as React from "react";

import styles from "./ResultInterface.module.scss";
import { useTelegram } from "hooks/useTelegram";
import { useUser } from "context/UserContext";
import settings from "../../../settings/settings.json";

type ResultInterfaceProps = {
  botName: string;
  score: { botScore: number; userScore: number };
};

export function ResultInterface({ botName, score }: ResultInterfaceProps) {
  const { tg_username } = useTelegram();
  const { user } = useUser();

  const userWin = score.userScore === 3;
  const fightPrice = settings.fightPrice;

  return (
    <div className={styles["result-container"]}>
      <h1>{`${
        userWin ? (user?.username ? user.username : tg_username) : botName
      } Won`}</h1>
      <h2>
        {userWin
          ? `You recieved ${fightPrice} Stars from ${botName}`
          : `You lost ${fightPrice} Stars to ${botName}`}
      </h2>
    </div>
  );
}
