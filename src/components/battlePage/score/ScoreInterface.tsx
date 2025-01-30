import * as React from "react";

import styles from "./ScoreInterface.module.scss";

type ScoreInterfaceProps = {
  userName: string;
  botName: string;
  score: { botScore: number; userScore: number };
};

export function ScoreInterface({
  userName,
  botName,
  score,
}: ScoreInterfaceProps) {
  return (
    <div className={styles["score-container"]}>
      <h2>SCORE</h2>
      <div className={styles["score"]}>
        <div className={styles["score-first"]}>
          <h1>{score.userScore}</h1>
          <h4>{userName}</h4>
        </div>
        <div className={styles["score-colon"]}>
          <h1> : </h1>
        </div>
        <div className={styles["score-second"]}>
          <h1> {score.botScore}</h1>
          <h4>{botName}</h4>
        </div>
      </div>
    </div>
  );
}
