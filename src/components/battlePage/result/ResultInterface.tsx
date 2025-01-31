import * as React from "react";

import styles from "./ResultInterface.module.scss";

type ResultInterfaceProps = {
  botName: string;
  userName: string;
  score: { botScore: number; userScore: number };
  restartGame: () => void;
};

export function ResultInterface({
  botName,
  userName,
  score,
  restartGame,
}: ResultInterfaceProps) {
  return (
    <div className={styles["result-container"]}>
      <h2>{`${score.botScore === 3 ? botName : userName} WON`}</h2>
      <span>{`Another fight?`}</span>
      <button onClick={restartGame}>yes!</button>
    </div>
  );
}
