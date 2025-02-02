import * as React from "react";

import styles from "./ResultInterface.module.scss";
import { useTelegram } from "hooks/useTelegram";
import { useUser } from "hooks/UserContext";

type ResultInterfaceProps = {
  botName: string;
  score: { botScore: number; userScore: number };
};

export function ResultInterface({ botName, score }: ResultInterfaceProps) {
  const { tg_username } = useTelegram();
  const { user } = useUser();
  return (
    <div className={styles["result-container"]}>
      <h1>{`${
        score.userScore === 3
          ? user?.username
            ? user.username
            : tg_username
          : botName
      } Won`}</h1>
    </div>
  );
}
